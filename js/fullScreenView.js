let currectPictureData;
const updatePictureData = (data) => {
  currectPictureData = data;
};

const bigPicture = document.querySelector('.big-picture__img');
const bigPictureImg = bigPicture.querySelector('img');
const likes = document.querySelector('.likes-count');
const comments = document.querySelector('.comments-count');
const socialComment = document.querySelector('.social__comments');

const renderComment = (commentsArr) => {
  const fragment = document.createDocumentFragment();

  commentsArr.forEach((comment) => {
    const commentPost = document.createElement('li');
    const commentPostImage = document.createElement('img');
    commentPost.classList.add('social__comment');
    commentPostImage.classList.add('social__picture');
    commentPost.appendChild(commentPostImage);
    commentPostImage.src = comment.avatar;
    fragment.appendChild(commentPost);
    console.log(comment);
  });
  socialComment.appendChild(fragment);
};

document.querySelector('.pictures').addEventListener('click', (evt) => {
  const picture = evt.target.closest('.picture');
  const domPictures = document.querySelectorAll('.picture');
  const pictures = Array.from(domPictures);
  const index = pictures.indexOf(evt.target.closest('.picture'));
  const pictureData = currectPictureData[index];
  document.querySelector('.big-picture').classList.remove('hidden');
  bigPictureImg.src = pictureData.url;
  likes.textContent = pictureData.likes;
  comments.textContent = pictureData.comments.length;
  renderComment(pictureData.comments);
  // console.log(pictureData);
});

export { updatePictureData };
