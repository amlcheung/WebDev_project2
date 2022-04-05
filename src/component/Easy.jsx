import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './Easy.css';
import Square from './Square';
import InputBox from'./InputBox';

export default function Easy(props) {

    const dispatch = useDispatch();

    function getWord() {
        const action = {
            type: 'EASY'
        }

        dispatch(action);
    }

   

    return(
        <div>
            <h1>Difficulty: Easy</h1>
            <button onClick={getWord}>Start Game</button>
            <InputBox></InputBox>
            <div className="board-container">
                <Square></Square>

                <Square></Square>

                <Square></Square>

                <Square></Square>

                <Square></Square>

                <Square></Square>

                <Square></Square>

                <Square></Square>

                <Square></Square>

                <Square></Square>


                <Square></Square>

                <Square></Square>

                <Square></Square>

                <Square></Square>

                <Square></Square>

                <Square></Square>

                <Square></Square>

                <Square></Square>

                <Square></Square>

                <Square></Square>


                <Square></Square>

                <Square></Square>

                <Square></Square>

                <Square></Square>

                <Square></Square>

                <Square></Square>

                <Square></Square>

                <Square></Square>

                <Square></Square>

                <Square></Square>


                <Square></Square>

                <Square></Square>

                <Square></Square>

                <Square></Square>

                <Square></Square>


            </div>
    </div>
            

      
        

      

    );
}