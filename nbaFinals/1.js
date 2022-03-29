const fs = require('fs');
const rawNbaFinals = fs.readFileSync('nba_finals.csv', 'utf-8');

// [ ] Write a function that takes as an argument a year and returns the winner of the NBA finals that year.
function winnerOfYear(year) {
    const finals = [];
    const finalsSplit = rawNbaFinals.split('\n');
    finalsSplit.shift()
    finalsSplit.forEach(finals1 => {
        let value = finals1.split(',')
        const key = {
            year : value[0],
            winner: value[1],
        }
        finals.push(key)
    })

    let winner = [];
    for(let i = 0; i < finals.length; i++){
        if(year === finals[i].year){
            winner.push(finals[i].winner)
        }
    }
    return winner
}

// [ ] Write a function that takes as an argument a team name and returns an array of all of the years the team has won the NBA finals.
function yearsTeamWon(team){

    const finals = [];
    const finalsSplit = rawNbaFinals.split('\n');
    finalsSplit.shift()
    finalsSplit.forEach(finals1 => {
        let value = finals1.split(',')
        const key = {
            year : value[0],
            winner: value[1],
        }
        finals.push(key)
    })

    let years = [];
    for(let i = 0; i < finals.length; i++){
        if(team === finals[i].winner){
            years.push(finals[i].year)
        }
    }
    return years
}

// [ ] Which teams have made it to the NBA finals but have never won?
function neverWon (){
    let winner = []
    let losers = []

    const finalsSplit = rawNbaFinals.split('\n');
    finalsSplit.shift();
    finalsSplit.forEach(finals1 => {
        let values = finals1.split(',');
        const key = {
            winner: values[1],
            loser: values[2]
        }
        winner.push(key.winner);
        losers.push(key.loser)
    })

    let neverwon = losers.filter((loser) => !winner.includes(loser))

    return neverwon
}

// [ ] Print out a ranking of who has won the MVP more than once, by times one, e.g. this output:
//     - 6 times: Michael Jordan
//     - 3 times: Shaquille O'Neal, LeBron James
//     - 2 times: <etc></etc>
function moreThanOnce() {
    let players = []
    const finalsSplit = rawNbaFinals.split('\n');
    finalsSplit.shift();
    finalsSplit.forEach(finals1 => {
        let values = finals1.split(',');
        const mvp = values[4]
        players.push(mvp)
    })

    let mvp = {}
    for(let player of players){
        if(mvp[player]){
            mvp[player] += 1
        }else {
            mvp[player] =1;
        }
    }
    
    let mvpSorted = [];
    for(let player in mvp){
        mvpSorted.push([player,mvp[player]]);
    }
    mvpSorted.sort(function(a,b){
        return b[1] - a[1];
    })
    mvpSorted.shift()
    mvpSorted.pop()

    const onlyTopDogs = []
    mvpSorted.forEach(sorted => {
        if(!(sorted.includes(1))){
            onlyTopDogs.push(sorted)
        }
    })
    return onlyTopDogs
}
console.log(moreThanOnce())

