const fs = require ('fs');
const listOfWords = fs.readFileSync('sowpods.txt', 'utf-8')
const words = listOfWords.split('\n')



/**
 *  First, what are all of the words that have a least one “A”, one “B”, one “C”, one “D”, one “E”, and one “F” in them, in any order?
    For example, “FEEDBACK” is an answer to this question
    Next, is “ABCDEF” the longest alphabet chain that can be found in a word, or is there a longer chain starting somewhere else in the alphabet? Find the longest chain.
*/

// function containsAllLetters(word) {
//     const letters = ['A', 'B', 'C', 'D', 'E', 'F']
//     for (let i = 0; i < letters.length; i++){
//         for (let j = 0; j < word.length; j++){
//             if (!word.includes(letters[i])) {
//                 return false
//             }
//         }
//     }
//     return true
// }

// function alphaChain(dic) {
//     let moreThanSixLetters = dic.filter(word => word.length >= 5)
//     let contaisAll = []

//     for (let i = 0; i < moreThanSixLetters.length; i++){
//         if (containsAllLetters(moreThanSixLetters[i]) === true) {
//            contaisAll.push(moreThanSixLetters[i])
//         }
//     }
//     return contaisAll
// }
// console.log(alphaChain(words))

//part 2...
//create a sliding array that sarts @7  

// function allLettersSliding(word, letters) {
//     for (let i = 0; i < letters.length; i++){
//         for (let j = 0; j < word.length; j++){
//             if (!word.includes(letters[i])) {
//                 return false
//             }
//         }
//     }
//     return true
// }

// function slidingChain(indexStart, indexEnd) {
//     const alaphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
//     return alaphabet.slice(indexStart,indexEnd)
// }

// function findLongestChain() {
//     const listOfWords = words.filter(word => word.length > 5)
//     let longestChain = []
//     let start = 0
//     let end = 6

//     while (end < 27) {
        
                    
//         for (let i = 0; i < listOfWords.length; i++){
//             let allChains = allLettersSliding(listOfWords[i], slidingChain(start, end))
//             if (allChains === true) {
//                 longestChain.push(slidingChain(start, end).join(''))
                          
//                 end++
//                 i=0
//             }
//         }
            
        
//         i = 0
//         start++
//         end++

//     }

//     return longestChain.reverse()[0]
// }
// console.log(findLongestChain())









/**
 * 
 * @param {string} currentWord 
 * @param {dictionary of words} dic 
 * @returns {new dictionary of words starting with a specific letter}
*/
function possibleWords(currentWord, dic){ 
    let list = dic.filter(word => word[0] === currentWord[0])
    let x = list.filter(word => word.length <= currentWord.length)
    
    return x
}

/**
 * function that splices and retuns a array of possible words
 * @param {string} word  
 * @returns {string}
*/
function splicesWord(word) {
    let currentWord1 = ''
    let currentWord2 = ''

    for (let i = 0; i < word.length; i++) {
        currentWord1 = word.slice(0, i + 1)
        currentWord2 = word.slice(i + 1)

        const words1 = possibleWords(currentWord1, words)
        const words2 = possibleWords(currentWord2, words)
        if (words1.includes(currentWord1) && words2.includes(currentWord2)) {
            return word
        }
    }    
}

/**
 * 
 * @param {Array of words} arr 
 * @returns {Array of compunded words}
 */
function compoundWord(arr) {
    let solution = []
    let i = 0
    let j = 0
    while (j < arr.length) {
        const possible = possibleWords(arr[j], arr).reduce((a, v) => ({ ...a, [v]: v }), {})
        const keys = Object.keys(possible)
                 
        while (i < keys.length) {
            let x = possible.hasOwnProperty(splicesWord(keys[i]))
            if ( x === true) {
                solution.push(keys[i])
            }
            i++
        }
        i = 0
       j++
    }
    
    return solution
}
// console.log(compoundWord(['SNOWMAN','BATMAN',"SNOW",'MAN','BAT', 'are' ,'all' ,'of' ,'the' ,'compound', 'These', 'words']))
 console.log(compoundWord(words))

// What are all of the compound words? These are words made up of 2 smaller words. 
// For example, "SNOWMAN" is a compound word made from "SNOW" and "MAN", 
// and "BEACHBALL" is a compound word made from "BEACH" and "BALL".