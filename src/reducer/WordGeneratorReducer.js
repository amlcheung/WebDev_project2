// reducer to randomly select word?

const initState = {
    word: "",
    history: [],
    invalidWordLength: false,
    attemptsRemaining: -1,
}

const max = 10;
const min = 0;

export function WordGeneratorReducer(state = initState, action) {
    //debugger
    if (action.type === 'EASY') {
        const easyWords = ["Cable", "Faces", "Label", "Nacho", "Wacky", 
                       "Yacht", "Adult", "Grass", "Water", "Tower"];

        let randomIndexEasy = Math.floor(Math.random() * (max - min) + min);

        console.log("random selected word: " + easyWords[randomIndexEasy]);

        return {
            ...state, 
            word: easyWords[randomIndexEasy].toUpperCase(),
            history: [],
            attemptsRemaining: action.attempts,


        }
    }

    if (action.type === 'MEDIUM') {
        const medWords = ["Acting", "Amount", "Became", "Belief", "Breath", 
                          "Design", "Doctor", "Enable", "Fabric", "Golden"];
    

        let randomIndexMedium = Math.floor(Math.random() * (max - min) + min);

        console.log(medWords[randomIndexMedium]);
        return {
            ...state,
            word: medWords[randomIndexMedium].toUpperCase(),
            history: [],
            attemptsRemaining: 6,
        }
    }


    if (action.type === 'HARD') {
        const hardWords = ["Fuzzier", "Drizzle", "Quibble", "Oxidize", "Tickbox", 
                           "Complex", "Squeeze", "Jumping", "Quickley", "Eagerly"];

        let randomIndexHard = Math.floor(Math.random() * (max - min) + min);

        console.log(hardWords[randomIndexHard]);

        return {
            ...state, 
            word: hardWords[randomIndexHard].toUpperCase(),
            history: [],
            attemptsRemaining: 5,
        }

    }


    if (action.type === "EVALUATE_WORD") {
        console.log("eval function called");
        let newWord = action.value.toString();
        // console.log("input word length: " + newWord.length)
        // Easy

        if (state.word.length === 5 && newWord.length === 5){
            console.log("history array: " + state.history);
            console.log("valid");


            return {
                ...state,
                history: [...state.history, action.value],
                invalidWordLength: false,
                attemptsRemaining: state.attemptsRemaining - 1,
            }
        }
        // Medium
        else if (state.word.length === 6 && newWord.length === 6){
            console.log(state.history);
            return {
                ...state,
                history: [...state.history, action.value],
                invalidWordLength: false,
                attemptsRemaining: state.attemptsRemaining - 1,
            }
        }
        // Hard
        else if (state.word.length === 7 && newWord.length === 7){
            console.log(state.history);
            return {
                ...state,
                history: [...state.history, action.value],
                invalidWordLength: false,
                attemptsRemaining: state.attemptsRemaining - 1,
            }
        }
        // Not valid
        else {
            // Invalid! The word must be of length {state.word.length}.
            return {
                ...state,
                invalidWordLength: true,
                // attemptsRemaining: attemptsRemaining,
            }
        }
    } else {
        return {
            ... state,
            attemptsRemaining: state.attemptsRemaining,
        }
    }
        
    
    return state;
}