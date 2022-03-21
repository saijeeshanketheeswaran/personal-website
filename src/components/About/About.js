import classes from './About.module.css'
import PageHeader from '../PageHeader/PageHeader';
import profile from './../../img/profile.png'

const About = () => {
    return (  
        <div className={classes.AboutMe} id="about">
            <PageHeader title={'Who am I?'}/>
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>My name is Saijeeshan.</h2>
                    <p>
                    I am a Computer Science graduate with more than three years of experience designing and developing websites, who has assisted in the development of several organizational web applications. I have written maintainable and testable software in software development team environments and facilitated many projects using Java and JavaScript.
                    </p>
                </div>
                <div className={classes.Photo}>
                    <img className={classes.Me} src={profile} alt="profile"></img>
                </div>
            </div>
        </div>
    );
}
 
export default About;