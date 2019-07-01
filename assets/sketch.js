// Bouncing DVD Logo
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/131-bouncing-dvd-logo.html
// https://youtu.be/0j86zuqqTlQ
// https://editor.p5js.org/codingtrain/sketches/Ya1K1ngtFk

let x;
let y;

let xspeed;
let yspeed;

let companyLogo;
let parliament;
let dvd;
// let setoflogos;
let i = 0;

let setoflogos = [parliament, dvd];


function preload() {
  dvd = loadImage("./assets/dvd_logo.png");
  parliament = loadImage("./assets/uk_parliament_logo_white.svg");
}




function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(width);
  y = random(height);
  xspeed = 2;
  yspeed = 2;
  companyLogo = dvd;

}

// console.log(array)


function swapImage() {
  console.log(companyLogo);
  console.log(setoflogos[0]);
  companyLogo = setoflogos[i];
i = i+1;
if(i >= setoflogos.length){
  i=0;
};
}


function draw() {

  background(0);
  // rect(x, y, 80, 60);
  // Draw the DVD logo
  image(companyLogo, x, y);


  x = x + xspeed;
  y = y + yspeed;

  if (x + dvd.width >= width) {
    xspeed = -xspeed;
    x = width - dvd.width;
    swapImage();
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
    swapImage();
  }

  if (y + dvd.height >= height) {
    yspeed = -yspeed;
    y = height - dvd.height;
    swapImage();
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
    swapImage();
  }
}
