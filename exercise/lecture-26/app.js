//  1
function calculate(operation, initialValue, numbers) {
  let result = initialValue;
  for (const number of numbers) {
    result = operation(result, number);
  }
  return result;
}

function sum(n1, n2) {
  return n1 + n2;
}
function multiply(n1, n2) {
  return n1 * n2;
}
console.log(calculate(sum, 0, [1, 2, 4])); // => 7
console.log(calculate(multiply, 1, [1, 2, 4])); // => 8

//  2
let student_names = ["Wick", "Malcolm", "Smith"];
student_names.map((item, index, array) => {
  console.log(`name: ${item} | index: ${index} | array: [${array}]`);
});

//  3
let students_information = [
  { name: "Wick", degree: 375 },
  { name: "Malcolm", degree: 405 },
  { name: "Smith", degree: 453 },
];
const maxDegree = 600; // Максимальна оцінка

const result = students_information.map((student) => {
  const percentage = (student.degree / maxDegree) * 100; 
  return { ...student, percentage }; 
});
console.log(result);

//  4

const arr = [1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];
const flattenedArray = arr.reduce((accumulator, currentValue) => {
  if (Array.isArray(currentValue)) {
    return accumulator.concat(currentValue);
  } else {
    accumulator.push(currentValue);
    return accumulator;
  }
}, []);
console.log(flattenedArray);

// 5
Array.prototype.upperCase = function () {
  let i;
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};
function myFunc() {
  let arr = ["Algorithm", "Data Structure", "Operating System", "html"];
  arr.upperCase();
  console.log(arr);
}
myFunc(); // [ 'ALGORITHM', 'DATA STRUCTURE', 'OPERATING SYSTEM', 'HTML' ]