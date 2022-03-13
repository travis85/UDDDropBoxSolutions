const fs = require ('fs');
const listOfWords = fs.readFileSync('sowpods.txt', 'utf-8')
const words = listOfWords.split('\n')



function shift(foundLetter, num) {
    let original = foundLetter.charCodeAt(0)
    let charCode = foundLetter.charCodeAt(0) + num;
    if (original <= 90 ){
         if(charCode > 90){
            charCode = charCode - 90 + 64
        }
    } else {
        if(charCode > 122){
         charCode = charCode - 122 + 96
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


//   console.log(rot('hell0World',2))

//map
function decrypt(encrypted) {
    let encryptedWords =  encrypted.toUpperCase().split(' ') //['JU', 'XBT', 'UIF',....]
    let wordCounter = 0// count can not pass 11
    let shiftCounter = 1;
    let solution = []

    let i = 0;
    while (i < encryptedWords.length){
        let word = encryptedWords[i]
        let deciphered = rot(word, shiftCounter);

        if(words.includes(deciphered)){ //this works now need to wrap in loop
            solution.push(deciphered)
            wordCounter++
            i++
            
        } else {
            
            if(shiftCounter < 26 )
            
            shiftCounter++
            i = 0
            solution = []
        }

    }
        

    return [solution.join(' '), shiftCounter]

}

//console.log(decrypt("AA iugbu fgnknkl"))
console.log(decrypt("Ju xbt uif cftu pg ujnft,  ju xbt uif xpstu pg ujnft"))


