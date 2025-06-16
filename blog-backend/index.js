const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Article = require('./models/Article');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://admin:admin123@cluster0.g2hsgxl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected!'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

app.get('/api/articles', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    console.error('Error fetching articles:', err);
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
});

app.post('/api/articles', async (req, res) => {
  try {
    const newArticle = new Article(req.body);
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: 'Validation failed', details: err.errors });
    }
    console.error('Error saving article:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/api/articles/:id', async (req, res) => {
  try {
    const updated = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update article' });
  }
});

app.patch('/api/articles/:id', async (req, res) => {
  try {
    const updated = await Article.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Failed to patch article' });
  }
});

app.delete('/api/articles/:id', async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.json({ message: 'Article deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete article' });
  }
});

app.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});
