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

    function letterInRandomWord (goalWord, guessWordLetter){
        for (let eachLetter = 0; eachLetter < goalWord.length; eachLetter++){
            if (guessWordLetter == goalWord.charAt(eachLetter)){
                return true;
            }
        }
    }

    const randomWord = useSelector(getWordFromState, shallowEqual);
    const guessArray= useSelector(getWordFromHistory, shallowEqual);
    console.log(randomWord.charAt(0));
    const wordComponents = [];
    // If the number of guesses is less than 7, add the guess
    if (guessArray.length <= 7){
        for (let i = 0; i < guessArray.length; i++){
            const list = []
            for (let j = 0; j < guessArray[i].length; j++){
                if (guessArray[i].toUpperCase().charAt(j) == randomWord.charAt(j)){
                    const component = <Square color='green' letter={guessArray[i].toUpperCase().charAt(j)} ></Square>
                    list.push(component);
                } else if (letterInRandomWord(randomWord, guessArray[i].toUpperCase().charAt(j))){
                    const component = <Square color='yellow' letter={guessArray[i].toUpperCase().charAt(j)} ></Square>
                    list.push(component);
                } else {
                    const component = <Square color='white'letter={guessArray[i].toUpperCase().charAt(j)} ></Square>
                    list.push(component);
                }
            }
            wordComponents.push(list);
        }
    // User tries to guess more than 7 times, nothing happens
    } else {
        for (let i = 0; i < 7; i++){
            const list = []
            for (let j = 0; j < guessArray[i].length; j++){
                const component = <Square letter={guessArray[i].charAt(j)}></Square>
                list.push(component);
            }
            wordComponents.push(list);
        }
    }

    for (let z = 0; z < 7 - guessArray.length; z++){
        const blankList = []
            for (let j = 0; j < 5; j++){
                const component = <Square color="white"></Square>
                blankList.push(component);
            }
            wordComponents.push(blankList);
    } 

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