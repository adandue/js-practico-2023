const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.querySelector('.parrafo');
const parrafoid = document.querySelector('#parrafoid');
const input = document.querySelector('input');

console.log(h1);

console.log({
    h1,
    p,
    parrafo,
    parrafoid,
    input,
});

h1.innerHTML = 'Patito <br> Feo'
// h1.innerText = 'Patito <br> Feo'
// h1.getAttribute('class');
// h1.setAttribute('class', 'title');

h1.classList.add('title');
// h1.classList.remove('title');
// h1.classList.toggle('title');
// h1.classList.contains('title');

input.value = "456";

const imagen = document.createElement('img');
imagen.classList.add('modal');
imagen.setAttribute('src', 'https://1.bp.blogspot.com/-Qll6PgrKH5M/XR-IXCsRD3I/AAAAAAAADs8/rUgWEx4ZAHglZuajSVCHpPRvk6mhmO6BgCLcBGAs/s1600/C10320046.jpg');

console.log(imagen);

parrafoid.appendChild(imagen);
