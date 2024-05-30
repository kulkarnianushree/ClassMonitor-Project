import React from 'react';
import './Result.css';

const Result = (props) => {
    const vote = props.data.filter((e) => e.enteredCandidate === 'Suresh');
    const vote1 = props.data.filter((e) => e.enteredCandidate === 'Deepanka');
    const vote2 = props.data.filter((e) => e.enteredCandidate === 'Abhik');

    const deleteHandler = (index, candidate) => {
        const updatedData = props.data.filter((item, idx) => !(idx === index && item.enteredCandidate === candidate));
        props.setData(updatedData);
        props.decrementVote();
    };

    return (
        <div className="result-container">
            <div className="candidate">
                <h1>Suresh</h1>
                <h5>Total Votes: {vote.length}</h5>
                {vote.map((item, index) => (
                    <div key={index} className="vote-item">
                        <div className="vote-name">{item.enteredName}</div>
                        <button onClick={() => deleteHandler(index, 'Suresh')}>Delete</button>
                    </div>
                ))}
            </div>
            <div className="candidate">
                <h1>Deepanka</h1>
                <h5>Total Votes: {vote1.length}</h5>
                {vote1.map((item, index) => (
                    <div key={index} className="vote-item">
                        <div className="vote-name">{item.enteredName}</div>
                        <button onClick={() => deleteHandler(index, 'Deepanka')}>Delete</button>
                    </div>
                ))}
            </div>
            <div className="candidate">
                <h1>Abhik</h1>
                <h5>Total Votes: {vote2.length}</h5>
                {vote2.map((item, index) => (
                    <div key={index} className="vote-item">
                        <div className="vote-name">{item.enteredName}</div>
                        <button onClick={() => deleteHandler(index, 'Abhik')}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Result;
