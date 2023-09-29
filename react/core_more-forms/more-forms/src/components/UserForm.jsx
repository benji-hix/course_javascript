import React, { useState } from 'react';

const FormUser = () => {
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ firstNameError, setFirstNameError ] = useState('');
    const [ lastNameError, setLastNameError ] = useState('');
    const [ emailError, setEmailError ] = useState('');
    const [ passwordError, setPasswordError ] = useState('');
    const [ confirmError, setConfirmError] = useState('');

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {firstName, lastName, email, password, confirmPassword};
        console.log('Welcome!');
        setFirstName('')
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };


    const handleFirstName = (e) => {
        setFirstName(e.target.value)
        if(e.target.value < 1) {
            setFirstNameError('First Name is required');
        }
        else if(e.target.value.length < 2) {
            setFirstNameError('First Name must be at least 2 characters');
        }
        else {
            setFirstNameError('');
        }
    };

    const handleLastName = (e) => {
        setLastName(e.target.value)
        if(e.target.value < 1) {
            setLastNameError('Last Name is required');
        }
        else if(e.target.value.length < 2) {
            setLastNameError('Last Name must be at least 2 characters');
        }
        else {
            setLastNameError('');
        }
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value < 1) {
            setEmailError('Email is required');
        }
        else if(e.target.value.length < 5) {
            setEmailError('Email must be at least 5 characters');
        }
        else {
            setEmailError('')
        }
    };

    const handlePassword = (e) => {
        setPassword(e.target.value)
        if (e.target.value < 1) {
            setPasswordError('Password is required')
        }
        else if(e.target.value.length < 5) {
            setPasswordError('Password must be at least 5 characters')
        }
        else {
            setPasswordError('')
        }
    }

    const handleConfirm = (e) => {
        setConfirmPassword(e.target.value)
        if (e.target.value != password) {
            setConfirmError('Passwords must match');
        }
        else {
            setConfirmError('')
        }
    }

    return (
        <>
        <form className='form' onSubmit={createUser}>
            <label className='input'>
                <span> First Name: </span>
                <input type="text" value={firstName} onChange={handleFirstName}/>
            </label>
            { firstNameError ? <p className='error'>{firstNameError}</p> : '' }
            <label className='input'>
                <span>Last Name:</span>
                <input type="text" value={lastName} onChange={handleLastName}/>
            </label>
            { lastNameError ? <p className='error'>{lastNameError}</p> : '' }

            <label className='input'>
                <span>Email: </span>
                <input type="text" value={email} onChange={handleEmail} />
            </label>
            { emailError ? <p className='error'>{emailError}</p> : '' }

            <label className='input'>
                <span>Password: </span>
                <input type="text" value={password} onChange={handlePassword}/>
            </label>
            { passwordError ? <p className='error'>{passwordError}</p> : '' }

            <label className='input'>
                <span>Confirm Password: </span>
                <input type="text" value={confirmPassword} onChange={handleConfirm}/>
            </label>
            { confirmError ? <p className='error'>{confirmError}</p> : '' }

            { (firstNameError || lastNameError) ? 
            <input type="submit" value="Create User" className='button-submit' disabled/> :
            <input type="submit" value="Create User" className='button-submit' /> 
            }
        </form>
        </>
    );
};

export default FormUser