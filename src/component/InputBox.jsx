import React, { useState } from 'react';
import { useSelector, shallowEqual, useDispatch} from 'react-redux';
import './InputBox.css';


export default function InputBox(props) {
    const [candidate, setCandidate] = useState("");

    //const [array_of_guesses, updateGuessArray] = useState([]);

    const dispatch = useDispatch();

    function sendWordToHistory() {
        let test = candidate;
        const action = {
            type: 'EVALUATE_WORD',
            value: test,
        }

        dispatch(action);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        evaluateCandidate();
        //sendWordToHistory();
        console.log({candidate});
    }

    function evaluateCandidate() {
        let newWord = {candidate};
        //if (newWord.length == 5 && curWord.length == 5){
            sendWordToHistory();
            console.log(newWord);
       // }
        //console.log(toString(newWord));
    }

    // evaulateInput();

    // console.log(array_of_guesses);

    // function getWordFromState(state) {
    //     // console.log("i was useSelected!")
    //     return state[props.displayInstance];
    // }

    // const curWord = useSelector(getWordFromState, shallowEqual);

    
    return (
        <div>
            <form onSubmit={e => {handleSubmit(e)}}>
                    <label className="text">
                        Enter Word:
                        <input 
                            type="text"
                            value={candidate}
                            onChange={(e) => setCandidate(e.target.value.trim())}
                        ></input>
                    </label>
                    <input type="submit" value="Submit"></input>


                </form>
                {/* <div>Here: {curWord}</div> */}
        </div>
    );



}

