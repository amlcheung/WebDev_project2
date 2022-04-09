import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './NavBar.css';
import App from './App';

function NavBar() {

    return (
        <div className="nav-bar-container font-style">
            <Link className="button-format" to={"/"}> Home </Link>
            <Link className="button-format" to={"/instructions"}>Instructions</Link>
            <div className="button-format font-style-wordle">Wordle</div>
            <Link className="button-format" to={"/easy"}>Easy</Link>
            <Link className="button-format" to={"/medium"}>Medium</Link>
            <Link className="button-format" to={"/hard"}>Hard</Link>
        </div>
    );
}

export default NavBar;