import React, { useState } from 'react';
import axios from 'axios';

function CreateArticleForm({ onArticleCreated }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/articles', {
        title,
        content,
        author
      });
      setTitle('');
      setContent('');
      setAuthor('');
      onArticleCreated(); // Refresh the list ✅
    } catch (err) {
      console.error('Error creating article:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h2>Create Article</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      /><br /><br />
      <textarea
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
        required
      ></textarea><br /><br />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
      /><br /><br />
      <button type="submit">Add Article</button>
    </form>
  );
}

export default CreateArticleForm;
