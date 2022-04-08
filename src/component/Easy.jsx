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

    // Get Guess Array
    function getWordFromHistory(state) {
        debugger
            return state.history;
    }

    //const currArray = getWordFromHistory();
    //const [eachWord, setWord] = useState('');

    const randomWord = useSelector(getWordFromState, shallowEqual);
    const guessArray= useSelector(getWordFromHistory, shallowEqual);
    console.log(guessArray);
    const wordComponents = [];
    // If the number of guesses is less than 7, add the guess
    if (guessArray.length <= 7){
        for (let i = 0; i < guessArray.length; i++){
            const list = []
            for (let j = 0; j < guessArray[i].length; j++){
                //const list = []
                const component = <Square letter={guessArray[i].charAt(j)}></Square>
                list.push(component);
            }
            wordComponents.push(list);
        }
    // User tries to guess more than 7 times, nothing happens
    } else {
        for (let i = 0; i < 7; i++){
            const list = []
            for (let j = 0; j < guessArray[i].length; j++){
                //const list = []
                const component = <Square letter={guessArray[i].charAt(j)}></Square>
                list.push(component);
            }
            wordComponents.push(list);
        }
    }

    for (let z = 0; z < 7 - guessArray.length; z++){
        const blankList = []
            for (let j = 0; j < 5; j++){
                //const list = []
                const component = <Square color="white"></Square>
                blankList.push(component);
            }
            wordComponents.push(blankList);
    } 
    /*
    if (randomWord){
        const list = []
        for (let i = 0; i < randomWord.length; i++){
            //const list = []
            const component = <Square square="square-white" letter={randomWord.charAt(i)}></Square>
            list.push(component);
        }
        wordComponents.push(list);
    }
    if (randomWord){
        const list = []
        for (let i = 0; i < randomWord.length; i++){
            //const list = []
            const component = <Square square="square-white" letter={randomWord.charAt(i)}></Square>
            list.push(component);
        }
        wordComponents.push(list);
    }
    */
    return(
        <div>
            <h1>Difficulty: Easy, randomWord: {randomWord}</h1>
            <button onClick={getWord}>Start Game</button>
            <InputBox></InputBox>
            <div id="board-container">
                {wordComponents}
            </div>
    </div>

    );
}