import PageHeader from '../PageHeader/PageHeader';
import classes from './Skills.module.css'
import skillsImg from './../../img/code1.svg'

const developmentSkills = 
    <ul>
                <li>&nbsp;</li>
        <li>ONTARIO TECH UNIVERSITY</li>
        <li>&nbsp;</li>
        <li>Computer Science</li>
        <li>Bachelor of Science</li>
        <li>2015 - 2020</li>
        <li>&nbsp;</li>
    </ul>
const itSkills = 
    <ul>
                <li>&nbsp;</li>
        <li>BRAINSTATION</li>
        <li>&nbsp;</li>
        <li>Cybersecurity</li>
        <li>Nov 2021 - Dec 2021</li>
        <li>&nbsp;</li>
    </ul>


const totalSkills = [developmentSkills, itSkills]

const Skills = () => {
    return ( 
        <div className={classes.Skills} id='education'>
            <PageHeader title={'Education'}/>
            <div className={classes.Container}>
                <img src={skillsImg}/>
                {totalSkills.map(skills => {
                    return (
                    <div className={classes.List}>
                        {skills}
                    </div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Skills;