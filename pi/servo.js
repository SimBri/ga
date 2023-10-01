//https://www.npmjs.com/package/pigpio
// const pigpio = require('pigpio');

// const Gpio = pigpio.Gpio

// const { Pins } = require('./pins');

/*
Arduino servo requires with of 1000 to 2000 microseconds
https://erikcornelsen.blogspot.com/2020/11/107-arduino-small-servo-motor-sm-s2309s.html

*/

const Gpio = require('pigpio').Gpio;

const motor = new Gpio(12, {mode: Gpio.OUTPUT});

let pulseWidth = 800;
let step = 1200;
let increment = step;

setInterval(() => {
  motor.servoWrite(pulseWidth);

  pulseWidth += increment;
  if (pulseWidth >= 2000) {
    increment = -step;   
  } else if (pulseWidth <= 1000) {
    increment = step;
  }
}, 1000);
