// TASK 1

let str1 = 'I\'m a string!';
let str2 = "I'm a string!";
// так довжитна однакова 

// TASK 2
let string5 = 'Hello World';
const firstSymbolIndex = string5[0];
const firstSymbolcharAt = string5.charAt(0);

// TASK 3
let str3 = 'Hello Javascript';
const indexOfJ = str3.indexOf('J');
const symbolJ = str3.charAt(indexOfJ);

// TASK 4
const lastSymbol = str3[str3.length - 1];
const lastSymbolCharAt = str3.charAt(str3.length - 1);

// TASK 5
function lastCharVar1(string) {
  if (typeof string !== 'string' || string.trim().length === 0) {
    return 'Please enter correct string for result';
  }

  return `Last symbol of string: ${string[string.length - 1]}`;
}

function lastCharVar2(string) {
  if (typeof string !== 'string' || string.trim().length === 0) {
    return 'Please enter correct string for result';
  }

  return `Last symbol of string: ${string.charAt(string.length - 1)}`;
}

function lastCharVar3(string) {
  if (typeof string !== 'string' || string.trim().length === 0) {
    return 'Please enter correct string for result';
  }

  return `Last symbol of string: ${string.slice(-1)}`;
}

// TASK 6

let a6 = 'When candles are out,';
let b6 = 'all cats are grey.';
const concat = a6.concat(' ').concat(b6);

// TASK 7
let fact = 'Fifteen is the same as';
let a7 = 5;
let b7 = 10;
const result = `${fact} ${a7 + b7}`;
console.log(result);

// TASK 8
let firstName = 'Tom';
let lastName = 'Cat';

function getFullName(firstName,lastName){
    return firstName + " " + lastName;
}
console.log(getFullName(firstName,lastName));

// TASK 9

function greeting(firstName, lastName){
    let greet = "Hello, ";
    let fullSentence = getFullName(firstName,lastName);
    return greet + fullSentence + "!";
}
console.log(greeting(firstName,lastName));


// TASK 10
let template = `<div><h1>${greeting(firstName, lastName)}</h1></div>`;

const div = document.getElementById("new");
div.innerHTML = template;
console.log(template);

// TASK 11
let string1 = '  The name of our game  ';

// Потрібно отримати такі результати
// "The name of our game"
// "The name of our game  "
// "  The name of our game"
const task1 = string1.trim();
const task2 = string1.trimStart();
const task3 = string1.trimEnd();

const phoneNumber = '\t  555-123\n ';
// Потрібно отримати такі результати
// => '555-123'
// => '555-123 \n'
const correctNumber = phoneNumber.trim();
const correctNumber2 = phoneNumber.trimStart().replace(/\\n\s*/g, ' \n');

// TASK 12
let sentence12 = 'Always look on the bright side of life';
const check1 = sentence.search('look up');
const check2 = sentence.search('look on');
const check3 = sentence.includes('look on', 8); // false

// TASK 13
let sentence13 = 'Always look on the bright side of life';
const check4 = sentence.indexOf('l');
const check5 = sentence.indexOf('l', 3);
const check6 = sentence.indexOf('L');

// TASK 14
let sentence14 = 'Always look on the bright side of life';
const searchString = sentence.search('look on the bright side of life');
const searchString2 = sentence.search('Always');
const searchString3 = sentence.search('look');

// TASK 15
const validName = /^[a-z0-9_-]{8,16}$/i;

// TASK 16
function emailCheck(email){
    const validEmail = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;
    let matched = email.match(validEmail);
    if (validEmail.test(email)){
        console.log("Email is valid", matched);
        return true;
    } else {
        console.log("Email is invalid");
        return false;
    }
}
emailCheck("EmailAddress@test.com");

// TASK 17
let sentence17 =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';

function truncateText(string) {
  return string.substring(0, 51) + '...';
}

function truncateText2(string) {
  return string.substr(0, 50) + '...';
}