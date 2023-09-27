import React, { useState} from "react";

const PersonCard = props => {
    const [ageState, setAgeState] = useState({
        age: props.age
    });

    const ageClick = () => {
        setAgeState({
            age: ageState.age + 1
        });
    }
    
    return(
        <>
        <h1>{props.lastName}, {props.firstName}</h1>
        <p>Age: {ageState.age}</p>
        <p>Hair Color: {props.hairColor}</p>
        <button onClick={ageClick}>birthday button for {props.firstName} {props.lastName}</button>
        </>
    )
}

export default PersonCard;