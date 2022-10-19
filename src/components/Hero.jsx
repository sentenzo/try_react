import PicturesSet from "../images/pictures-set.png"

const Hero = () => <section className="hero">
    <img src={PicturesSet} alt="pic set" className="hero--pictures-set" />
    <div className="hero--text-section">
        <h1 className="hero--header">
            Online Experiences
        </h1>
        <p className="hero--text">
            Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
    </div>

</section>

export default Hero