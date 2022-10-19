import FrontImg from "../images/card/front.png"
import StarIco from "../images/card/star.png"

const Card = () => <div className="card">
    <div className="image">
        <span className="card--image--status">
            Sold out
        </span>
        <img src={FrontImg} alt="front" className="card--image--img-front" />
    </div>
    <div className="info">
        <p className="mark">
            <img src={StarIco} alt="star" />
            5.0 <span> (6) · USA</span>
        </p>
        <p className="description">Life lessons with Katie Zaferes</p>
        <p className="price">
            <strong>From $136</strong> / person
        </p>
    </div>
</div>

export default Card