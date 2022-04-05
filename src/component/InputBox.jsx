import React from 'react';
import './InputBox.css';


export default function InputBox(props) {
    return (
        <form>
                <label className="text">
                    Enter Word:
                    <input type="text"></input>
                </label>
                <input type="submit" value="Submit"></input>


            </form>

    );


}

