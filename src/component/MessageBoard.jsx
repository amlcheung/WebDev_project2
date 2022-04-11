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
        let easycurGuess = state.easy_history[state.easy_history.length - 1];
        let medcurGuess = state.med_history[state.med_history.length - 1];
        let hardcurGuess = state.hard_history[state.hard_history.length - 1];

        if (easycurGuess !== undefined) {
            if (state.easy_word === easycurGuess.toUpperCase()) {
                message = "Congratulations!  Would you like to try again?";
            } else if (state.easyattemptsRemaining === 0 && state.easy_word !== easycurGuess.toUpperCase()) {
                message = "You failed to guess the word. End of Game.";
            }
        }
        if (medcurGuess !== undefined) {
            if (state.med_word === medcurGuess.toUpperCase()) {
                message = "Congratulations!  Would you like to try again?";
            } else if (state.medattemptsRemaining === 0 && state.med_word !== medcurGuess.toUpperCase()) {
                message = "You failed to guess the word. End of Game.";
            }
        }
        if (hardcurGuess !== undefined) {
            if (state.hard_word === hardcurGuess.toUpperCase()) {
                message = "Congratulations!  Would you like to try again?";
            } else if (state.hardattemptsRemaining === 0 && state.hard_word !== easycurGuess.toUpperCase()) {
                message = "You failed to guess the word. End of Game.";
            }
        }
       
        return message;
    } 
    
    
    const currentMessage = useSelector(createMessage, shallowEqual);

    function getAttemptsRemaining(state) {
        let attempts = "";

        if (state.current_diff == "EASY"){
            if (state.easyattemptsRemaining > 0) {
                attempts = `Attempts Remaining: ${state.easyattemptsRemaining}`;
            }
        }
        if (state.current_diff == "MEDIUM"){
            if (state.medattemptsRemaining > 0) {
                attempts = `Attempts Remaining: ${state.medattemptsRemaining}`;
            }
        }
        if (state.current_diff == "HARD"){
            if (state.hardattemptsRemaining > 0) {
                attempts = `Attempts Remaining: ${state.hardattemptsRemaining}`;
            }
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