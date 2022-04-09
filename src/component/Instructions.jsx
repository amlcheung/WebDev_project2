import React from 'react';

import './Instructions.css';


export default function Instructions() {



    return(
        <div className="text-format">
            <h2 className="game-rules-format">Game Rules</h2>
            
            <p>1) Choose level of difficulty by clicking on the difficulty link at the top 
            of the page.
            </p>

            <p>2) Press Start Game Button to begin the game. This will generate a random 
                word.
            </p>

            <p>3) Type in your guess in the input box with the prompt "Enter Word". Then 
                click submit.
            </p>

            <p>4) You can keep submitting guesses while you still have attempts remaining.
            </p>

            <p>5) Each letter in your word will be evaluated. If a letter is in the correct spot, 
                the box will turn green. If your letter exists in the random word,
                the box will turn yellow. If your letter does not exist in the random word, the
                box will remain grey. If the random word has only 1 instance of a letter but you
                guess a word with 2 instances, 1 of your instances will still appear grey.</p>

            <p>5) If you don't guess the word within the number of attempts you have, the message
                Board will display You failed to guess the word. End of Game.". If on your current
                attempt you correctly guess the word, the message board will display "Congratulations!  
                Would you like to try again?"
            </p>

            <p>6) You can start a new game at any time in your current game. Just click Start Game
                to restart the game.
            </p>
        </div>




    );


}