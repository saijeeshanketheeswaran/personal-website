import classes from './Contact.module.css'
import {FaLinkedin, FaGithub, FaEnvelope} from "react-icons/fa"

const Contact = () => {
    return (  
        <div className={classes.Contact}>
            <div className={classes.ContactIcons}>
                <button className={classes.buttonSub}>Submit</button>
            </div>
        </div>
    );
}
 
export default Contact;