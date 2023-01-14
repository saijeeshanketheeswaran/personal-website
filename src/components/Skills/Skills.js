import PageHeader from '../PageHeader/PageHeader';
import classes from './Skills.module.css'
import skillsImg from './../../img/codealt.svg'

const developmentSkills = 
    <ul>
        <li>&nbsp;</li>
        <li>DEVELOPMENT</li>
        <li>&nbsp;</li>
        <li>Android - PHP - Clojure</li>
        <li>Scala - Java - Python</li>
        <li>C - C++ - C#</li>
        <li>&nbsp;</li>
    </ul>
const itSkills = 
    <ul>
        <li>&nbsp;</li>
        <li>IT</li>
        <li>&nbsp;</li>
        <li>Git - Batch - PowerShell</li>
        <li>Windows - Linux</li>
        <li>&nbsp;</li>
    </ul>
const webSkills = 
    <ul>
        <li>&nbsp;</li>
        <li>WEB</li>
        <li>&nbsp;</li>
        <li>HTML - JavaScript - XML</li>
        <li>CCS - Bootstrap - JSON</li>
        <li>Node.js - AJAX - jQuery</li>
        <li>&nbsp;</li>
    </ul>
const databaseSkills = 
    <ul>
        <li>&nbsp;</li>
        <li>DATABASE</li>
        <li>&nbsp;</li>
        <li>PostgresSQL - MySQL - MS SQL Server</li>
        <li>MongoDB - Firebase</li>
        <li>&nbsp;</li>
    </ul>
const applicationSkills = 
    <ul>
        <li>&nbsp;</li>
        <li>APPLICATION</li>
        <li>&nbsp;</li>
        <li>WordPress - Unity</li>
        <li>Microsoft Word - Microsoft Excel</li>
        <li>Microsoft Visio</li>
        <li>&nbsp;</li>
    </ul>

const totalSkills = [developmentSkills, itSkills, webSkills, databaseSkills, applicationSkills]

const Skills = () => {
    return ( 
        <div className={classes.Skills} id='skills'>
            <PageHeader title={'Programming Skills'}/>
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