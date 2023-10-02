import React, {useState} from "react";

const Tabs = (props) => {

    const handleClick = (e, value) => {
        e.preventDefault;
        props.changeTab(`Content for ${value}`)
    }

    return (
        <>
            {props.tabs.map( (item, index) => {
                return <button key={index} onClick={ (e) => handleClick(e, item) }>{item}</button>
            })
            }

        </>
    );
}

export default Tabs