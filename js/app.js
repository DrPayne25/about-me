'use strict';

//console.log('Hello World');

let userName = prompt('Welcome to the Alex Payne Quiz what\'s your name?');

//console.log(userName);

alert('Welcome ' + userName + '! Please answer all question with yes/no or y/n');

let answerOne = prompt('Do I live in Lynnwood?').toLocaleLowerCase();

if(answerOne === 'yes' || answerOne === 'y'){
  //console.log(answerOne);
  alert('You are correct! I do live in Lynnwood ' + userName + '!');
}else if (answerOne === 'no' || answerOne === 'n'){
  alert('Incorrect Try again');
}else {
  alert('You could at least try!!!');
}

let answerTwo = prompt('Did I Study at UW for 2 years?').toLocaleLowerCase();

if(answerTwo === 'yes' || answerTwo === 'y'){
  //console.log(answerTwo);
  alert('You are correct! I did study at UW for 2 years ' + userName + '!');
}else if (answerTwo === 'no' || answerTwo === 'n'){
  alert('Incorrect Try again');
}else {
  alert('You could at least try!!!');
}

let answerThree = prompt('Did I work at on a Presidential Campaign at any point?').toLocaleLowerCase();

if(answerThree === 'yes' || answerThree === 'y'){
  //console.log(answerThree);
  alert('You are correct! I did work for a Presidential Campaign between 2018-2019 ' + userName + '!');
}else if (answerThree === 'no' || answerThree === 'n'){
  alert('Incorrect');
}else {
  alert('You could at least try!!!');
}

let answerFour = prompt('Have I played Hearthstone for over 2555 days?').toLocaleLowerCase();

if(answerFour === 'yes' || answerFour === 'y'){
  //console.log(answerFour);
  alert('You are correct! I have played Hearthstone for over 2555 days (or 7 years) ' + userName + '!');
}else if (answerFour === 'no' || answerFour === 'n'){
  alert('Incorrect');
}else {
  alert('You could at least try!!!');
}

let answerFive = prompt('Do I want to be an SRE in the Future?').toLocaleLowerCase();

if(answerFive === 'yes' || answerFive === 'y'){
  //console.log(answerFive);
  alert('You are correct! I do want to be an SRE in the future ' + userName + '!');
}else if (answerFive === 'no' || answerFive === 'n'){
  alert('Incorrect');
}else {
  alert('You could at least try!!!');
}

let finalQuestion = prompt('Did you enjoy the quiz ' + userName + '?').toLowerCase();

if(finalQuestion === 'yes' || finalQuestion === 'y'){
  //console.log(finalQuestion);
  alert('Awesome glad you liked the test ' + userName + '!');
}else if (finalQuestion === 'no' || finalQuestion === 'n'){
  alert('Sorry to hear you didn\'t like the quiz ' + userName + '!');
}else {
  alert('Welp I can\'t help you');
}


