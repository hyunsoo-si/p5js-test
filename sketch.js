var scene;
var radius = 9;
let s;
let moonVid,desertVid,rainVid,wingsVid,riverVid,formulaVid;

function preload() {
  boldScribble = loadFont('assets/Caveat-Bold.ttf');
  regulScribble = loadFont('assets/Caveat-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(0);
  scene = new SceneManager();
  s = new Scribble();
  

  /*
  scene.addScene(Animation1);
  scene.addScene(moon);
  scene.addScene(river);
  scene.addScene(formula);
  scene.addScene(wings);
  scene.addScene(rain);
  scene.addScene(desert);
  scene.addScene(Animation2);
  */

  scene.showScene(Animation1);

}

function draw() {
  scene.draw();
  

}



function moon() {
  
  //translate(windowWidth / 2 - 650, 0)

    background(255);
    moonVid = createVideo('assets/moon.mp4');
    moonVid.position(windowWidth / 2 - 325, 35);
    moonVid.size(650, AUTO);
    moonVid.loop();
        line(-width, 399, width, 399);
        push();
    noStroke();
    fill(0)
   rect(0, 13, 1300, 370);
    pop();
  push()
  stroke(255);
    line(45,13+18,25,28+18);
    line(45,43+18,25,28+18);
  pop();
   push();
  fill(0);
  ellipse(162.5,399,radius);
  ellipse(360,399,radius);
  ellipse(750,399,radius);
  ellipse(980,399,radius);
  
  //textFont('Helvetica');
  textSize(18);
  textLeading(25)
  textAlign(LEFT, TOP);
  let moon2017 ="2017\n4 O'Clock - RM & V\n3'53\""
  text(moon2017,162.5,408)
  
  text ("2018\nMoonchild - RM\n3'25\"", 360,408);
  text ("2019\n풍경 - V\n4'54\"", 750,408);
  text ("2020\nInner Child - V\n3'53\"\n\nMoon - Jin\n3'28\"\n\nMoonlight (저 달) -  Suga\n2'43\"", 980,408);
  
  pop();

  
    this.draw = function(){
    
    if(mouseIsPressed){
      if(dist(mouseX,mouseY,windowWidth / 2 - 650+35,46)<=15){
        Animation1()
        moonVid.pause();
        moonVid.hide();

      }
      
    }
    
  }
}

function river() {
  background(255);
    riverVid = createVideo('assets/river.mp4');
    riverVid.position(windowWidth / 2 - 325, 35);
    riverVid.size(650, AUTO);
    riverVid.loop();
  line(-width, 399, width, 399);
    line(45,13+18,25,28+18);
    line(45,43+18,25,28+18);
  
     push();
  fill(0);
  ellipse(250,399,radius);
  ellipse(630,399,radius);
  ellipse(890,399,radius);
  
  //textFont('Helvetica');
  textSize(18);
  textLeading(25)
  textAlign(LEFT, TOP);
  text("2015\n4 Ma City\n4'18\"",250,408)
  
  text ("2016\nReflection - RM\n3'53\"", 630,408);
  text ("2018\nIntro : Singularity - V\n3'17\"\n\nseoul - RM\n4'36\"", 890,408);
  
  pop();

  
    this.draw = function(){
    
    if(mouseIsPressed){
      if(dist(mouseX,mouseY,windowWidth / 2 - 650+35,46)<=15){
        Animation1()
        riverVid.pause();
        riverVid.hide();

      }
      
    }
    
  }
  
}

function formula() {

  background(255);
    formulaVid = createVideo('assets/formula.mp4');
    formulaVid.position(windowWidth / 2 - 325, 35);
    formulaVid.size(650, AUTO);
    formulaVid.loop();
  line(-width, 399, width, 399);
    push();
    noStroke();
    fill(0)
   rect(650-350, 13, 700, 370);
    pop();
    //rect(30,13,30,30);
    line(45,13+18,25,28+18);
    line(45,43+18,25,28+18);
  
       push();
  fill(0);
  ellipse(250,399,radius);
  ellipse(490,399,radius);

  
  //textFont('Helvetica');
  textSize(18);
  textLeading(25)
  textAlign(LEFT, TOP);
  text("2017\nDNA\n3'43\"\n\nOutro : Her\n3'49\"",250,408)

  text ("2018\nIntro : Love Maze\n3'41\"\n\nSerendipity (Full Length Edition) -Jimin\n4'36\"", 490,408);
  
  pop();

  this.draw = function(){
    
    if(mouseIsPressed){
      if(dist(mouseX,mouseY,windowWidth / 2 - 650+35,46)<=15){
        Animation1()
        formulaVid.pause();
        formulaVid.hide();

      }
      
    }
    
  }
}

function wings() {

  background(255);
    wingsVid = createVideo('assets/wing.mp4');
    wingsVid.position(windowWidth / 2 - 325, 35);
    wingsVid.size(650, AUTO);
    wingsVid.loop();
  line(-width, 399, width, 399);
        push();
    noStroke();
    fill(0)
   rect(650-350, 13, 700, 370);
    pop();
  push();
  stroke(0);
        line(45,13+18,25,28+18);
    line(45,43+18,25,28+18);
  pop();
         push();
  fill(0);
  ellipse(220,399,radius);
  
  ellipse(770,399,radius);
  ellipse(980,399,radius);
  
  //textFont('Helvetica');
  textSize(18);
  textLeading(25)
  textAlign(LEFT, TOP);


  text ("2016\nBegin - JungKook\n3'51\"\n\nAwake - Jin\n3'35\"\n\nA Supplementary Story : You Never Walk Alone \n2'36\"\n\nInterlude : Wings \n3'45\"", 220,408);
  
  text("2019\nBoy With Luv\n3'49\"",770,408)
  text("2020\nInterlude : Shadow - Suga\n4'19\"",980,408)
  
  
  
  
  pop();

    this.draw = function(){
    
    if(mouseIsPressed){
      if(dist(mouseX,mouseY,windowWidth / 2 - 650+35,46)<=15){
        Animation1()
        wingsVid.pause();
        wingsVid.hide();

      }
      
    }
    
  }
}

function rain() {

  background(255);
    rainVid = createVideo('assets/rain.mp4');
    rainVid.position(windowWidth / 2 - 325, 35);
    rainVid.size(650, AUTO);
    rainVid.loop();
  line(-width, 399, width, 399);
            push();
    noStroke();
    fill(0)
   rect(650-350, 13, 700, 370);
    pop();
        line(45,13+18,25,28+18);
    line(45,43+18,25,28+18);
  
           push();
  fill(0);

  ellipse(220,399,radius);
  ellipse(490,399,radius);
  
  //textFont('Helvetica');
  textSize(18);
  textLeading(25)
  textAlign(LEFT, TOP);
  
  text("2016 \nLost\n4'01\"",220,408)
  text("2018\nForever Rain - RM\n4'31\"",490,408)
  
  
  
  
  pop();

    this.draw = function(){
    
    if(mouseIsPressed){
      if(dist(mouseX,mouseY,windowWidth / 2 - 650+35,46)<=15){
        Animation1()
        rainVid.pause();
        rainVid.hide();

      }
      
    }
    
  }
}

function desert() {

  background(255);
    desertVid = createVideo('assets/desert.mp4');
    desertVid.position(windowWidth / 2 - 325, 35);
    desertVid.size(650, AUTO);
    desertVid.loop();  
  line(-width, 399, width, 399);
            push();
    noStroke();
    fill(0)
   rect(650-350, 300, 700, 80);
    pop();
        line(45,13+18,25,28+18);
    line(45,43+18,25,28+18);
  
    
           push();
  fill(0);

  ellipse(490,399,radius);
  ellipse(770,399,radius);
  
  //textFont('Helvetica');
  textSize(18);
  textLeading(25)
  textAlign(LEFT, TOP);
  
  text("2018 \nEuphoria - JungKook\n3'48\"",490,408)
  text("2019\nMake It righ\n3'46\"",770,408)
  
  
  
  
  pop();


    this.draw = function(){
    
    if(mouseIsPressed){
      if(dist(mouseX,mouseY,windowWidth / 2 - 650+35,46)<=15){
        //scene.showScene(Animation1);
        Animation1()

        desertVid.pause();
        desertVid.hide();
        

      }
      
    }
    
  }
}






