const Gpio = require('onoff').Gpio;
const button = new Gpio(24, 'in', 'rising', {debounceTimeout: 1000});

Gpio.accessible ?  console.log("GPIO Present") : console.log("GPIO not present");

const TIMEOUT_MS = 15000;
const timeOut = setTimeout(timeOutError, TIMEOUT_MS);



function timeOutError(){
  console.error("Button not pressed before timeout");
  process.exitCode = 1;
  button.unexport();
}

if (Gpio.accessible)
button.watch((err, value) => {
  if (err) {
    throw err;
  }

  clearTimeout(timeOut); 
  button.unexport();
  console.log("Button pressed");

    
});

process.on('SIGINT', _ => {
  led.unexport();
  button.unexport();
});

exit => {
  
}

console.log("Wating for button to be pressed ");
console.log(`Timeoutset to: ${TIMEOUT_MS} milliseconds`);