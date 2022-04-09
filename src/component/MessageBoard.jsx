import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import './MessageBoard.css';


export default function MessageBoard() {
    

    function createMessage(state) {
        let message = "";

        if (state.invalidWordLength) {
            message = "Invalid Word Length";
        }
        if (state.invalidWord){
            message = "Word not in dictionary";
        }

        let curGuess = state.history[state.history.length - 1];

        if (curGuess !== undefined) {
            if (state.word === curGuess.toUpperCase()) {
                message = "Congratulations!  Would you like to try again?";
            } else if (state.attemptsRemaining === 0 && state.word !== curGuess.toUpperCase()) {
                message = "You failed to guess the word. End of Game.";
            }
        }
       
        return message;
    } 
    
    
    const currentMessage = useSelector(createMessage, shallowEqual);

    function getAttemptsRemaining(state) {
        let attempts = "";

        if (state.attemptsRemaining > 0) {
            attempts = `Attempts Remaining: ${state.attemptsRemaining}`;
        }
        return attempts;
    }

    const attemptsRemaining = useSelector(getAttemptsRemaining, shallowEqual);

    return(
        <div className='text-container'> 
            <h2>Message Board: {currentMessage}</h2>
            <h3>{attemptsRemaining}</h3>
        </div>

    );
}