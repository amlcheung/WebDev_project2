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

    const curWord = useSelector(getWordFromState, shallowEqual);

    // debugger
    

    return(
        <div>
            <h1>Difficulty: Easy, curWord: {curWord}</h1>
            <button onClick={getWord}>Start Game</button>
            <InputBox></InputBox>
            {/* <div>Here: {curWord}</div> */}
            <div id="board-container">

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