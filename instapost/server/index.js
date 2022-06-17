const express = require('express');
// const routes = require('../database/routes.js');
const Post = require('../database/Post.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));


app.get('/api/posts', (req, res) => {
  console.log('request made it to the server');
  Post.find().sort({createdAt: -1})
    .then((data) => res.json(data))
    .catch((error) => res.sendStatus(501));
});

app.patch('/api/posts/:postId', (req, res) => {
  console.log(req.params);
  Post.updateOne({_id: req.params.postId}, {$inc: {likes: 1}}) //$increment inc
    .exec((error, data) => res.json(data));
});


app.post('/api/posts/', (req, res) => {
  var newPost = new Post(req.body);
  newPost.save();
  res.send(newPost);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

//change to exec, change increment, change deprecated findoneandupdate
//axios doesnt need :