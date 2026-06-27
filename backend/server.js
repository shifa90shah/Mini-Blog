const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend chal raha hai!');
});

const fs = require('fs');

app.get('/posts', (req, res) => {
  const data = fs.readFileSync('posts.json', 'utf8');
  const posts = JSON.parse(data);
  res.json(posts);
});


app.post('/posts', (req, res) => {
  const data = fs.readFileSync('posts.json', 'utf8');
  const posts = JSON.parse(data);

  const newPost = {
    id: Date.now(),
    title: req.body.title,
    content: req.body.content
  };

  posts.push(newPost);
  fs.writeFileSync('posts.json', JSON.stringify(posts));

  res.json(newPost);
});


app.delete('/posts/:id', (req, res) => {
  const data = fs.readFileSync('posts.json', 'utf8');
  let posts = JSON.parse(data);

  posts = posts.filter(post => post.id !== Number(req.params.id));

  fs.writeFileSync('posts.json', JSON.stringify(posts));
  res.json({ message: 'Post delete ho gaya' });
});

app.listen(5000, () => {
  console.log('Server 5000 par chal raha hai');
});