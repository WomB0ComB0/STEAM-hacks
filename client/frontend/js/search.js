var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;

function speak(){
    recognition.start();
}
recognition.onresult = function(e){
    console.log(e);
    constant = e.results[0][0].transcript;
    console.log(content);
// Text area/input
    document.getElementById("").innerHTML = content;
// How do I make it so that its an event listener 
    if(content == "hi"){
        speech_success();
    }else{
        speech_error();
    }
}