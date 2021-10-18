import { createPostsArray } from './createPost.js';

const pictureElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const randomUsers = createPostsArray(1);
const randomUsersFragment = document.createDocumentFragment();

randomUsers.forEach((post) => {
  pictureTemplate.querySelector('.picture__img').src = post.url;
  pictureTemplate.querySelector('.picture__likes').textContent = post.likes;
  pictureTemplate.querySelector('.picture__comments').textContent = post.comments.length;
  randomUsersFragment.appendChild(pictureTemplate);
});

pictureElement.appendChild(randomUsersFragment);
