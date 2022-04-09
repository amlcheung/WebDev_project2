/** needs square */
import React, { useState } from 'react';
import './Square.css';

export default function Square(props) {
    let className = 'square';

    if (props.color == 'white'){
        className += ' ' + 'white';
    } else if (props.color == 'green'){
        className = ' ' +  'green';
    } else if (props.color == 'yellow'){
        className = ' ' + 'yellow';
    }

    if (props.letter){
        return (<div className={className}>{props.letter}</div>);
    }

    return(
        <div className={className}></div>);
}