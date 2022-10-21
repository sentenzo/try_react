const MemeInput = () => <div className="meme-input">
    <div className="inner-content">
        <form>
            <div className="row flex-y-center">
                <input type="text" placeholder="Top row"></input>
                <input type="text" placeholder="Bottom row"></input>
            </div>
            <div className="row flex-y-center">
                <button className="bg-gradient-purple">Get a new meme image</button>
            </div>

        </form>
    </div>

</div>

export default MemeInput