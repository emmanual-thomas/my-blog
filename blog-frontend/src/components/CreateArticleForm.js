import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CreateArticleForm({ onArticleSaved, editingArticle }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');


  useEffect(() => {
    if (editingArticle) {
      setTitle(editingArticle.title);
      setContent(editingArticle.content);
      setAuthor(editingArticle.author);
    } else {
      setTitle('');
      setContent('');
      setAuthor('');
    }
  }, [editingArticle]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingArticle) {
        // Update existing article
        await axios.put(`http://localhost:3000/api/articles/${editingArticle._id}`, {
          title,
          content,
          author
        });
      } else {
        // Create new article
        await axios.post('http://localhost:3000/api/articles', {
          title,
          content,
          author
        });
      }

      setTitle('');
      setContent('');
      setAuthor('');
      onArticleSaved(); // Refresh list
    } catch (err) {
      console.error('Error saving article:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingArticle ? 'Edit Article' : 'Create Article'}</h2>
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
      <button type="submit">{editingArticle ? 'Update Article' : 'Add Article'}</button>
    </form>
  );
}

export default CreateArticleForm;
