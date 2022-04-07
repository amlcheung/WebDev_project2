// reducer to randomly select word?

const initState = {
    word: null,
    history: [],
    // word history array
    // other values
}

const max = 10;
const min = 0;

export function WordGeneratorReducer(state = initState, action) {
    if (action.type === 'EASY') {
        const easyWords = ["Cable", "Faces", "Label", "Nacho", "Wacky", 
                       "Yacht", "Adult", "Grass", "Water", "Tower"];

        let randomIndexEasy = Math.floor(Math.random() * (max - min) + min);

        console.log(easyWords[randomIndexEasy]);

        return {
            word: easyWords[randomIndexEasy],
        }
    }

    if (action.type === 'MEDIUM') {
        const medWords = ["Acting", "Amount", "Became", "Belief", "Breath", 
                          "Design", "Doctor", "Enable", "Fabric", "Golden"];
    

        let randomIndexMedium = Math.floor(Math.random() * (max - min) + min);

        console.log(medWords[randomIndexMedium]);
        return {
            word: medWords[randomIndexMedium],
        }
    }


    if (action.type === 'HARD') {
        const hardWords = ["Fuzzier", "Drizzle", "Quibble", "Oxidize", "Tickbox", 
                           "Complex", "Squeeze", "Jumping", "Quickley", "Eagerly"];

        let randomIndexHard = Math.floor(Math.random() * (max - min) + min);

        console.log(hardWords[randomIndexHard]);

        return {
            word: hardWords[randomIndexHard],
        }

    }

    if (action.type === "EVALUATE_WORD") {
        let newWord = action.value.toString();
        // Easy
        if (state.word.length === 5 && newWord.length === 5){
            console.log(state.history);
            return {
                ...state,
                history: [state.history, action.value],
            }
        }
        // Medium
        else if (state.word.length === 6 && newWord.length === 6){
            console.log(state.history);
            return {
                ...state,
                history: [state.history, action.value],
            }
        }
        // Hard
        else if (state.word.length === 7 && newWord.length === 7){
            console.log(state.history);
            return {
                ...state,
                history: [state.history, action.value],
            }
        }
        // Not valid
        else {
            // Invalid! The word must be of length {state.word.length}.
        }
    }
    return state;
}



