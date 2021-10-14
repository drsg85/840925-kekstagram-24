import { getRandomIntInclusive } from './utils/getRandomIntInclusive';

const MESSAGES_TEMP = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Лица у людей на фотке перекошены, как будто их избивают.'];
const NAMES_TEMP = ['Шерлок', 'Дик', 'John Doe', 'Агент Смит'];
const DESC = ['Здесь будет одно описание фотографии', 'Здесь будет другое описание фотографии'];

const generatedIds = new Set();
const generateId = () => {
  let id = getRandomIntInclusive(1, 1000);
  while (generatedIds.has(id)) {
    id = getRandomIntInclusive(1, 1000);
  }
  generatedIds.add(id);
  return id;
};

const createMessage = () => ({
  id: generateId(),
  avatar: `img/avatar${getRandomIntInclusive(1, 6)}.svg`,
  message: MESSAGES_TEMP[getRandomIntInclusive(0, MESSAGES_TEMP.length - 1)],
  name: NAMES_TEMP[getRandomIntInclusive(0, NAMES_TEMP.length - 1)],
});

const createMessagesArray = (amount) => {
  const postMessages = [];

  for (let i = 0; i < amount; i++) {
    postMessages.push(createMessage(i + 1));
  }
  return postMessages;
};

const createPost = (id) => ({
  id: id,
  url: `photos/${getRandomIntInclusive(1, 25)}.jpg`,
  description: DESC[getRandomIntInclusive(0, DESC.length - 1)],
  likes: getRandomIntInclusive(15, 200),
  comments: createMessagesArray(getRandomIntInclusive(2, 20)),
});

const createPostsArray = (amount) => {
  const postsArray = [];

  for (let i = 0; i < amount; i++) {
    postsArray.push(createPost(i + 1));
  }
  return postsArray;
};

console.log(createPostsArray(2));
