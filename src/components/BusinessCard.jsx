import Credentials from "./business_card/Credentials";
import Contacts from "./business_card/Contacts";
import AboutMe from "./business_card/AboutMe";
import SocialLinks from "./business_card/SocialLinks";

const BusinessCard = () => <div className="business-card">
    <Credentials />
    <Contacts />
    <AboutMe />
    <SocialLinks />
</div>

export default BusinessCard;