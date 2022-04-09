import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import './MessageBoard.css';


export default function MessageBoard() {
    

    function createMessage(state) {
        let message = "";

        if (state.invalidWordLength) {
            message = "Invalid Word Length";
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