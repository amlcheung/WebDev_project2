import React, { useState } from 'react';
import './InputBox.css';


export default function InputBox(props) {
    const [candidate, setCandidate] = useState("");

    const [array_of_guesses, updateGuessArray] = useState([]);

    function test() {
        let test = candidate;
        // console.log(test);
        evaulateInput(test);
        console.log(array_of_guesses);

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log({candidate});
        // console.log(candidate);
        test();
    }


    function evaulateInput(userGuess) {
        // console.log(userGuess);
        updateGuessArray(array_of_guesses => [...array_of_guesses, userGuess]);
    
    }



    return (
        <form onSubmit={e => {handleSubmit(e)}}>
                <label className="text">
                    Enter Word:
                    <input 
                        type="text"
                        // value={candidate}
                        onChange={(e) => setCandidate(e.target.value)}
                    ></input>
                </label>
                <input type="submit" value="Submit"></input>


            </form>
    );


}

