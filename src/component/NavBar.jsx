import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, shallowEqual } from 'react-redux';
import './NavBar.css';
import App from './App';

export default function NavBar() {

    /*
   const dispatch = useDispatch();

    function getWordE() {
        const action = {
            type: 'EASY',
            attempts: 7,
            // type: setDifficulty
            // level: 'easy'
        }
        dispatch(action);
    }

    function getWordM() {
        const action = {
            type: 'MEDIUM',
            attempts: 7,
            // type: setDifficulty
            // level: 'easy'
        }
        dispatch(action);
    }
 /*
    function getWordH() {
        const action = {
            type: 'HARD',
            attempts: 7,
            // type: setDifficulty
            // level: 'easy'
        }
        dispatch(action);
    }
*/
    return (
        <div className="nav-bar-container font-style">
            <Link className="button-format" to={"/"}> Home </Link>
            <Link className="button-format" to={"/instructions"}>Instructions</Link>
            <div className="button-format font-style-wordle">Wordle</div>
            <Link className="button-format" to={"/easy"} >Easy</Link>
            <Link className="button-format" to={"/medium"}>Medium</Link>
            <Link className="button-format" to={"/hard"}>Hard</Link>
        </div>
    );
}