import CredentialsPhoto from "../../images/thiscatdoesnotexist.jpg"


const Credentials = () => <div className="credentials">
    <img src={CredentialsPhoto} alt="credentials" className="credentials-photo" />
    <h1 className="full-name">Mr. Kätt</h1>
    <h2 className="position">Professional Cat</h2>
    <p className="personal-web-page"><a href="#empty">www.mr-katt.com</a></p>
</div>

export default Credentials;