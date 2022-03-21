import classes from './NavBar.module.css'

const NavBar = () => {
    return (  
        <div className={classes.NavBar}>
            <nav>
                <ul>
                    <li>
                        <a href="/#home">Home</a>
                    </li>
                    <li>
                        <a href="/#about">About</a>
                    </li>
                    <li>
                        <a href="/#skills">Skills</a>
                    </li>
                    <li>
                        <a href="/#experience">Experience</a>
                    </li>
                    <li>
                        <a href="/#education">Education</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
 
export default NavBar;