import AllBeersStyles from "./AllBeers.module.css";
import {useEffect, useState} from "react";
import useRequest from "../../hooks/useRequest";
import { v4 as uuidv4 } from 'uuid';
import {NavLink} from "react-router-dom";

const AllBeers = () => {

    const request = useRequest();

    const [beers, setBeers] = useState([])
    useEffect(() => {

        const getBeers = async () : Promise<object> => {
            const data = await request("https://ih-beers-api2.herokuapp.com/beers");
            const dataAny: any = data;
            const array =  await dataAny.json();
            console.log(array);
            setBeers(array);
            return data;
        }

        getBeers();

    }, []);

    return(
        <section className={AllBeersStyles.all}>
            {beers && beers.map((element: any) => {
                return(
                    <div key={uuidv4()} className={AllBeersStyles.beerItem}>
                        <div className={AllBeersStyles.left}>
                            <img className={AllBeersStyles.img} src={element.image_url} alt="bierchenBildchen"/>
                        </div>
                        <div className={AllBeersStyles.right}>
                            <h3 className={AllBeersStyles.title} >{element.name}</h3>
                            <p className={AllBeersStyles.description}>{element.tagline}</p>
                            <p className={AllBeersStyles.created} >Created By: {element.name}</p>
                            <NavLink to={"/detail/" + element._id} className={AllBeersStyles.button}>Detail</NavLink>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default AllBeers;