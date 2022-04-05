import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './Hard.css';
import Square from './Square';
import InputBox from'./InputBox';

export default function Hard(props) {

    const dispatch = useDispatch();

    function getHardWord() {
        const action = {
            type: 'HARD'
        }

        dispatch(action);
    }

   

    return(
        <div>
            <h1>Difficulty: Hard</h1>
            <button onClick={getHardWord}>Start Game</button>
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