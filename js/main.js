import './createPost.js';
import './fullScreenView.js';
import { createPostsArray } from './createPost.js';
import { renderPosts } from './randomUserCreate.js';

const data = createPostsArray(25);
renderPosts(data);
