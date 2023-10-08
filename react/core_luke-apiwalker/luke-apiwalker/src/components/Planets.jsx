import react, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const Planets = (props) => {
    const { id } = useParams();
    const [planet, setPlanet] = useState([]);
    const url = 'https://swapi.dev/api/planets/' + id;

    useEffect( () => {
        fetch(url)
        .then( (res) => {
            return res.json();
        })
        .then( (res) => {
            setPlanet(res);
            console.log(res);
        })
        .catch( (error) => console.log(error));
    }, [url]);
    
    return (
        <>
            <div className='container-planet'>
                <p>
                    <b>Name: </b>
                    {planet.name}
                </p>
                <p>
                    <b>Diameter: </b>
                    {planet.diameter}
                </p>
                <p>
                    <b>Population: </b>
                    {planet.population}
                </p>
                <p>
                    <b>Climate: </b>
                    {planet.climate}
                </p>
            </div>
        </>
    )
}

export default Planets;