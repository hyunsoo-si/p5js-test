function Animation1() {

    background(255);
    push();
    translate(windowWidth / 2 - 650, 0)
    stroke(0);
    strokeWeight(0.6);
    s.scribbleLine(0, 133, 1300, 133);
    s.scribbleLine(162.5, 0, 162.5, 798);
    s.scribbleLine(406.25, 0, 406.25, 798);
    s.scribbleLine(731.25, 0, 731.25, 798);
    s.scribbleLine(1056.25, 133, 1056.25, 798);
    s.scribbleLine(0, 266, 162.5, 266);
    s.scribbleLine(406.25, 266, 1300, 266);
    s.scribbleLine(-width, 399, width, 399);
    s.scribbleLine(0, 600, 1300, 600);
    s.scribbleLine(568.75, 399, 568.75, 798);
    pop();
print(width);
    push();
    translate(windowWidth / 2 - 650, 0)
    ellipseMode(CENTER);
    fill(10);
    noStroke();
    ellipse(406.25, 133, radius);
    s.scribbleEllipse(406.25, 133, radius - 0.8, radius - 1);
    ellipse(162.5, 399, radius);
    s.scribbleEllipse(162.5, 399, radius - 0.8, radius - 1);

    ellipse(731.25, 266, radius);
    s.scribbleEllipse(731.25, 266, radius - 0.8, radius - 1);
    ellipse(568.75, 600, radius);
    s.scribbleEllipse(568.75, 600, radius - 1, radius - 0.8);
    ellipse(1056.25, 133, radius);
    s.scribbleEllipse(1056.25, 133, radius - 0.8, radius - 1);
    ellipse(1056.25, 399, radius);
    s.scribbleEllipse(1056.25, 399, radius - 0.8, radius - 1);
    pop();

push();
    translate(windowWidth / 2 - 650, 0)
    textFont(regulScribble);
    textSize(23);
    textAlign(LEFT, TOP);
    text("MOON", 390, 133 + 5);

    textSize(25);
    text("Universe", 168.5, 363);
    push();
    s.scribbleFilling([166, 163, 240, 240], [372, 385, 385, 373], 0.6, 90);
    pop();
    textSize(28);
    text("Formula", 166.5 + 2, 385);

    text('Wings', 733, 265);

    push();
    textSize(30);
    translate(730 - 162.5, 605 - 32);
    rotate(radians(-20));
    text('river', 0, 0);

    pop();

    push();
    textSize(24);
    translate(1057, 135);
    rotate(radians(80));
    text('RAIN', 0, 0);
    pop();

    text('desert', 1057, 400);
    print(2);
  pop();


  
  this.draw = function() {

    translate(windowWidth / 2 - 650, 0)
    if (mouseIsPressed) {
      //print(mouseX,mouseY);
      // print(width,height)
      if (dist(mouseX - windowWidth / 2 + 650, mouseY, 406.25, 133) <= radius) {
        //scene.showScene(moon);
        moon();
      
      }
      if (dist(mouseX - windowWidth / 2 + 650, mouseY, 568.75, 600) <= radius) {
        river();
      }
      if (dist(mouseX - windowWidth / 2 + 650, mouseY, 162.5, 399) <= radius) {
        formula();

      }
      if (dist(mouseX - windowWidth / 2 + 650, mouseY, 731.25, 266) <= radius) {
        wings();
      }
      if (dist(mouseX - windowWidth / 2 + 650, mouseY, 1056.25, 133) <= radius) {
        rain();
      }
      if (dist(mouseX - windowWidth / 2 + 650, mouseY, 1056.25, 399) <= radius) {
        desert();
      }
      



    }
 //rint(3);
  }
}