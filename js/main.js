const btn = document.querySelector('.take-photo');
const image = document.querySelector('img');
const url = 'https://dog.ceo/api/breeds/image/random';

function getPhoto(){
    fetch(url)
    .then(res => res.json())
    .then(res => {
        image.setAttribute('src', res.message);
        image.style.width = '500px';
        image.style.height = '500px';
    })
}
window.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        getPhoto();
    }else{
        console.log(`Maybe click 'Enter' :D`);
    }
})
btn.addEventListener('click', getPhoto);
getPhoto();