import EmailIco from "../../images/email.png"
import LinkedInIco from "../../images/linkedin.png"

const Contacts = () => <div className="contacts">
    <a className="button email" href="#empty">
        <img src={EmailIco} alt="email-ico" />
        Email
    </a>
    <a className="button linkedin" href="#empty">
        <img src={LinkedInIco} alt="linkedin-ico" />
        LinkedIn
    </a>
</div>

export default Contacts;