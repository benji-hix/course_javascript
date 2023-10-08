import react, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const People = (props) => {
    const { id } = useParams();
    const [people, setPeople] = useState([]);

    const url = 'https://swapi.dev/api/people/' + id;
    useEffect(() => {
        console.log(url)
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setPeople(res);
                console.log(res);
            })
            .catch((error) => console.log(error));
    }, [url]);

    return (
        <>
            <div className="container-people">
                <p>
                    <b>Name: </b>
                    {people.name}
                </p>
                <p>
                    <b>Eye Color: </b>
                    {people.eye_color}
                </p>
                <p>
                    <b>Gender: </b>
                    {people.gender}
                </p>
                <p>
                    <b>Birth Year: </b>
                    {people.birth_year}
                </p>
            </div>
        </>
    );
};

export default People;
