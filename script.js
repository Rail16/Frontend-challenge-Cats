'use strict';


init();

const header_main = document.querySelector('.main__header');
const load__more = document.querySelector('.load__more');

header_main.addEventListener('click', e => {
    const header_all = document.querySelector('.all__cats');
    const header_favourite = document.querySelector('.favourite__cats');
    if (e.target == header_all) {
        console.log('ok');
    } else {
        console.log('bad');
    }
})

load__more.addEventListener('click', e => {
    getData();
})


function init() {
    const header = document.querySelector('.all__cats');
    header.classList.add('header__active');
    getData();
}

async function getData() {
    const url = 'https://api.thecatapi.com/v1/images/search?limit=15&page=1&order=DESC';
    await fetch(url, {
        method: "GET",
        withCredentials: true,
        header: {
            "x-api-key": "29ad4734-405d-4845-b2e0-7f050e8b28b9",
            "Content-Type": "application/json"
        }
    })
    .then(resp => resp.json())
    .then((data) => {
        console.log(data);
        const items = document.querySelector('.cat__items');
        // for (let key in data) {
        //     items.innerHTML += `<div class="cat__item" id="${data[key].id}"><img src="${data[key].url}" alt=""></div>`;
        // }
        data.forEach(item => {
            items.innerHTML += `<div class="cat__item" id="${item.id}"><img src="${item.url}" alt=""></div>`;
        })
    })
    .catch(function(error) {
        console.log(error);
    });
}
const arr = ['', '', ''];
arr.push();
let template = '';
arr.forEach(item => {
    template += item;
})

[{id: 'id', url: 'url'}, {}]