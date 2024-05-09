function speak(letter){
 var audio= document.getElementById('audio');
 var speaker=document.getElementById('volume-up');
 var para= document.getElementById('para');
if(letter == 'a') {
     audio.src='sound/apple.mp3';
     para.innerHTML='Apple';
}
else if(letter == 'b') {
   audio.src = 'sound/ball.mp3'; 
   para.innerHTML='Ball';
}
else if(letter == 'c'){ 
    audio.src = 'sound/cat.mp3';
    para.innerHTML='Cat';
}
else if(letter == 'd') {
    audio.src = 'sound/dog.mp3';
    para.innerHTML='dog';
}
speaker.style.color='black';
audio.play();
 setTimeout(function(){
    speaker.style.color='#ddd';
    para.innerHTML='';
 },1000)
}
