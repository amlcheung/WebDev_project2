import React, { useState } from 'react';
import { shallowEqual, useDispatch } from 'react-redux';

import './Easy.css';
import Square from './Square';
import InputBox from'./InputBox';
import { useSelector } from 'react-redux';

export default function Easy(props) {

    const dispatch = useDispatch();

    function getWord() {
        const action = {
            type: 'EASY',
            // type: setDifficulty
            // level: 'easy'
        }

        dispatch(action);
    }

    function getWordFromState(state) {
        return state.word;
    }

    const randomWord = useSelector(getWordFromState, shallowEqual);

    return(
        <div>
            <h1>Difficulty: Easy, randomWord: {randomWord}</h1>
            <button onClick={getWord}>Start Game</button>
            <InputBox></InputBox>
            <div id="board-container">

                <Square square="square-white"></Square>
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