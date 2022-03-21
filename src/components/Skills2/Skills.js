import PageHeader from '../PageHeader/PageHeader';
import classes from './Skills.module.css'
import skillsImg from './../../img/code0.svg'

const developmentSkills = 
    <ul>
        <li>&nbsp;</li>
        <li>DIANE FRANKLING CO-OP</li>
        <li>&nbsp;</li>
        <li>Software Programmer</li>
        <li>Oct 2021 -</li>
        <li>&nbsp;</li>
    </ul>
const itSkills = 
    <ul>
        <li>&nbsp;</li>
        <li>CAIDEN MEDIA</li>
        <li>&nbsp;</li>
        <li>Web Developer</li>
        <li>Oct 2020 - Mar 2021</li>
        <li>&nbsp;</li>
    </ul>
const webSkills = 
    <ul>
        <li>&nbsp;</li>
        <li>WE CAN WIN</li>
        <li>&nbsp;</li>
        <li>Web Designer</li>
        <li>Jun 2020 - Aug 2020</li>
        <li>&nbsp;</li>
    </ul>
const databaseSkills = 
    <ul>
        <li>&nbsp;</li>
        <li>5N2 KITCHENS</li>
        <li>&nbsp;</li>
        <li>Web Developer</li>
        <li>Jun 2019 - Aug 2019</li>
        <li>&nbsp;</li>
    </ul>


const totalSkills = [developmentSkills, itSkills, webSkills, databaseSkills]

const Skills = () => {
    return ( 
        <div className={classes.Skills} id='experience'>
            <PageHeader title={'Job Experience'}/>
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