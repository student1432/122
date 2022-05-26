screen_width,screen_height = 0;
apple = "";
speak_data = "";
to_number = ""; 
x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload()
{
  apple = "apple.png";
  loadImage(apple);
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 
 to_number = Number(content);

 content = event.results[0][0].transcript;

 if(Number.isInteger(to_number))
 {
  document.getElementById("status").innerHTML = "Started drawing apple: " + content; 
  draw_apple = "set";
 }else
 {
  document.getElementById("status").innerHTML = "The speech has not recognized a number" + content; 
 }
    

}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 createCanvas(screen_width,screen_height-150);
 canvas.position(100,100)
}

function draw() {
  if(draw_apple == "set")
  {
    for(var i = 1; i <= to_number; i++)
    {
      x = Math.floor(math.random() * 700);
      y = Math.floor(math.random() * 400 );
      image(apple, x, y, 50, 50);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
