// TAKES A LIST WITH MULTIPLE VALUES AND SPLITS THEM UP into "key : pairs"
songsRaw = []
billboard.forEach(allSongs =>{
    const value = allSongs.split(',');
    const keys = {
        song: value[1],
        artist: value[2]
    }
    songsRaw.push(keys)
})

//TAKE ARRAY OF OBJECTS AND FILTER OUT DUPLICATES
let filteredSong = new Set();
let songFiltered = songsRaw.filter(song => {
    let duplicate = filteredSong.has(song.song);
    filteredSong.add(song.song);
    return !duplicate
})

//ITERATES OVER ARRAY AND COUNT OCCURANCES & SORTS THEM
let countedSongs = {}
for(const song of noDups){
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

//TAKES ARRAY OF OBJECTS AND CAN GROUP BY ANY KEY VALUE PAIR
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

//THIS IS A ADD ON IF WANTED TO COUNT AND SORT 
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
