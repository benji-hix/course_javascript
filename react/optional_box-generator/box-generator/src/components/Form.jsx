import React, {useState} from "react";

const Form = (props) => {
    const [color, setColor] = useState('');
    const [number, setNumber] = useState('');

    const formSubmit = (e) => {
        e.preventDefault();
        console.log('number is ', number)
        
        const boxArray = [];
        let i = 0;

        do {
            boxArray.push(color)
            i++
        } while (i < number);

        console.log(boxArray);
        console.log('changeBoxesState executed')
        props.changeBoxesState(boxArray);
    }

    return (
        <>
        <form className="form" onSubmit={formSubmit}>
            <input type="color" className="input-color" name="form-color" onChange={(e) => setColor(e.target.value)} value={color}/>
            <input type="number" className="input-number" min='1' name="form-number" onChange={(e) => setNumber(e.target.value)} value={number}/>
            <input type="submit" className="button-submit" value='Submit' />
        </form>
        </>
    )
}

export default Form