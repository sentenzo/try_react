import TwitterGrayIco from "../../images/twitter-gray.png"
import FacebookGrayIco from "../../images/facebook-gray.png"
import InstagramGrayIco from "../../images/instagram-gray.png"
import GithubGrayIco from "../../images/github-gray.png"

const SocialLinks = () => <div className="social-links">
    <a href="#empty" className="twitter-gray">
        <img src={TwitterGrayIco} alt="twitter-gray" />
    </a>
    <a href="#empty" className="facebook-gray">
        <img src={FacebookGrayIco} alt="facebook-gray" />
    </a>
    <a href="#empty" className="instagram-gray">
        <img src={InstagramGrayIco} alt="instagram-gray" />
    </a>
    <a href="#empty" className="github-gray">
        <img src={GithubGrayIco} alt="github-gray" />
    </a>
</div>

export default SocialLinks;