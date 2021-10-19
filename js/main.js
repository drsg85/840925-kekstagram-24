import './createPost.js';
import { createPostsArray } from './createPost.js';
import { renderPosts } from './randomUserCreate.js';

const data = createPostsArray(25);
renderPosts(data);
