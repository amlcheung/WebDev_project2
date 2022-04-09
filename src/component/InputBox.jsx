import React, { useState } from 'react';
import { useSelector, shallowEqual, useDispatch} from 'react-redux';
import './InputBox.css';


export default function InputBox(props) {
    const [candidate, setCandidate] = useState("");
    const [input, setInputBox] = useState("");

    const dispatch = useDispatch();

    function sendWordToHistory() {
        const action = {
            type: 'EVALUATE_WORD',
            value: candidate,
        }

        dispatch(action);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("userGuess: " + candidate);
        sendWordToHistory();
        const guessInput = document.getElementById('guess');
        guessInput.value = '';
    }
  
    return (
        <div>
            <form onSubmit={e => {handleSubmit(e)}}>
                    <div className="text">
                        Enter Word:
                        </div>
                        <input 
                            type="text"
                            id = "guess"
                            onChange={(e) => setCandidate(e.target.value.trim())}
                        ></input>
                    <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

