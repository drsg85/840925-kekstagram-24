import { updatePictureData } from './fullScreenView.js';

const pictureElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const renderPosts = (posts) => {
  updatePictureData(posts);
  const randomUsersFragment = document.createDocumentFragment();

  posts.forEach((post) => {
    const pictureClonedNode = pictureTemplate.cloneNode(true);
    pictureClonedNode.querySelector('.picture__img').src = post.url;
    pictureClonedNode.querySelector('.picture__likes').textContent = post.likes;
    pictureClonedNode.querySelector('.picture__comments').textContent = post.comments.length;
    randomUsersFragment.appendChild(pictureClonedNode);
  });

  pictureElement.appendChild(randomUsersFragment);
};

export { renderPosts };
