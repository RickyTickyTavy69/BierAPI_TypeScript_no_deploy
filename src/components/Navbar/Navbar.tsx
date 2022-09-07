import NavStyles from "./Navbar.module.css";
import beerIcon from "../../img/beerIcon.png";
import {NavLink} from "react-router-dom";

const Navbar = () => {

    return(
        <NavLink to="/">
            <nav className={NavStyles.nav}>
                <img src={beerIcon} alt="bierchen"/>
            </nav>
        </NavLink>

    )
}

export default Navbar;