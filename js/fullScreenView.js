let currectPictureData;
const updatePictureData = (data) => {
  currectPictureData = data;
};
const modalWindow = document.querySelector('.big-picture');
const bigPicture = document.querySelector('.big-picture__img');
const bigPictureImg = bigPicture.querySelector('img');
const likes = document.querySelector('.likes-count');
const comments = document.querySelector('.comments-count');
const socialComment = document.querySelector('.social__comments');
const picDesc = document.querySelector('.social__caption');
const closeButton = document.querySelector('.big-picture__cancel');
// const loadMoreButton = document.querySelector('.comments-loader');

const renderComment = (commentsArr) => {
  const fragment = document.createDocumentFragment();

  commentsArr.forEach((comment) => {
    const commentPost = document.createElement('li');
    const commentPostImage = document.createElement('img');
    const commentMessage = document.createElement('p');
    commentPost.classList.add('social__comment');
    commentPostImage.classList.add('social__picture');
    commentMessage.classList.add('social__text');
    commentPost.appendChild(commentPostImage);
    commentPost.appendChild(commentMessage);
    commentPostImage.src = comment.avatar;
    commentPostImage.alt = comment.name;
    commentPostImage.style.width = '35px';
    commentPostImage.style.height = '35px';
    commentMessage.textContent = comment.message;
    fragment.appendChild(commentPost);
  });
  socialComment.appendChild(fragment);
};

const clearSocialComment = () => {
  socialComment.innerHTML = '';
};

// const test = (commentTest) => {
//   const testFragment = bigPictureImg.src;
//   console.log(testFragment);
// };

// let currectCommentData;
// const updateCommentData = (dataa) => {
//   currectCommentData = dataa;
// };

document.querySelector('.pictures').addEventListener('click', (evt) => {
  const picture = evt.target.closest('.picture');
  if (!evt.target.closest('.picture')) {
    return;
  }
  const domPictures = document.querySelectorAll('.picture');
  const pictures = Array.from(domPictures);
  const index = pictures.indexOf(evt.target.closest('.picture'));
  const pictureData = currectPictureData[index];
  document.body.classList.add('modal-open');
  document.querySelector('.big-picture').classList.remove('hidden');
  bigPictureImg.src = pictureData.url;
  likes.textContent = pictureData.likes;
  picDesc.textContent = pictureData.description;
  comments.textContent = pictureData.comments.length;
  currectCommentData = comments.textContent;
  renderComment(pictureData.comments);
});

closeButton.addEventListener('click', () => {
  modalWindow.classList.add('hidden');
  document.body.classList.remove('modal-open');
  clearSocialComment();
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    modalWindow.classList.add('hidden');
    document.body.classList.remove('modal-open');
    clearSocialComment();
  }
});

export { updatePictureData };
