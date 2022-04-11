import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector, shallowEqual } from 'react-redux';
import MessageBoard from './MessageBoard';
import './Medium.css';
import Square from './Square';
import InputBox from'./InputBox';

export default function Medium(props) {

    const dispatch = useDispatch();

    function getWord() {
        const action = {
            type: 'MEDIUM',
            newGame: 'YES',
            medattempts: 6,
        }
        dispatch(action);
    }

    useEffect(()=> {dispatch({type: 'MEDIUM', medattempts: 6,})});

    function getWordFromState(state) {
        return state.med_word;
    }

    // Get Guess Array
    function getWordFromHistory(state) {
            return state.med_history;
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
        for (let index = 0; index < 6; index++){
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
    // If the number of guesses is less than 6, add the guess
    if (guessArray.length <= 6){
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
    // User tries to guess more than 6 times, nothing happens
    } else {
        for (let i = 0; i < 6; i++){
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

    for (let z = 0; z < 6 - guessArray.length; z++){
        const blankList = []
            for (let j = 0; j < 6; j++){
                const component = <Square color="black"></Square>
                blankList.push(component);
            }
            wordComponents.push(blankList);
    } 

    return(
        <div>
            <h1>Medium</h1>
            <div className="game-contents-container">
                <button className="button-style" onClick={getWord}>New Game?</button>
                <MessageBoard></MessageBoard>
                <InputBox></InputBox>
                <div id="medium-board-container">
                    {wordComponents}
                </div>
            </div>
    </div>
    );




}