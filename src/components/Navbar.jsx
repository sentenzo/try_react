import react_ico from "../images/React-icon.svg"

const Navbar = () => <nav className="nav">
    <div className="inner-content">
        <div className="nav-img-block">
            <img src={react_ico} className="nav-img" alt="react_ico" />
            <h3>Site name</h3>
        </div>
        <p>Page title</p>
    </div>
</nav>;

export default Navbar;