import React, { useState } from 'react';
import Form from './components/Form';
import Result from './components/Result';
import './App.css';

const App = () => {
    const [data, setUserData] = useState([]);
    const [count, setCount] = useState(0);

    const SaveDataHandler = (UserData) => {
        setUserData((prevdata) => [UserData, ...prevdata]);
    };

    const TotalVoteCounts = () => {
        setCount(count + 1);
    };

    const DecrementVoteCounts = () => {
        setCount(count - 1);
    };

    return (
        <div className="app-container">
            <h1>Class Monitor Vote</h1>
            <h5>Total Votes: {count}</h5>
            <Form onSavaData={SaveDataHandler} onbuttonHandler={TotalVoteCounts} />
            <Result data={data} setData={setUserData} decrementVote={DecrementVoteCounts} />
        </div>
    );
};

export default App;
