'use strict';

//console.log('Hello World');

let userName = prompt('Welcome to the Alex Payne Quiz what\'s your name?');
let amountCorrect = 0;

//console.log(userName);

alert('Welcome ' + userName + '! Please answer all question with yes/no or y/n');


function questionOne(){
  let answerOne = prompt('Do I live in Lynnwood?').toLocaleLowerCase();
  if(answerOne === 'yes' || answerOne === 'y'){
    //console.log(answerOne);
    alert('You are correct! I do live in Lynnwood ' + userName + '!');
    amountCorrect = amountCorrect +1;
  }else if (answerOne === 'no' || answerOne === 'n'){
    alert('Incorrect Try again');
  }else {
    alert('You could at least try!!!');
  }
}
questionOne();

function questionTwo(){
  let answerTwo = prompt('Did I Study at UW for 2 years?').toLocaleLowerCase();
  if(answerTwo === 'yes' || answerTwo === 'y'){
    //console.log(answerTwo);
    alert('You are correct! I did study at UW for 2 years ' + userName + '!');
    amountCorrect = amountCorrect + 1;
  }else if (answerTwo === 'no' || answerTwo === 'n'){
    alert('Incorrect Try again');
  }else {
    alert('You could at least try!!!');
  }
}
questionTwo();

function questionThree(){
  let answerThree = prompt('Did I work at on a Presidential Campaign at any point?').toLocaleLowerCase();
  if(answerThree === 'yes' || answerThree === 'y'){
    //console.log(answerThree);
    alert('You are correct! I did work for a Presidential Campaign between 2018-2019 ' + userName + '!');
    amountCorrect = amountCorrect + 1;
  }else if (answerThree === 'no' || answerThree === 'n'){
    alert('Incorrect');
  }else {
    alert('You could at least try!!!');
  }
}
questionThree();

function questionFour(){
  let answerFour = prompt('Have I played Hearthstone for over 2555 days?').toLocaleLowerCase();
  if(answerFour === 'yes' || answerFour === 'y'){
    //console.log(answerFour);
    alert('You are correct! I have played Hearthstone for over 2555 days (or 7 years) ' + userName + '!');
    amountCorrect = amountCorrect + 1;
  }else if (answerFour === 'no' || answerFour === 'n'){
    alert('Incorrect');
  }else {
    alert('You could at least try!!!');
  }
}
questionFour();

let answerFive = prompt('Do I want to be an SRE in the Future?').toLocaleLowerCase();

if(answerFive === 'yes' || answerFive === 'y'){
  //console.log(answerFive);
  alert('You are correct! I do want to be an SRE in the future ' + userName + '!');
  amountCorrect = amountCorrect + 1;
}else if (answerFive === 'no' || answerFive === 'n'){
  alert('Incorrect');
}else {
  alert('You could at least try!!!');
}

// Add a 6th Question with a prompt and ask them to enter a number
/*after your first for statement add a prompt that would be used as a catch all prompt that would be the only one*/
// Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// Indicates through an alert if the guess is “too high” or “too low”.
// It should give the user exactly four opportunities to get the correct answer.
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.
let questionSix = +prompt(`I'm thinking of a number between 0-100 can you guess what it is ${userName}? Please enter a number between 0-100`);
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(questionSix);
console.log(randomNumber);
const correctAnswerGuess = randomNumber;

for ( let i = 3; i >= 0; i--){
  if(questionSix === correctAnswerGuess){
    //console.log(`Wow you got it congrats ${userName}`);
    alert(`Wow you got it congrats ${userName}!`);
    amountCorrect = amountCorrect + 1;
    break;
  // }if (i === 0){
  //   alert(`You've exceed the maximum number of attempts. The correct answer was ${correctAnswerGuess} ${userName}!`);
  //   break;
  }else if (questionSix > randomNumber && i > 1){
    //console.log(`Bit to high on that one ${userName}!`);
    questionSix = +prompt(`Bit to high on that one ${userName}! Please Try again`);
  }else if (questionSix < randomNumber && i > 1){
    //console.log(`Bit to low on that one ${userName}!`);
    questionSix = +prompt(`Bit to low on that one ${userName}! Please Try again`);
  }else if (questionSix > randomNumber && i === 1){
    //console.log(`Bit to high on that one ${userName}!`);
    questionSix = +prompt(`Bit to high on that one ${userName}! Last attempt before we give you the answer!`);
  }else if (questionSix < randomNumber && i === 1){
    //console.log(`Bit to low on that one ${userName}!`);
    questionSix = +prompt(`Bit to low on that one ${userName}! This is your Last attempt before we give you the answer!`);
  }else if (i === 0){
    alert(`You've exceed the maximum number of attempts. The correct answer was ${correctAnswerGuess} ${userName}!`);
    break;
  }
}
// Add a 7th question that has multiple possible correct answers that are stored in an array.
let questionSeven = prompt(`Hold on to your pants ${userName} this one is going to be a bit tricky! Can you name a member of the band N Sync?`).toUpperCase();
let questionSevenAnswer = ['JUSTIN', 'JUSTIN TIMBERLAKE', 'JC', 'JC CHASEZ', 'CHRIS', 'CHRIS KIRKPATRICK', 'JOEY', 'JOEY FATONE', 'LANCE', 'LANCE BASS'];
// Give the user 6 attempts to guess the correct answer.
for (let userAttempts = 0; userAttempts <= 6; userAttempts++){
  for (let sevenAnswers = 0; questionSevenAnswer.length <= 9; sevenAnswers++)
    if (questionSeven !== sevenAnswers && userAttempts < 4){
      prompt(`Hey, ${userName} That wasn't quite right could I have you try that again for me? Hint: Try looking at the nSync wikipedia page for the answer!`);
    }else if (questionSeven !== sevenAnswers && userAttempts === 5){
      questionSeven = prompt(`Hey, ${userName} That wasn't quite right could I have you try that again for me? This will be your last attempt before we give you the answers!`);
    }else if(questionSeven === sevenAnswers && userAttempts === 0){
      alert(`Congrats ${userName} you got this on your first try! Here are all the possible answers ${questionSevenAnswer}`);
      amountCorrect = amountCorrect + 1;
      break;
    }else if(questionSeven === sevenAnswers){
      alert(`Congrats ${userName} you got this the right answer! Here are all the possible answers ${questionSevenAnswer}`);
      amountCorrect = amountCorrect + 1;
      break;
    }else if (userAttempts === 6){
      alert(`I guess you don't like nSync ${userName}? The correct answers were ${questionSevenAnswer}`);
      break;
    }
}
alert(`Hey ${userName} you to ${amountCorrect}/7`);
