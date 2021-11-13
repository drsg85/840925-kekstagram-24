const uploadFileForm = document.querySelector('.img-upload__overlay');
const fileChooser = document.querySelector('#upload-file');
const hashTagsInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');
const closeButton = document.querySelector('#upload-cancel');
const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 20;

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
    uploadFileForm.classList.add('hidden');
    document.body.classList.remove('modal-open');
    fileChooser.value = '';
    clearComment();
  }
});

hashTagsInput.addEventListener('input', (evt) => {
  const valueLength = hashTagsInput.value.length;
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

  const tags = evt.target.value.split(' ');
  if (tags.length > 2) {
    hashTagsInput.setCustomValidity('перебор');
  }
  else {
    hashTagsInput.setCustomValidity('');
  }
  // tags.forEach((tag) => {
  //   // Тут проверка для каждого отдельного тэга
  // });

  evt.target.reportValidity();

  if (valueLength < MIN_NAME_LENGTH) {
    hashTagsInput.setCustomValidity(`Ещё ${  MIN_NAME_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    hashTagsInput.setCustomValidity(`Удалите лишние ${  valueLength - MAX_NAME_LENGTH } симв.`);
  } else {
    hashTagsInput.setCustomValidity('');
  }

  hashTagsInput.reportValidity();
});

