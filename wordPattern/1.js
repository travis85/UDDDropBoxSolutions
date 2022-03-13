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
console.log(samePatternPt1('abcabc', 'red blue green red blue green'))
console.log(samePatternPt1('abba', 'red blue blue red'))
console.log(samePatternPt1('abba', 'red blue green red'))



//whatever index[0] find that in string and push that charAt index array

function samePatternPt2(pattern, input){
    // const patternSplit = pattern.split('');
    // const inputSplit = input.split(' ')


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

    const patternCounted = Object.values(countedIndex(patternSplit))  
    const inputCounted = Object.values(countedIndex(inputSplit))
    const isSame = (a, b) => JSON.stringify(a) === JSON.stringify(b);

    return 
}
// samePatternPt2()


//substring
//group by word or letter

function recurse(string, input){
    let x = input.split('')
    // if(pattern.match(input)){
    //     return true

    // } else {
    //     return false
    // }

console.log(x)
}//x
console.log(recurse('abba', 'blueredblue')) 

//turn to Regex 
//take string index[0] and see if its a match.
//if it is add another letter and check again.
//if its not push held letters into array
