const songDatabase = [
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

//add song
let updatedSongDatabase = addSongToDatabase(songDatabase);
console.log("Songs database with a new song: ");
console.log(updatedSongDatabase);

//Searching for a song
const songTitle = "3 nails in wood";
let songByTitle = getSongByTitle(songDatabase, songTitle);
console.log("Found song by title: ");
console.log(songByTitle);

//Create our own playlist
let myPlaylist = [];
let updatedMyPlaylist = addSongToMyPlaylist(songDatabase, myPlaylist,"yellow submarine");
console.log("Added a new song to my the playlist: ");
console.log(updatedMyPlaylist);

function addSongToDatabase(songs) {  
  const song = {
    songId: 5,
    title: "yellow submarine",
    artist: "The Beatles"
  };

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
