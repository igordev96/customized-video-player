let video = document.getElementById("video");
let icoPlay = document.getElementById("play");
let count = 0;


setInterval(hasEnded, 500);


function backward(){
    video.currentTime -= 10;
}

function play(){
    if(count%2===0){
        video.play();
        icoPlay.src = "./assets/pause.png";
    } else {
        video.pause();
        icoPlay.src = "./assets/play.png";
    }

    count++;
}

function stop(){
    video.currentTime = 0;
    video.pause();
    icoPlay.src = "./assets/play.png";
    count++;
}

function forward(){
    video.currentTime += 10;
}

function decrease(){
    video.playbackRate -= 0.1;
}

function increase(){
    video.playbackRate += 0.1;
}

function hasEnded(){
    if(video.ended===true){
        stop();
    }
}