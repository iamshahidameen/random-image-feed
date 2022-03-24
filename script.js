const UNSPLASH_URL = 'https://source.unsplash.com/random/';
const galleryWrap = document.querySelector('.gallery-wrapper');
const gridRows = 4*5;
for(let i = 1; i<=gridRows; i++) {

    const imgWrap = document.createElement('div');
    imgWrap.classList.add('img-wrapper');
    imgWrap.innerHTML =`
    <img src="https://source.unsplash.com/random/${randomSizeGenerator()}" alt="">
    `

    // galleryWrap.innerHTML = `
    // <div class="img-wrapper">
    //     
    // </div>
    // `
    galleryWrap.appendChild(imgWrap);
}
function randomSizeGenerator(){
    return `${randomNumberGen()}x${randomNumberGen()}`
}
function randomNumberGen(){
   return Math.floor(Math.random()*20 )+300;
}
