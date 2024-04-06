const alert = document.querySelector('.alert');

//1

const taskOne = document.querySelector('.btn-primary');

taskOne.onclick = function() {
    alert.classList.add ('alert-primary');
    alert.textContent = 'A simple primary alert-check it out!';
}

//2

const taskTwo = document.querySelector('.btn-secondary');

taskTwo.addEventListener("click", function() {
    alert.classList.add ('alert-primary');
    alert.textContent = 'A simple secondary alert-check it out!';
});

//3

const taskThree = document.querySelector('.btn-success');

taskThree.addEventListener("mouseover",function() {
    alert.classList.add ('alert-success');
    alert.textContent = 'A simple success alert-check it out!';
});

taskThree.addEventListener("mouseout",function() {
    alert.classList.remove ('alert-success');
    alert.textContent = '';
});

//4

const taskFour = document.querySelector('.btn-danger');

taskFour.addEventListener("focus",function() {
    alert.classList.add ('alert-danger');
    alert.textContent = 'A simple danger alert-check it out';
});

taskFour.addEventListener("focusout",function() {
    alert.classList.remove ('alert-danger');
    alert.textContent = '';
});


//5

const light = document.querySelector('.btn-light');
const dark = document.querySelector('.btn-dark');

function toggleMode () {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')){
        dark.classList.add('hide');
        light.classList.remove('hide');
    } else {
        light.classList.add('hide');
        dark.classList.remove('hide');
    }
} 

light.addEventListener('click', toggleMode);
dark.addEventListener('click', toggleMode);

//6

const info = document.querySelector('.btn-info');

info.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        alert.classList.add('alert-info');
        alert.textContent = 'A simple info alert—check it out!';
    }
});

//7

const taskSeven = document.querySelectorAll('.card');

for (i=0; i<taskSeven.length; i++){
    const cardTitle = taskSeven[i].querySelector('.card-title');
    console.log(cardTitle.textContent);
}

//8


for (let n = 0; n < taskSeven.length; n++){
    let btnAddToCart = taskSeven[n].querySelector('.add-to-cart');
    // console.log(btnAddToCart.textContent);
    btnAddToCart.addEventListener('click', () => {
        let cardTitle = taskSeven[n].querySelector('.card-title');
        console.log(cardTitle.textContent)
    })
}