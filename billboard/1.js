const fs = require('fs')
const rawbillboard = fs.readFileSync('charts.csv','utf-8')
const billboard = rawbillboard.split('\n')




// [ ] Print out all of the #1 songs and the artists who made them. If a song was #1 for more than one week, only print it once. Example output:
function numOnes(){
    let allSongs1 = []
    billboard.forEach(allSongs =>{
        const value = allSongs.split(',');
        const keys = {
            rank: value[1],
            song: value[2],
            artist: value[3]
        }
        if(keys.rank === '1'){
            allSongs1.push(keys)
        }
    })

    let noDups = new Set();
    for(let i = 0; i < allSongs1.length; i++){
        noDups.add(allSongs1[i].song+ ' - '  +allSongs1[i].artist)
    }
    return noDups
}




// [ ] What song was the #1 song for the most weeks of 2001, who was the artist, and how many weeks was it at #1?
function mostNumOnes(){
    let allSongs1 =[]
    billboard.forEach(allSongs =>{
        const value = allSongs.split(',');
        const keys = {
            rank: value[1],
            song: value[2],
            artist: value[3]
        }
        if(keys.rank === '1'){
            allSongs1.push(keys)
        }
    })
    let mappedSongs = allSongs1.map((keys) =>[
        keys['song'],
        keys['artist']
        
    ])

    let countedSongs = {};
    for(const song of mappedSongs){
        if (countedSongs[song]){
            countedSongs[song] += 1;
        } else {
            countedSongs[song] = 1
        }
    }    
    let songsSorted = [];
    for(let song in countedSongs){
        songsSorted.push([song,countedSongs[song]]);
    }
    songsSorted.sort(function(a,b){
        return b[1] - a[1]
    })

    return songsSorted[0]
}






// [ ] What artist had the most songs chart in 2000, and what were those songs?
function most(){

    songsRaw = [];
    billboard.forEach(allSongs =>{
        const value = allSongs.split(',');
        const keys = {
            song: value[2],
            artist: value[3]
        }
        songsRaw.push(keys);
    })

    let filteredSong = new Set();
    let songFiltered = songsRaw.filter(song => {
        let duplicate = filteredSong.has(song.song);
        filteredSong.add(song.song);
        return !duplicate
    })

    function groupBy(list) {
        const map = new Map();
        list.forEach((item) => {
            const key = item.artist;
            const existingSongListForArtist = map.get(key);
            if (!existingSongListForArtist) {
            map.set(key, [item]);
            } else {
                existingSongListForArtist.push(item);
            }
        });
        return map;
    }

    let groupedSongs = groupBy(songFiltered);
    const countMap = new Map();
    Array.from(groupedSongs.entries()).forEach(keyAndValue => {
        const artist = keyAndValue[0];
        const songs = keyAndValue[1];
        let existingCount = countMap.get(artist);
        if(!existingCount){
            countMap.set(artist, songs.length);
        }      
    })
    var mapAsc = new Map([...countMap.entries()].sort((a,b) => b[1] - a[1]));
    return [...mapAsc][0];

    
} 





// [ ] What song(s) were on the charts (anywhere on the charts) for the most weeks of 2000?
function mostCharted() {
    songsRaw = [];
    billboard.forEach(allSongs =>{
        const value = allSongs.split(',');
        const songs = value[2]
        songsRaw.push(songs);
    })

    let countedSongs = {}
    for(const song of songsRaw){
        if (countedSongs[song]){
            countedSongs[song] += 1;
        } else {
            countedSongs[song] = 1
        }
    }
    let songsSorted = [];
    for(let song in countedSongs){
        songsSorted.push([song,countedSongs[song]]);
    }
    songsSorted.sort(function(a,b){
        return b[1] - a[1]
    })
    

    return songsSorted[0]
}


console.log(mostCharted())







