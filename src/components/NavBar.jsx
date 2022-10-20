import GlobeIco from "../images/globe-icon.svg"

const NavBar = () => <nav className="nav-bar">
    <div className="content-wrapper flex-x">
        <img src={GlobeIco} alt="globe" className="nav-bar--site-ico" />
        <h1 className="nav-bar--site-name">my travel journal</h1>
    </div>
</nav>;

export default NavBar;