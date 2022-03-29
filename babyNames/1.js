const fs = require('fs');
const newNames =fs.readFileSync('baby_names_2020_short.txt', 'utf-8');
const oldNames = fs.readFileSync('baby_names_1880_short.txt', 'utf-8');
const sowpods = fs.readFileSync('sowpods.txt','utf-8')
const newName = newNames.split('\n');
const oldName = oldNames.split('\n');
const scrabble = sowpods.split('\n');

// [ ] What is the shortest baby name in the top 40 baby names for 2020?
function shortest(){
    let short  = [];
    let compare = newName[0]
    for(let i = 1; i < newName.length; i++){
        if(newName[i].length < compare.length){
            compare = newName[i];
            short.push(newName[i]);
        } 
    }
    return short
}

// [ ] What are the longest baby names in the top 40 baby names for 2020? Make sure you can handle if there’s a tie.
function long(){
    let longest = [newName[0]];
    let compare = newName[0].length
    for(let i = 1; i < newName.length; i++){
        if(newName[i].length > compare){
           compare = newName[i].length
           longest = [newName[i]]
        } else if(newName[i].length === compare) {
        longest.push(newName[i])
        }
    }
    return longest
}

// [ ] There is at least one baby name from the top 40 baby names for 2020 that, when spelled backwards, is a valid Scrabble word. Find and print all such names.
// [ ] Solve this two ways: first with an array to hold the Scrabble words, and then with a dictionary (or set) to hold the Scrabble words. Use timer functions to measure how long it takes to complete this work under each implementation. Why is the time different?
const interval = setInterval(function(){backSet()},1000);

function backwards() {
    let validScrabble = []
    const nameReverse = newName.map(name => name.split('').reverse().join('').toLocaleUpperCase());
    for(let i = 0; i < nameReverse.length; i++){
        for(let j = 0; j < scrabble.length; j++){
            if(nameReverse[i] === scrabble[j]){
                validScrabble.push(nameReverse[i])
            }    
        }
    }
    return validScrabble
}

function backSet() {
    let validScrabble = new Set()
    const nameReverse = newName.map(name => name.split('').reverse().join('').toLocaleUpperCase());
    for(let i = 0; i < nameReverse.length; i++){
        for(let j = 0; j < scrabble.length; j++){
            if(nameReverse[i] === scrabble[j]){
                validScrabble.add(nameReverse[i])
            }    
        }
    }
    return validScrabble
}

console.log(interval)

// [ ] What are all of the names that were top 40 baby names in both 1880 and 2020?
function both(){
    let newAndOld = [];
    for(let i = 0; i < newName.length; i++){
        for(let j = 0; j < oldName.length; j++){
            if(newName[i] === oldName[j]){
                newAndOld.push(newName[i])
            }
        }
    }
    return newAndOld
}

