import React from 'react';

import './Instructions.css';


export default function Instructions() {



    return(
        <div className="text-format">
            
            1) Choose level of difficulty by clicking on the difficulty link at the top 
            of the page.
            
            - Choose level of difficulty by clicking on the difficulty link at the top 
            of the page. 
            - Press Start Game Button to begin the game. This will generate a random word.
            - Enter your guess in the input box where it says "Enter Word" and click submit.
            - 

            If chosen letter is in the correct spot, it will appear green 
            If a correct letter is chosen but it's in the wrong spot, it appears yellow
            If you choose a letter that’s not in the secret word, it appears gray
            If you enter a word that is too short or too long, you’ll receive a message "Invalid Word Length" at the top but will not deduct an attempt. 
            If the correct word has only 1 instance of a letter but you submit a word with 2 instances of the correct letter, only 1 letter will appear yellow. The other will be gray. 
            If you want to try a different word, press the Start Game Button again to start over and
            generate a new word.
        </div>




    );


}