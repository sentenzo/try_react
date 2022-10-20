
import MapPointerIco from "../images/map-pointer-icon.svg";

const get_date_str = date => {
    const month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const year = date.getFullYear();
    const month = month_names_short[date.getMonth()];
    const day = date.getDate();
    return `${day} ${month}, ${year}`
};

const Article = (props) => {
    const article_data = props.data;
    const date_from = get_date_str(article_data.date.from);
    const date_to = get_date_str(article_data.date.to);

    return <div className="article">
        <div className="content-wrapper flex-x">
            <img alt="place" src={article_data.picture_url} className="artilcle--picture" />
            <div className="article--text">
                <p className="location">
                    <img src={MapPointerIco} alt="map pointer" className="map-pointer-ico" />
                    <span className="country">{article_data.location.country}</span>
                    <a className="google_maps_url" href={article_data.location.google_maps_url}>View on Google Maps</a>
                </p>
                <h1 className="title">{article_data.title}</h1>
                <p className="date">
                    {date_from} - {date_to}
                </p>
                <p className="description">
                    {article_data.description}
                </p>
            </div>
        </div>
    </div>
};

export default Article;