import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import { data } from "./data"
import Split from "react-split"
import { nanoid } from "nanoid"

import css from "./styles.css"

export default function App() {
    // localStorage.clear();
    const [notes, setNotes] = React.useState(
        () => JSON.parse(localStorage.getItem("notes-app.notes")) || []
    );

    React.useEffect(() => {
        localStorage.setItem("notes-app.notes", JSON.stringify(notes));
    }, [notes]);

    const [currentNoteId, setCurrentNoteId] = React.useState(
        JSON.parse(localStorage.getItem("notes-app.currentNoteId")) || ""
    )

    React.useEffect(() => {
        localStorage.setItem("notes-app.currentNoteId", JSON.stringify(currentNoteId));
    }, [currentNoteId]);

    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [newNote, ...prevNotes]);
        setCurrentNoteId(newNote.id);
    }

    function updateNote(text) {
        setNotes(oldNotes => {
            // const i = oldNotes.findIndex(e => e.id === currentNoteId);
            // const upd = { ...(oldNotes[i]), body: text };
            // oldNotes.splice(i, 1);
            // return [upd, ...oldNotes]
            const newNotes = [];
            newNotes.push(null);
            oldNotes.forEach(element => {
                if (element.id === currentNoteId) {
                    newNotes[0] = { ...element, body: text };
                } else {
                    newNotes.push(element);
                }
            });
            return newNotes;
        });
    }

    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }

    function deleteNote(event, noteId) {
        event.stopPropagation();
        setNotes(oldNotes => {
            const newNotes = [];
            oldNotes.forEach(element => {
                if (element.id === noteId) { } else {
                    newNotes.push(element);
                }
            });
            return newNotes;
        });
    }

    return (
        <main>
            {
                notes.length > 0
                    ?
                    <Split
                        sizes={[30, 70]}
                        direction="horizontal"
                        className="split"
                    >
                        <Sidebar
                            notes={notes}
                            currentNote={findCurrentNote()}
                            setCurrentNoteId={setCurrentNoteId}
                            newNote={createNewNote}
                            deleteNote={deleteNote}
                        />
                        {
                            currentNoteId &&
                            notes.length > 0 &&
                            <Editor
                                currentNote={findCurrentNote()}
                                updateNote={updateNote}
                            />
                        }
                    </Split>
                    :
                    <div className="no-notes">
                        <h1>You have no notes</h1>
                        <button
                            className="first-note"
                            onClick={createNewNote}
                        >
                            Create one now
                        </button>
                    </div>

            }
        </main>
    )
}
