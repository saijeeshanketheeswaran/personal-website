import classes from './Home.module.css'
import WaveLine from './WaveLine.js'

const Home = () => {
    return (  
        <div className={classes.Home} id="home">
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Hello world.</h1>
                <h1>Welcome to my website.</h1>
            </div>
        </div>
    );
}
 
export default Home;