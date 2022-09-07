import {NavLink, useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import useRequest from "../../hooks/useRequest";
import {useEffect, useState} from "react";
import {v4 as uuidv4} from "uuid";
import AllBeersStyles from "../AllBeers/AllBeers.module.css";
import DetailStyles from "./Detail.module.css";
import back from "../../img/Back.png";



const Detail = () => {
    const navigate = useNavigate();
    const params = useParams();
    const request = useRequest();

    const [beer, setBeer] = useState<{first_brewed: string, image_url: string; description: string; name: string; attenuation_level: number}>({image_url: '', description: "", name: "", attenuation_level: 0, first_brewed: "" });


    const navigateBack = () => {
        navigate(-1);
    }

    useEffect(() => {

        const getBeers = async () : Promise<object> => {
            const url = `https://ih-beers-api2.herokuapp.com/beers/${params.id}`;
            const data = await request(url);
            const dataAny: any = data;                  // das ist der Tick, wie man aus TS wieder JS machen kann wenn man
                                                        // kein TS kann
            const obj =  await dataAny.json();
            console.log("obj", obj);
            setBeer(obj);
            return data;
        }

        getBeers();

    }, []);


        return (
            <>
                {beer && <div key={uuidv4()} className={DetailStyles.beerItem}>
                    <div className={AllBeersStyles.left}>
                        <img className={AllBeersStyles.img} src={beer.image_url} alt="bierchenBildchen"/>
                    </div>
                    <div className={AllBeersStyles.right}>
                        <h3 className={AllBeersStyles.title}>{beer.name}</h3>
                        <div className={DetailStyles.firstBrewed}>
                            <p>First Brewed</p>
                            <p>{beer.first_brewed}</p>
                        </div>
                        <div className={DetailStyles.Attenuation}>
                            <p>Attenuation Level</p>
                            <p>{beer.attenuation_level}</p>
                        </div>
                        <p className={AllBeersStyles.description}>{beer.description}</p>
                        <p className={AllBeersStyles.created}>Created By: {beer.name}</p>
                        <button onClick={navigateBack} className={DetailStyles.button}>
                            <img src={back} alt="scheissPfeilDenIchNichtStylenKann"/>
                        </button>
                    </div>
                </div>}
            </>
        )}


export default Detail;

