import React from "react";


const Meme = () => {

    const [memes, set_memes] = React.useState([]);

    React.useEffect(
        () => {
            fetch("https://api.imgflip.com/get_memes")
                .then(res => res.json())
                .then(
                    (data) => {
                        set_memes(data.data.memes)
                        console.log(data.data.memes[0])
                    }
                )
        }
        , []
    );

    const get_rand_url = () => {
        const n = memes.length;
        if (n === 0) {
            return "https://i.imgflip.com/26am.jpg";
        }
        const i = Math.floor(Math.random() * n);
        const img_url = memes[i].url;
        return img_url;
    };

    const [meme, set_meme] = React.useState(() => ({
        top_text: "",
        bottom_text: "",
        image_url: get_rand_url(),
    }))

    const click_getNewImg = (e) => {
        e.preventDefault();
        set_meme(obj => ({ ...obj, image_url: get_rand_url() }));
    };

    const inputChanged = (event) => {
        const { name, value } = event.target;
        set_meme(obj => ({ ...obj, [name]: value }))
    }

    return <div className="meme">

        <div className="inner-content">
            <form>
                <div className="row flex-y-center">
                    <input
                        type="text"
                        placeholder="Top row"
                        name="top_text"
                        onChange={inputChanged}
                        value={meme.top_text}
                    ></input>
                    <input
                        type="text"
                        placeholder="Bottom row"
                        name="bottom_text"
                        onChange={inputChanged}
                        value={meme.bottom_text}
                    ></input>
                </div>
                <div className="row flex-y-center">
                    <button onClick={click_getNewImg} className="bg-gradient-purple">Get a new meme image</button>
                </div>
                <div className="row flex-y-center meme-container text-shadow">
                    <img alt="meme" src={meme.image_url} className="image" />
                    <h2 className="text top">{meme.top_text}</h2>
                    <h2 className="text bottom">{meme.bottom_text}</h2>
                </div>
            </form>


        </div>

    </div>
};

export default Meme