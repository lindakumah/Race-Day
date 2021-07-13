let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let ageOfRunner = 25;

if (registeredEarly && ageOfRunner > 18 ) {
  raceNumber+= 1000;
}

if (registeredEarly && ageOfRunner > 18) {
  console.log(`Runner ${raceNumber} will race at 9:30am`);
}else if (!registeredEarly && ageOfRunner > 18) {
  console.log(`Runner ${raceNumber} will race at 11:00am`);
}else if (ageOfRunner < 18) {
  console.log(`Runner ${raceNumber} will race at 12:30pm`);
}else{
  console.log('See Registration Desk')
}