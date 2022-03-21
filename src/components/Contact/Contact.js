import classes from './Contact.module.css'
import {FaLinkedin, FaGithub, FaEnvelope} from "react-icons/fa"

const Contact = () => {
    return (  
        <div className={classes.Contact}>
            <div className={classes.ContactIcons}>
                <FaLinkedin color="white" size='40px' style={{padding: '1%'}}/>
                <FaGithub color="white" size='40px' style={{padding: '1%'}}/>
                <FaEnvelope color="white" size='40px' style={{padding: '1%'}}/>
            </div>
        </div>
    );
}
 
export default Contact;