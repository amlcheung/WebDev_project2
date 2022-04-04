import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            Navigation Bar
            <Link to={"/instructions"}>Instructions</Link>
            <Link to={"/easy"}>Easy</Link>
            <Link to={"/medium"}>Medium</Link>
            <Link to={"/hard"}>Hard</Link>
        </div>
    )
}