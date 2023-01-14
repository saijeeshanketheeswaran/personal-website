import classes from './Home.module.css'
import WaveLine from './WaveLine.js'

const Home = () => {
    return (  
        <div className={classes.Home} id="home">
            <div className={classes.Container}>
                <h3>&nbsp;&nbsp;&nbsp;  Hello world! &nbsp; : )</h3>
                <h4>&nbsp;&nbsp;&nbsp;  I am Saijeeshan,</h4>
                <h5>&nbsp;&nbsp;&nbsp;  a website developer. &nbsp; &lt;/&gt; &nbsp;&nbsp;&nbsp;	</h5>
            </div>
        </div>
    );
}
 
export default Home;