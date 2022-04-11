import React, { useState } from 'react';
import { shallowEqual, useDispatch } from 'react-redux';
import './Easy.css';
import Square from './Square';
import InputBox from'./InputBox';
import { useSelector } from 'react-redux';
import MessageBoard from './MessageBoard';

export default function Easy(props) {
   
    const dispatch = useDispatch();

    function getWord() {
        const action = {
            type: 'EASY',
            attempts: 7,
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
            return state.history;
    }

    //const currArray = getWordFromHistory();
    //const [eachWord, setWord] = useState('');

    // Function to check is the square should be yellow
    function CheckYellow(goalWord, guessWord, letterIndexInGuess){
        let countLetterInGuessWord = 0;
        let countCorrectLetterInGuessWord = 0;
        let indexesOfLetterInGuessWord = [];
        let indexesOfLetterInGoalWord = [];
        let countLetterInGoalWord = 0;
        for (let index = 0; index < 5; index++){
            if (guessWord[index] == guessWord[letterIndexInGuess]){
                countLetterInGuessWord++;
                indexesOfLetterInGuessWord.push(index);
            }
            if (goalWord[index] == guessWord[letterIndexInGuess]){
                countLetterInGoalWord++;
                indexesOfLetterInGoalWord.push(index);
            }
        }
        // Count number of 'green' sqaures of given letter in given word
        for (let correct = 0; correct < indexesOfLetterInGoalWord.length; correct++){
            for (let lettGuess = 0; lettGuess < indexesOfLetterInGuessWord.length; lettGuess++){
                if (indexesOfLetterInGoalWord[correct] == indexesOfLetterInGuessWord[lettGuess]){
                    countCorrectLetterInGuessWord++;
                }
            }
        }
    
       if (countLetterInGuessWord === countLetterInGoalWord){
            return true;
        } else {
            // If the number of 'green' of that letter in the guess is == to the number of that letter -> return false
            for (let yellowBlock = 0; yellowBlock < (countLetterInGoalWord - countCorrectLetterInGuessWord); yellowBlock++){
                if (letterIndexInGuess == indexesOfLetterInGuessWord[yellowBlock ]){
                    return true;
                }
            }
        }
        // If letter from guess word isn't in goal word OR the number of 'green' of that letter in the guess is == to the number of that letter -> return false
        return false;
    }
    const randomWord = useSelector(getWordFromState, shallowEqual);
    const guessArray= useSelector(getWordFromHistory, shallowEqual);
    const wordComponents = [];
    // If the number of guesses is less than 7, add the guess
    if (guessArray.length <= 7){
        for (let i = 0; i < guessArray.length; i++){
            const list = []
            for (let j = 0; j < guessArray[i].length; j++){
                if (guessArray[i].toUpperCase().charAt(j) == randomWord.charAt(j)){
                    const component = <Square color='green' letter={guessArray[i].toUpperCase().charAt(j)} ></Square>
                    list.push(component);
                } else if (CheckYellow(randomWord, guessArray[i].toUpperCase(), j)){
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
                if (guessArray[i].toUpperCase().charAt(j) == randomWord.charAt(j)){
                    const component = <Square color='green' letter={guessArray[i].toUpperCase().charAt(j)} ></Square>
                    list.push(component);
                } else if (CheckYellow(randomWord, guessArray[i].toUpperCase(), j)){
                    const component = <Square color='yellow' letter={guessArray[i].toUpperCase().charAt(j)} ></Square>
                    list.push(component);
                } else {
                    const component = <Square color='white'letter={guessArray[i].toUpperCase().charAt(j)} ></Square>
                    list.push(component);
                }
            }
            wordComponents.push(list);
        }
    }

    for (let z = 0; z < 7 - guessArray.length; z++){
        const blankList = []
            for (let j = 0; j < 5; j++){
                const component = <Square color="black"></Square>
                blankList.push(component);
            }
            wordComponents.push(blankList);
    } 

    return(
        <div>
            <h1>Easy</h1>
            <div className="game-contents-container">
                <button className="button-style" onClick={getWord}>Start Game</button>
                <MessageBoard></MessageBoard>
                <InputBox></InputBox>
                <div id="easy-board-container">
                    {wordComponents}
                </div>
            </div>
    </div>
    );
}