// import FrontImg from "../images/card/front.png"
import StarIco from "../images/card/star.png"

const Card = (props) => <div className="card">
    <div className="image">
        <span className="card--image--status">
            {props.status}
        </span>
        <img src={props.front_image} alt="front" className="card--image--img-front" />
    </div>
    <div className="info">
        <p className="mark">
            <img src={StarIco} alt="star" />
            {props.mark_val} <span> ({props.mark_amount}) · {props.country}</span>
        </p>
        <p className="description">{props.description}</p>
        <p className="price">
            <strong>From {props.price}</strong> / person
        </p>
    </div>
</div>

export default Card