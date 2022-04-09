import React, { useState } from 'react';
import { useSelector, shallowEqual, useDispatch} from 'react-redux';
import './InputBox.css';


export default function InputBox(props) {
    const [candidate, setCandidate] = useState("");

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
    }

    return (
        <div>
            <form onSubmit={e => {handleSubmit(e)}}>
                    <label className="text">
                        Enter Word:
                        <input 
                            type="text"
                            onChange={(e) => setCandidate(e.target.value.trim())}
                        ></input>
                    </label>
                    <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

