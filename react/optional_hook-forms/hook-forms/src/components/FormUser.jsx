import React, { useState } from 'react';

const FormUser = () => {
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    // const createUser = (e) => {
    //     e.preventDefault();

    //     console.log('Welcome!');
    // //     setFirstName('')
    // //     setLastName('');
    // //     setEmail('');
    // //     setPassword('');
    // //     setConfirmPassword('');
    // //     const newUser = {firstName, lastName, email, password, confirmPassword};
    // }

    return (
        <>
        <form className='form'>
            <label className='input'>
                <span> First Name: </span>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </label>
            <label className='input'>
                <span>Last Name:</span>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </label>
            <label className='input'>
                <span>Email: </span>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className='input'>
                <span>Password: </span>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <label className='input'>
                <span>Confirm Password: </span>
                <input type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            </label>
            <input type="submit" value="Create User" />
        </form>

        <div className='form-display'>
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
        </>
    );
};

export default FormUser