let playbtn=document.getElementById("play-btn");
let video=document.querySelector(".video");
let progress=document.querySelector(".progress-bar");
let progressrange=document.querySelector(".progress-range");
let isvideoplay=false;

function playvideoorpause() {
    if (!isvideoplay) {
        video.play();
        isvideoplay=true;
        playbtn.classList.replace("fa-play","fa-pause");
    }else{
        video.pause();
        isvideoplay=false;
        playbtn.classList.replace("fa-pause","fa-play");
    }
}
function progressbar(event) {
  
    progress.style.cssText = `width:${(this.currentTime/event.target.duration)*100}%`;
    
 
}
function progressseek(event) {
     
  let currentvalue = (event.offsetX/event.target.clientWidth)*video.duration;
  console.log(currentvalue);
  video.currentTime =currentvalue;
}
playbtn.addEventListener('click',playvideoorpause);
video.addEventListener('click',playvideoorpause);
video.addEventListener('timeupdate',progressbar);
progressrange.addEventListener('click',progressseek);





document.body.onekeyup = function (e) {
if(e.key ==="" ||e.code ===  "space"||e.keyCode ===32){

    if (!isvideoplay) {
        video.play();
        isvideoplay=true;
        playbtn.classList.replace("fa-play","fa-pause");
    }else{
        video.pause();
        isvideoplay=false;
        playbtn.classList.replace("fa-pause","fa-play");
    }
}    
}


