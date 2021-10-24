import { pictureTemplate } from './randomUserCreate.js';
const pictureSmall = pictureTemplate.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');

for (let pictures of pictureSmall) {
    console.log(pictures);
    pictures.onclick = function () {
        bigPicture.classList.remove('hidden');
    }
}

console.log(pictureSmall);
