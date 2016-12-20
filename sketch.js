var osc;
var fft;

function setup() {
  createCanvas (800, 600);
 
  osc = new p5.Oscillator ();
  osc.setType ('sawtooth');
  osc.freq(220); //sound wave
  osc.amp (0.4); //amplitude = volume
  osc.start ();
  
  fft = new p5.FFT();
  fft.setInput(osc);
} 
   

function draw() {
  background (0);
  pitch = mouseX;
  osc.freq(pitch);
 
  var spectrum =fft.analyze();
  stroke(255);
  noFill();
  
 beginShape() 
 for(var i = 0; i < spectrum.length; i++){
 var y = map(spectrum [i], 0, 255, height-20, 10);
 //fill (255);
 //ellipse (i*10, y, 5, 5);
 vertex (i*20, y);
 } 
 endShape();
 
  fill (255);
  textSize (20);
  text ("Oscillatior 1" +pitch, 10,50);
  
}
