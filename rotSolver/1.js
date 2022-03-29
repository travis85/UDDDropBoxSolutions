const fs = require ('fs');
const listOfWords = fs.readFileSync('sowpods.txt', 'utf-8')
const words = listOfWords.split('\n')

function shift(foundLetter, num) {
    let original = foundLetter.charCodeAt(0)
    let charCode = foundLetter.charCodeAt(0) + num;
    if(original > 64 && original < 123){
        if (original <= 90 ){
            if(charCode > 90){
               charCode = charCode - 90 + 64
           }
       } else {
           if(charCode > 122){
            charCode = charCode - 122 + 96
           }
       }
   
    } else{
        if (original < 65){
            return String.fromCharCode(original)
        }
         
    }
    return String.fromCharCode(charCode)
}

function rot(string, numOfShifts){ 
    let shifted = []
    for (let i = 0; i < string.length; i++){
        shifted.push(shift(string[i],numOfShifts))
    }
    return shifted.join('')
}
console.log(rot('hello World',26))

//shift until word is met 
function decrypt(encrypted) {
    let encryptedWords =  encrypted.toUpperCase()

    function findLongestWord(str) {
        str = str.split(" ")
        return str.sort((a, b) => b.length - a.length)[0]
    }
    let longestWord = findLongestWord(encryptedWords) //wanted to find the longest word so that Itll give a accurate shift count on the smaller words

    function oneWordDecrypt(oneWord){//determine the num of shifts
        let numOfShifts = 0
        while(numOfShifts < 27){
            let decrypted = rot(oneWord, numOfShifts)

            if(!(words.includes(decrypted))){
                numOfShifts++
            } else {
                break
            }
        }
        return numOfShifts
    }
    let shifts = oneWordDecrypt(longestWord)
    // console.log(encrypted)
    return rot(encrypted,shifts)
}

console.log(decrypt("Ifmmp , Sjdl"))
console.log(decrypt("Ju xbt uif cftu pg ujnft ,  ju xbt uif xpstu pg ujnft"))


