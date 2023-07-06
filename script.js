console.log("Welcome to Spotify");
//initialize the variables
let songindex=0;
let audioElement = new Audio('zarasamp3.mp3');
let masterplay = document.getElementById('masterplay');
let Myprogressbar = document.getElementById('Myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    {songname:"Zara Sa",filepath:"zarasamp3.mp3" ,coverpath:"kkcp.jpeg"},
    {songname:"Dil Ibadat",filepath:"Dilbadatmp3.mp3" ,coverpath:"kkcp.jpeg"},
    {songname:"Labon Ko",filepath:"Labonkomp3.mp3" ,coverpath:"kkcp.jpeg"},
    {songname:"Ajab Si",filepath:"Ajabsimp3.mp3" ,coverpath:"kkcp.jpeg"},
    {songname:"Teri Yaadon Mein",filepath:"Teriyaadonmeinmp3.mp3" ,coverpath:"kkcp.jpeg"},
    {songname:"Kya Mujhe Pyar Hai",filepath:"KyaMujhePyaarHaimp3.mp3" ,coverpath:"kkcp.jpeg"},
]

songitems.forEach((element,i)=>{
   element.getElementByTagName('img')[0].src = songs[i].coverpath;
   element.getElementsByClassName('songname')[0].innerText = songs[i].songname;
})

//audioElement.play();

//handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 0;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
    }
})

//listen to events
Myprogressbar.addEventListener('timeupdate',()=>{
    //update seekbar
    progress = parseInt((udioElement.currentTime/audioElement.duration)* 100);
    Myprogressbar.value = progress;
}) 
Myprogressbar.addEventListener('change',()=>{
  audioElement.currentTime = Myprogressbar.value*audioElement.duration/100;
})

const makeallplay = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',()=>{
      console.log(e.target);
      makeallplay(); 
      songindex = parseInt(e.target.id);
      e.target.classList.remove('fa-circle-play');
      mastersongname.innerText = songs[songindex].songname;
      e.target.classList.add('fa-circle-pause');
      audioElement.src = 'songindex+1.mp3';
      audioElement.currentTime = 0;
      audioElement.play();
      masterplay.classList.remove('fa-circle-play');
      masterplay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=5){
        songindex = 0;
    }
    else {
    songindex += 1;
    }
    audioElement.src = 'songindex+1.mp3';
    mastersongname.innerText = songs[songindex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex = 0;
    }
    else {
    songindex -= 1;
    }
    audioElement.src = 'songindex+1.mp3';
    mastersongname.innerText = songs[songindex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
}) 