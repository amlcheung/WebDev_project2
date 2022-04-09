import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './NavBar.css';
import App from './App';

function NavBar() {

    return (
        <div className="center">
            <Link to={"/"}> Home </Link>
            <Link to={"/easy"}>Easy</Link>
            <Link to={"/medium"}>Medium</Link>
            <Link to={"/hard"}>Hard</Link>
            <Link to={"/instructions"}>Instructions</Link>
        </div>
    );
}

export default NavBar;