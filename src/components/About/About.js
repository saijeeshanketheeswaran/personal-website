import classes from './About.module.css'
import PageHeader from '../PageHeader/PageHeader';
import profile from './../../img/profile.jpg'

const About = () => {
    return (  
        <div className={classes.AboutMe} id="about">
            <PageHeader title={''}/>
            <div className={classes.Container}>
            <div className={classes.Photo}>
                    <img className={classes.Me} src={profile} alt="profile"></img>
                </div>
                <div className={classes.Text}>
                    <p>
                    '' I am a computer science graduate with more than three years of experience designing and developing websites. I have assisted in the development of several organizational web applications. I have written maintainable and testable software in software development team environments and facilitated many projects using Java and JavaScript. ''
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default About;