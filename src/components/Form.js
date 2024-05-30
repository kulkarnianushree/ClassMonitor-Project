// Form.js
import React, { useState } from 'react';
import './Form.css';

const Form = (props) => {
    const [userInput, setUserInput] = useState({
        enteredName: '',
        enteredCandidate: ''
    });

    const nameChangeHandler = (event) => {
        setUserInput((prevInput) => ({
            ...prevInput, enteredName: event.target.value
        }));
    };

    const candidateChangeHandler = (event) => {
        setUserInput((prevInput) => ({
            ...prevInput, enteredCandidate: event.target.value
        }));
    };

    const FormHandle = (event) => {
        event.preventDefault();
        props.onSavaData(userInput);
        props.onbuttonHandler();
        setUserInput({
            enteredName: '',
            enteredCandidate: ''
        });
    };

    return (
        <form onSubmit={FormHandle} className="form-container">
            <div className="form-group">
                <label htmlFor="name">Student Name</label>
                <input type="text" id="name" onChange={nameChangeHandler} value={userInput.enteredName} />
            </div>
            <div className="form-group">
                <label htmlFor="category">Candidate</label>
                <select id="category" onChange={candidateChangeHandler} value={userInput.enteredCandidate}>
                    <option value='default'>default</option>
                    <option>Suresh</option>
                    <option>Deepanka</option>
                    <option>Abhik</option>
                </select>
            </div>
            <div className="form-group">
                <button type="submit">Vote</button>
            </div>
        </form>
    );
};

export default Form;
