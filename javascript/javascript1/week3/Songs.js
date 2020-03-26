let songDatabase = [
  {
    songId: 1,
    title: "My baby",
    artist: "Soggy socks"
  },
  {
    songId: 2,
    title: "3 nails in wood",
    artist: "The carpenters"
  },
  {
    songId: 3,
    title: "Blacker than black",
    artist: "Instant coffee"
  },
  {
    songId: 4,
    title: "When is enough too little?",
    artist: "The spies girls"
  }
];
let myPlaylist = [];
const songTitle = "3 nails in wood";
const song = {
  songId: 5,
  title: "yellow submarine",
  artist: "The Beatles"
};

function addSongToDatabase(songs, song) {  
  songs.push(song);
  return songs;
}

function getSongByTitle(songs, title) {
  let songByTitle = songs.find(item => item.title === title);

  return songByTitle;
}

function addSongToMyPlaylist(songs, playlist, title) {
  let song = getSongByTitle(songs, title);
  playlist.push(song);

  return playlist;
}


songDatabase = addSongToDatabase(songDatabase, song);
console.log("Songs database with a new song: ");
console.log(songDatabase);


let songByTitle = getSongByTitle(songDatabase, songTitle);
console.log("Found song by title: ");
console.log(songByTitle);


myPlaylist = addSongToMyPlaylist(songDatabase, myPlaylist,"yellow submarine");
console.log("Added a new song to my the playlist: ");
console.log(myPlaylist);





