// Write a function that takes as arguments two strings: `pattern` and `input`. Return whether or not the words in `input` match the pattern of the characters in `pattern`.

function samePatternPt1(pattern, input){ //count the number and compares
    let patternSplit = pattern.split('');
    let inputSplit = input.split(' ')

    function countedIndex(currentString){
        let countedPattern = {};
        for(const string of currentString){
            if(countedPattern[string]) {
                countedPattern[string] += 1;
            } else {
                countedPattern[string] = 1;
            }
        }
        return countedPattern
    }

    let patternCounted = Object.values(countedIndex(patternSplit))  
    let inputCounted = Object.values(countedIndex(inputSplit))
    const isSame = (a, b) => JSON.stringify(a) === JSON.stringify(b);

    return isSame(patternCounted, inputCounted)
}
// console.log(samePatternPt1('abcabc', 'red blue green red blue green'))
// console.log(samePatternPt1('abba', 'red blue blue red'))
// console.log(samePatternPt1('abba', 'red blue green red'))



//split pattern if letter === letter group
//keep splicing input
function samePatternPt2(pattern, input){
    let patternSplit = pattern.split('');
    let inputSplit = input.split('')


//use regex on every splice

    let i = 0
    let j = 1
    let foundPattern = []

    while(i < inputSplit.length){
        let x = []
        let pattern2 = inputSplit.splice(i,j)
        let possiblePattern = new RegExp([pattern2.join('')])

        if(!(input.match(possiblePattern))){
            x.push(inputSplit[i],[j])
        } else {
            pattern2 = inputSplit.splice(i,j++)

        }
        foundPattern.push(x)
    }

    console.log(foundPattern)

    function countedIndex(currentString){
        let countedPattern = {};
        for(const string of currentString){
            if(countedPattern[string]) {
                countedPattern[string] += 1;
            } else {
                countedPattern[string] = 1;
            }
        }
        return countedPattern
    }


}
console.log(samePatternPt2('abcabc', 'redbluegreenredbluegreen'))
console.log(samePatternPt2('abba', 'redbluebluered'))
console.log(samePatternPt2('abba', 'redbluegreenred'))

