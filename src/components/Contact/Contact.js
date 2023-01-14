import classes from './Contact.module.css'
import {FaLinkedin, FaGithub, FaEnvelope} from "react-icons/fa"

const Contact = () => {
    return (  
        <div className={classes.Contact} id="contact">
            <div className={classes.ContactIcons}>
                <FaLinkedin color="white" size='30px' style={{padding: '0.75%'}}/>
                <FaGithub color="white" size='30px' style={{padding: '0.75%'}}/>
                <FaEnvelope color="white" size='30px' style={{padding: '0.75%'}}/>
            </div>
        </div>
    );
}
 
export default Contact;