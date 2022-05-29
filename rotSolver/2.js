const fs = require ('fs');
const listOfWords = fs.readFileSync('sowpods.txt', 'utf-8')
const words = listOfWords.split('\n')



/**
 *  First, what are all of the words that have a least one “A”, one “B”, one “C”, one “D”, one “E”, and one “F” in them, in any order?
    For example, “FEEDBACK” is an answer to this question
    Next, is “ABCDEF” the longest alphabet chain that can be found in a word, or is there a longer chain starting somewhere else in the alphabet? Find the longest chain.
*/

function containsAllLetters(word) {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F']
    for (let i = 0; i < letters.length; i++){
        for (let j = 0; j < word.length; j++){
            if (!word.includes(letters[i])) {
                return false
            }
        }
    }
    return true
}

function alphaChain(dic) {
    let moreThanSixLetters = dic.filter(word => word.length >= 5)
    let contaisAll = []

    for (let i = 0; i < moreThanSixLetters.length; i++){
        if (containsAllLetters(moreThanSixLetters[i]) === true) {
           contaisAll.push(moreThanSixLetters[i])
        }
    }
    return contaisAll
}
// console.log(alphaChain(words))

//part 2...
//create a sliding array that sarts @7  

function allLettersSliding(word, letters) {
    for (let i = 0; i < letters.length; i++){
        for (let j = 0; j < word.length; j++){
            if (!word.includes(letters[i])) {
                return false
            }
        }
    }
    return true
}

function slidingChain(indexStart, indexEnd) {
    const alaphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    return alaphabet.slice(indexStart,indexEnd)
}

function findLongestChain() {
    const listOfWords = words.filter(word => word.length > 5)
    let longestChain = []
    let i = 0
    let start = 0
    let end = 6

    while (end < 27) {
        while (i < listOfWords.length) {
            let allChains = allLettersSliding(listOfWords[i], slidingChain(start, end))
        
            if (allChains === true) {
                longestChain.push(slidingChain(start, end).join(''))
                start = 0
                end++
            }
            i++
        }
        if (i === listOfWords.length) {
            i = 0
            start++
            end++
        }
    }

    return longestChain.reverse()[0]
}
console.log(findLongestChain())
