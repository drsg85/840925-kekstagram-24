const uploadFileForm = document.querySelector('.img-upload__overlay');
const fileChooser = document.querySelector('#upload-file');
const hashTagsInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');
const closeButton = document.querySelector('#upload-cancel');

const clearComment = () => {
  hashTagsInput.innerHTML = '';
  commentInput.innerHTML = '';
};

fileChooser.addEventListener('change', () => {
  uploadFileForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
});

closeButton.addEventListener('click', () => {
  uploadFileForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  fileChooser.value = '';
  clearComment();
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();

    if (document.activeElement !== hashTagsInput && document.activeElement !== commentInput) {
      uploadFileForm.classList.add('hidden');
      document.body.classList.remove('modal-open');
      fileChooser.value = '';
      clearComment();
    }
  }
});

const validateHashTags = () => {
  const tags = hashTagsInput.value
    .trim()
    .toLowerCase()
    .split(' ')
    .filter((tag) => tag);

  let errorMessage = '';
  if (tags.length > 5) {
    errorMessage = 'Вы превысили максимальное количество хэтегов';
  } else if (new Set(tags).size !== tags.length) {
    errorMessage = 'Хэштеги повторяются';
  }

  const tagRegex = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  tags.forEach((tag) => {
    if (!tagRegex.test(tag)) {
      errorMessage = `Хэштег ${tag} невалиден`;
    }
  });

  hashTagsInput.setCustomValidity(errorMessage);
  hashTagsInput.reportValidity();
};

hashTagsInput.addEventListener('input', () => validateHashTags());
