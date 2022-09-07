import HomeStyles from "./home.module.css";
import {NavLink} from "react-router-dom";

const Home = () => {



    return(
        <section className={HomeStyles.homesection}>

            <div className={HomeStyles.allbeers}>
                <div>
                    <div className={HomeStyles.imgContainer}>
                        <NavLink className={HomeStyles.heading} to="/allbeers" >All Beers</NavLink>
                    </div>
                </div>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolorum ipsa laudantium sequi.
                </p>
            </div>

            <div className={HomeStyles.randombeer}>
                <div>
                    <div className={HomeStyles.imgContainer}>
                        <NavLink className={HomeStyles.heading} to="/detail/random" >Random Beer</NavLink>
                    </div>
                </div>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolorum ipsa laudantium sequi.
                </p>
            </div>
        </section>
    )
}

export default Home;