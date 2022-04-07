import React, { useState } from 'react';
import { useSelector, shallowEqual} from 'react-redux';
import './InputBox.css';


export default function InputBox(props) {
    const [candidate, setCandidate] = useState("");

    const [array_of_guesses, updateGuessArray] = useState([]);

   

    const handleSubmit = (e) => {
        e.preventDefault();
        evaluateCandidate();
        console.log({candidate});
    }



    function evaluateCandidate() {
        let test = {candidate};
        console.log(test);
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
                            onChange={(e) => setCandidate(e.target.value)}
                        ></input>
                    </label>
                    <input type="submit" value="Submit"></input>


                </form>
                {/* <div>Here: {curWord}</div> */}
        </div>
    );



}

