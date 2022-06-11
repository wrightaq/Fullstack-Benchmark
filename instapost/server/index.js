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

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


// {
//   username: String,
//   imageUrl: String,
//   body: String,
//   likes: { type: Number, default: 0 },
// },
// {
//   timestamps: true,
// }