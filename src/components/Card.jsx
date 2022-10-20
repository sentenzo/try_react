// import FrontImg from "../images/card/front.png"
import StarIco from "../images/card/star.png"

const get_img_url = function (img_short_url) {
    return require("../images/card/" + img_short_url);
};

const Card = (props) => {
    const item = props.item;
    return <div className="card">
        <div className="image">
            <span className="card--image--status">
                {item.open_spots === 0 ? "Sold out" : "registration"}
            </span>
            <img src={get_img_url(item.front_image)} alt="front" className="card--image--img-front" />
        </div>
        <div className="info">
            <p className="mark">
                <img src={StarIco} alt="star" />
                {item.status.rating.toFixed(1)} <span> ({item.mark_amount}) · {item.country}</span>
            </p>
            <p className="description">{item.title}</p>
            <p className="price">
                <strong>From ${item.price}</strong> / person
            </p>
        </div>
    </div>
};

export default Card