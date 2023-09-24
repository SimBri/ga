const Gpio = require('onoff').Gpio;
const button = new Gpio(24, 'in', 'rising', {debounceTimeout: 1000});

Gpio.accessible ?  console.log("GPIO Present") : console.log("GPIO not present");

const TIMEOUT_MS = 30000;
const timeOut = setTimeout(timeOutError, TIMEOUT_MS);

let counter = 0;
const counterInterval = setInterval(() => {
  console.log("Waiting... " + ++counter);
}, 1000);


function timeOutError(){
  console.error("Button not pressed before timeout");
  button.unexport();
  clearInterval(counterInterval);
  process.exitCode = 1;
}

if (Gpio.accessible)
button.watch((err, value) => {
  if (err) {
    throw err;
  }

  clearTimeout(timeOut); 
  clearInterval(counterInterval);
  button.unexport();
  console.log("Button pressed");

    
});



process.on('SIGINT', _ => {
  led.unexport();
  button.unexport();
});

console.log("Wating for button to be pressed ");
console.log(`Timeoutset to: ${TIMEOUT_MS} milliseconds`);