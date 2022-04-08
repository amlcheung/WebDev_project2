/** needs square */
import React, { useState } from 'react';
import './Square.css';

export default function Square(props) {
    let className = 'square';

    if (props.color == 'white'){
        className += ' ' + 'white';
    }

    if (props.letter){
        return (<div className={className}>{props.letter}</div>);
    }

    return(
        <div className={className}></div>);
}