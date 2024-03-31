const fruits = 'apple banana cantaloupe blueberries grapefruit';

//1
const fruitsArray = fruits.split(' ');
console.log(fruitsArray);

//2
for (let i = 0; i < fruitsArray.length; i++) {
    console.log(fruitsArray[i]);
}

//3
let a = 0;

while (a < fruitsArray.length) {
    console.log(fruitsArray[a]);
    a++;
}

//4

let b = 0;

do {
    console.log(fruitsArray[b]);
    b++;
} while (b < fruitsArray.length);

//5

for (const fruit of fruitsArray) {
    console.log(fruit);
}

//6

const Numbs = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < Numbs.length; i++) {
    if (Numbs[i] % 2 === 0) {
        console.log(Numbs[i]);
    }
}

//7

const names = ['Batman'];

names.push('Joker');
console.log(names);

//8

names.unshift('Joker');
console.log(names);

//9

let names9 = ['Batman', 'Joker', 'Bane'];
names.unshift('Catwoman');
console.log(names); 

//10

shapeShifters = ['Batman', 'Joker', 'Bane'];

shapeShifters1 = ['Catwoman', ...shapeShifters];
console.log(shapeShifters1);

//11

let superHeroes = ['Batman', 'Joker', 'Bane'];
names.splice(1, 0, 'Catwoman');
console.log(superHeroes);

//12

let Names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
Names.splice(1, 2);
console.log(Names);

//13

let names13 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
let indexCatwoman = names13.indexOf('Catwoman');
let indexJoker = names13.indexOf('Joker');

if (indexCatwoman !== -1 && indexJoker !== -1) {
    names13.splice(indexCatwoman, 1, 'Alfred');
    names13.splice(indexJoker, 1, 'Alfred');
}

console.log(names13);

//14

let names14 = ['Batman', 'Catwoman', 'Joker', 'Bane'];

if (!names14.includes('Alfred')) {
    names14.push('Alfred');
}

console.log(names14);

//15

const names15 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
const index15 = names15.indexOf('Alfred');

if (index15 !== -1) {
    names15.splice(index15, 1);
}

console.log(names15);

