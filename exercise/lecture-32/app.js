const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></stan></strong></p>
`;

async function fetchData(url) {
    return await fetch(url, {
        method: 'GET',
        headers: { "Content-Type": "application/json" }
    })
        .then((response) => {
            const posts = JSON.parse(response);
            let result = "";
            posts.forEach((item) => {
                result += template(item);
            });
            document.getElementById("blog").innerHTML = result;
        })

        .then(() => {
            const users = document.querySelectorAll(".author");
            users.forEach((user) => {
                  fetch( 
                    `https://jsonplaceholder.typicode.com/posts/${user.dataset.id}`
                ).then((response) => {
                    let userName = JSON.parse(response);
                    console.log(userName.name);
                    user.textContent = userName.name;
                });
            });
        });
}