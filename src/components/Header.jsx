import SiteIco from "../images/troll-face.svg"

const Header = () => <div className="header">
    <div className="inner-content flex-y-center bg-gradient-purple">
        <div className="site-logo flex-y-center">
            <img alt="site icon" src={SiteIco} />
            <span className="title">Meme Generator</span>
        </div>
        <div className="slogan">
            Trying out ReactJS
        </div>
    </div>
</div>

export default Header