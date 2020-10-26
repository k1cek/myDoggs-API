import '../sass/style.scss';

const pic = document.querySelector('.featured-dog img');
const picBgd = document.querySelector('.featured-dog__background');
const dogApi = 'https://dog.ceo/api/';

function randomDogs() {
    return fetch(`${dogApi}breeds/image/random`)
    .then(resp => resp.json())
    .then(data => data.message)
}

function selecterBreed(breed) {
    return fetch(`${dogApi}breed/${breed}/images/random`)
    .then(resp => resp.json())
    .then(data => data.message)
}

function allBreeds() {
    return fetch(`${dogApi}breeds/list/all`)
    .then(resp => resp.json())
    .then(data => data.message)
}

// randomDogs()
// .then(img => pic.setAttribute('src', img))

randomDogs() 
    .then(img => {
        pic.setAttribute('src', img);
        picBgd.style.background = `url("${img}")`;}
    )