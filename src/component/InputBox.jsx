import React, { useState } from 'react';
import './InputBox.css';


export default function InputBox(props) {
    const [candidate, setCandidate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        evaluateCandidate();
        console.log({candidate});
    }

    function evaluateCandidate() {
        let test = {candidate};
        console.log("test: " + test);
    }


    return (
        <form onSubmit={e => {handleSubmit(e)}}>
                <label className="text">
                    Enter Word:
                    <input 
                        type="text"
                        value={candidate}
                        onChange={(e) => setCandidate(e.target.value)}
                    ></input>
                </label>
                <input type="submit" value="Submit"></input>


            </form>
    );


}

