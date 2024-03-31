const classes = ['first', 'second', 'third', 'fourth'];

//1
const h1Elements = document.getElementsByTagName('h1');

console.log("Тип отриманого об'єкту:", typeof h1Elements);
console.log("Розмір отриманого об'єкту:", h1Elements.length);

for (let i = 0; i < h1Elements.length; i++) {
  console.log("Елемент", i + 1 + ":", h1Elements[i]);
}

//2
const p1Element = document.querySelector('#p1');

p1Element.style.backgroundColor = "gold";

//3
const p2Element = document.querySelector('#p2');
document.querySelector('#p2').style.cssText = "background-color: gold; color: blue; font-size: 2rem;";

//4
const p3Element = document.querySelector('#p3');

p3Element.classList.add('third');

//5
const p4Element = document.querySelector('#p4');

p4Element.classList.add('fourth', 'border');

//6
const containerElements = document.querySelectorAll('.container');

for (let i = 0; i < containerElements.length; i++) {
  const firstElement = containerElements[i].querySelector(':first-child');
  console.log("Перший елемент для елемента з класом container", i + 1 + ":", firstElement);
}

//7
const containerElements7 = document.querySelectorAll('.container');

// Виводимо вміст першого елементу для кожного елемента з класом container
for (let i = 0; i < containerElements.length; i++) {
  const firstChildContent7 = containerElements[i].querySelector(':first-child').textContent;
  console.log("Вміст першого елементу для елемента з класом container", i + 1 + ":", firstChildContent7);
}

//8ів
const headers = document.querySelectorAll('.container header');

const classes8 = ['first', 'second', 'third', 'fourth'];

for (let i = 0; i < headers.length; i++) {
    const id = headers[i].id;
    const classList = headers[i].classList;

    const newTag = document.createElement(`h${i + 1}`);
    newTag.textContent = headers[i].textContent;

    if (id) newTag.id = id;
    classList.forEach(className => newTag.classList.add(className));

    headers[i].parentNode.replaceChild(newTag, headers[i]);
}

for (let i = 0; i < headers.length; i++) {
    headers[i].classList.add(classes8[i]);
}
