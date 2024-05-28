const songsList = [
    {
        id : 1,
        name : 'Born-For-This',
        artist : 'The Score',
        image : 'https://i.ytimg.com/vi/aJ5IzGBnWAc/sddefault.jpg',
        genre : 'Pop',
        source : 'songs/Born-For-This.mp3',
    },
    {
        id : 2,
        name : 'Danza-Kuduro',
        artist : 'Don Omar',
        image : 'https://i.scdn.co/image/ab67616d0000b27334980ed5d82c8d52800bb22b',
        genre : 'Rock',
        source : 'songs/Danza-Kuduro.mp3',
    },
    {
        id : 3,
        name : 'Gasolina',
        artist : 'Daddy Yankee',
        image :'https://i1.sndcdn.com/artworks-RAT3Rh2uhiwzoamt-bZ2j9Q-t500x500.jpg',
        genre : 'Hip Hop',
        source : 'songs/Gasolina.mp3',
    },
    {
        id : 4,
        name : 'Go-Down-Deh',
        artist : 'Spice',
        image : 'https://c.saavncdn.com/467/Go-Down-Deh-feat-Shaggy-and-Sean-Paul-English-2021-20231120195030-500x500.jpg',
        genre : 'Pop',
        source : 'songs/Go-Down-Deh.mp3',
    },
    // {
    //     id : 5,
    //     name : 'Let-Me-Love-You',
    //     artist : 'Justin Bieber',
    //     image : 'https://c.saavncdn.com/273/Encore-English-2016-20190419221937-500x500.jpg',
    //     genre : 'Rock',
    //     source : 'songs/Let-Me-Love-You.mp3',
    // },
    {
        id : 5,
        name : 'Levitating',
        artist : 'Dua Lipa',
        image : 'https://i.scdn.co/image/ab67616d0000b2734bc66095f8a70bc4e6593f4f',
        genre : 'Hip Hop',
        source : 'songs/Levitating.mp3',
    },
    {
        id : 6,
        name : 'No-Lie',
        artist : 'Sean Paul',
        image : 'https://c.saavncdn.com/662/No-Lie-English-2016-500x500.jpg',
        genre : 'Pop',
        source : 'songs/No-Lie.mp3',
    },
    {
        id : 7,
        name : 'Serena-Safari',
        artist : 'J Balvin',
        image : 'https://c.saavncdn.com/292/Safari-English-2018-20181019011931-500x500.jpg',
        genre : 'Rock',
        source : 'songs/Serena-Safari.mp3',
    },
    {
        id : 8,
        name : 'Sugar-n-Brownies',
        artist : 'Dharia',
        image : 'https://c.saavncdn.com/059/Sugar-Brownies-English-2019-20190326005637-500x500.jpg',
        genre : 'Hip Hop',
        source : 'songs/Sugar-n-Brownies.mp3',
    },
];


const containerBody = document.querySelector('#container-body');

const selectDropDown = document.querySelector('#selectDropDown');

const pop = document.querySelector('#pop');
const rock = document.querySelector('#rock');
const hipHop = document.querySelector('#hipHop');

const divForShowingSongName = document.createElement('div'); //crating div
divForShowingSongName.classList.add('showSongName'); // adding classname to div
const allSongsDiv = document.querySelector('.all-songs-div');
allSongsDiv.appendChild(divForShowingSongName); //appending created div to allSongsDiv


function defaultContent(){

    const defaultImage = songsList[0].image;
    const defaultTitle = songsList[0].name;
    const defaultArtist = songsList[0].artist;
    const defaultSong = songsList[0].source;
    const title = document.getElementById('title');
    const artist = document.getElementById('artist');
    const image = document.getElementById('song-img');
    const song = document.getElementById('audioFile');

    title.textContent = defaultTitle;
    artist.textContent = defaultArtist;
    image.src = defaultImage;
    song.src = defaultSong;
 }
 
function displaySongs(){

    defaultContent();
    
    allSongsDiv.innerHTML = '';
    const selectedGenre = selectDropDown.value;
    divForShowingSongName.innerHTML = '';
    
    if(selectedGenre === 'All'){
        for(const song of songsList){
            const songsDisplayDiv = document.createElement('div');
            songsDisplayDiv.classList.add('songsDisplayDiv');

            const songNames = document.createElement('h3');
            songNames.classList.add('songNames');
            songNames.textContent = song.name;

            songNames.addEventListener('click',()=>{
                const title = document.getElementById('title');
                const artist = document.getElementById('artist');
                const image = document.getElementById('song-img');

                const audioFile = document.getElementById('audioFile');
                
                title.textContent = song.name;
                artist.textContent = song.artist;
                image.src = song.image;
                audioFile.src = song.source;
                
            });
            songsDisplayDiv.appendChild(songNames);
            allSongsDiv.appendChild(songsDisplayDiv);
            
        }
    }
    else{
        const filteredSongs = songsList.filter(song => song.genre === selectedGenre);
        for(const song of filteredSongs){
            const songsDisplayDiv = document.createElement('div');
            songsDisplayDiv.classList.add('songsDisplayDiv');

            const songNames = document.createElement('h3');
            songNames.classList.add('songNames');
            songNames.textContent = song.name;

            songNames.addEventListener('click',()=>{
                const title = document.getElementById('title');
                const artist = document.getElementById('artist');
                const image = document.getElementById('song-img');

                const audioFile = document.getElementById('audioFile');
                
                title.textContent = song.name;
                artist.textContent = song.artist;
                image.src = song.image;
                audioFile.src = song.source;

            });

            songsDisplayDiv.appendChild(songNames);
            allSongsDiv.appendChild(songsDisplayDiv);
            
        }
    }
    
}
    
selectDropDown.addEventListener('change',displaySongs);
 displaySongs();   


// *******************music-player*****************
let progress = document.getElementById('progress');
let song = document.getElementById('audioFile');
let ctrlIcon = document.getElementById('ctrlIcon');

song.onloadedmetadata = function(){

    progress.max = song.duration;
    progress.value = song.currentTime;
 };



 if(song.play){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
 }
 progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
 }



 song.onplay = function() {
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
};

song.onpause = function() {
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
};

// Toggle play/pause function
function playPause(){
    if(song.paused){ // Check if audio is paused
        song.play(); // If paused, play audio
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    } else {
        song.pause(); // If playing, pause audio
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}

/* previous and next song */
let currentIndex = 0;

function playSong(index) {
    const currentSong = songsList[index];
    const title = document.getElementById('title');
    const artist = document.getElementById('artist');
    const image = document.getElementById('song-img');
    const song = document.getElementById('audioFile');

    title.textContent = currentSong.name;
    artist.textContent = currentSong.artist;
    image.src = currentSong.image;
    song.src = currentSong.source;

    // Play the song
    song.play();

    // Update the currentIndex
    currentIndex = index;
}

const previousSong = document.getElementById('previousSong');
const nextSong = document.getElementById('nextSong');
previousSong.addEventListener('click',()=>{
    currentIndex = (currentIndex - 1 + songsList.length) % songsList.length; // Ensure index stays within bounds
    playSong(currentIndex);
});
nextSong.addEventListener('click',()=>{
    currentIndex = (currentIndex + 1) % songsList.length; // Ensure index stays within bounds
    playSong(currentIndex);
});







const addPlayListButton = document.querySelector('.addPlayListButton');
const addPlayListButtonDiv = document.querySelector('.addPlayListButtonDiv');

const currentPlayList = document.getElementById('currentPlayList');
const allPlayList = document.getElementById('allPlayList');

const playListName = document.getElementById('playListName');
const createPlaylist = document.getElementById('createPlaylist');


addPlayListButtonDiv.addEventListener('click', () => {
    const currentSongName = document.getElementById('title').textContent;
    const allSongsDiv = document.querySelector('all-songs-div');

    const songsDisplayDiv = document.createElement('div');
    songsDisplayDiv.classList.add('songsDisplayDiv');
    allSongsDiv.appendChild(songsDisplayDiv);

    const existingSongs = currentPlayList.querySelectorAll('h3');
    let alreadyExists = false;

    existingSongs.forEach(song => {
        if (song.textContent === currentSongName) {
            alreadyExists = true;
            return;
        }
    });

    if (!alreadyExists) {
        
        const songListItem = document.createElement('h3');
        
        songListItem.classList.add('songNames');
        songsDisplayDiv.appendChild(songListItem);



        songListItem.textContent = currentSongName;
        currentPlayList.appendChild(songListItem);
    }

    
});


// Event listener for adding the current song to the current playlist
addPlayListButton.addEventListener('click', () => {



    const currentSongName = document.getElementById('title').textContent;
    const currentPlayList = document.getElementById('currentPlayList-songs-div');
    
    // Check if the song already exists in the current playlist
    const existingSongs = currentPlayList.querySelectorAll('h3');
    let alreadyExists = false;
    existingSongs.forEach(song => {
        if (song.textContent === currentSongName) {
            alreadyExists = true;
            return;
        }
    });

    if (!alreadyExists) {
        const songListItem = document.createElement('h3');
        songListItem.classList.add('songListItemSongName');
        songListItem.textContent = currentSongName;
        currentPlayList.appendChild(songListItem);
    }




});

// Event listener for creating a new playlist
createPlaylist.addEventListener('click', () => {
    
    const newPlaylistName = playListName.value;
    if (newPlaylistName.trim() !== '') {
        const allPlayList = document.getElementById('allPlayList-songs-div');
        const newPlaylistItem = document.createElement('h3');
        newPlaylistItem.classList.add('songListItemSongName');
        newPlaylistItem.classList.add('songNames')
        newPlaylistItem.textContent = newPlaylistName;
        allPlayList.appendChild(newPlaylistItem);
        playListName.value = ''; // Clear the input field after creating the playlist
    } else {
        alert('Please enter a playlist name.');
    }


});