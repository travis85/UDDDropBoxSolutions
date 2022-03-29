const fs = require('fs');
const countries = fs.readFileSync('countries.txt', 'utf-8');


function countriesSolutions(){

    let allCountries = countries.split('\n')// used to turn into a array

    //What are all of the countries that have “United” in the name?
    function united(){
        let x =[]
        let united1 = allCountries.map((word) => {
            if(word.match(/United/g)){
                x.push(word)
            }
        })
        return x
    }

    // What countries both begin and end with a vowel?
    function startAndEnd(){
        let x = [];
        let vowel = /^[AEIOU].*[aeiou]$/
        allCountries.forEach(countries =>{
            if(countries.match(vowel) && countries.match(vowel)){
                x.push(countries)
            }
        })
        return x
    }
    

    //What country names are > 50% vowels?
    
    function moreThanfifty(){
        let vowel = /[AEIOUaeiou]/g;
        let overFifty = [];
        for (let i = 0; i < allCountries.length; i++){
            let counter = 0;
            for(let j = 0; j < allCountries[i].length; j++){
                if(allCountries[i][j].match(vowel)){
                    counter++
                }
            }
            if(allCountries[i].length / 2 < counter){
                overFifty.push(allCountries[i])
            }
        }
        return overFifty;
    }


    // What is the shortest country name? Make sure your solution can handle ties.
    function shortest() {
        let allShortest = [allCountries[0]];
        let shortest = allCountries[0].length;
        for(let i = 1; i < allCountries.length; i++){
            if (allCountries[i].length < shortest){
                shortest = allCountries[i].length;
                allShortest = [allCountries[i]]
            } else if  (allCountries[i].length === shortest){
                allShortest.push(allCountries[i])                
            }
        }
        return allShortest
    }

    // [ ] What countries use only one vowel in their name (the vowel can be used multiple times)

    function oneVowel() {
        let onlyOne = [];
        for(let i = 0; i < allCountries.length; i++)
            if(!allCountries[i].match(/[eiou]/gi)){
            onlyOne.push(allCountries[i]);
        } else if (!allCountries[i].match(/[aiou]/gi)){
            onlyOne.push(allCountries[i]);
        } else if (!allCountries[i].match(/[aeiu]/gi)){
            onlyOne.push(allCountries[i]);
        } else if (!allCountries[i].match(/[aioe]/gi)){
            onlyOne.push(allCountries[i]);
        }
        
        return onlyOne
    }


    // There is at least one country name that contains another country name. Find all of these cases.
    function atLeastOne() {
        let nested = []
        let x = [allCountries[0]]
        for (let i = 1; i < allCountries.length; i++){
            if(allCountries[i].match(x)){
                nested.push(allCountries[i]);
            } else if(!allCountries[i].match(x)){
                x = allCountries[i]
            }       
        }
        return nested
    }
    console.log(atLeastOne())
}
countriesSolutions()


