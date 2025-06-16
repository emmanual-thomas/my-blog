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
        await axios.put(
          `http://localhost:3000/api/articles/${editingArticle._id}`,
          { title, content, author }
        );
      } else {
        // Create new article
        await axios.post(
          'http://localhost:3000/api/articles',
          { title, content, author }
        );
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
    <div className="container mt-4">
      <h2 className="mb-4">{editingArticle ? 'Edit Article' : 'Create Article'}</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Enter content"
            value={content}
            onChange={e => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter author"
            value={author}
            onChange={e => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {editingArticle ? 'Update Article' : 'Add Article'}
        </button>
      </form>
    </div>
  );
}

export default CreateArticleForm;
