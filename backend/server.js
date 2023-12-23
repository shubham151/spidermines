// //server or Server.js
// const PORT = 3000;
// const express = require('express');
// const server = express();
// const bodyParser = require('body-parser');
// // const addProduct = require('./src/routes/addProduct-route');
// const shopRoute = require('./src/routes/shop-route');
// const addProduct = require('./src/routes/addProduct-route');


// // const routes = require('./src/routes/index');
// //Use allows us to add new middleware function

// //Middleware 1
// server.use(bodyParser.urlencoded({extended: false}));
// server.use((req, res, next) => {
//     console.log("Time: ",Date.now());
//     next();  //Allows the request to move to next middleware
// });


// //Middleware 2
// server.use(shopRoute)
// server.use(addProduct)


// server.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// });

// //jwt token


const express = require('express');
const bodyParser = require('body-parser');

const { getStoredPosts, storePosts } = require('./data/posts');

const server = express();

server.use(bodyParser.json());

server.use((req, res, next) => {
  // Attach CORS headers
  // Required when using a detached backend (that runs on a different domain)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

server.get('/posts', async (req, res) => {
  const storedPosts = await getStoredPosts();
  // await new Promise((resolve, reject) => setTimeout(() => resolve(), 1500));
  res.json({ posts: storedPosts });
});

server.get('/posts/:id', async (req, res) => {
  const storedPosts = await getStoredPosts();
  const post = storedPosts.find((post) => post.id === req.params.id);
  res.json({ post });
});

server.post('/posts', async (req, res) => {
  const existingPosts = await getStoredPosts();
  const postData = req.body;
  const newPost = {
    ...postData,
    id: Math.random().toString(),
  };
  const updatedPosts = [newPost, ...existingPosts];
  await storePosts(updatedPosts);
  res.status(201).json({ message: 'Stored new post.', post: newPost });
});

server.listen(8080);