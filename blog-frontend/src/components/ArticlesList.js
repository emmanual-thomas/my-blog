import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ArticlesList({ refresh, onEdit, onDelete }) {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/articles', {
      auth: {
        username: 'admin',
        password: 'admin123'
      }
    });
    setArticles(res.data);
  } catch (err) {
    console.error('Error fetching articles:', err);
  }
};


  useEffect(() => {
    fetchArticles();
  }, [refresh]);

  const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:3000/api/articles/${id}`, {
      auth: {
        username: 'admin',
        password: 'admin123'
      }
    });
    onDelete(); // Refresh
  } catch (err) {
    console.error('Error deleting article:', err);
  }
};


  return (
    <div className="container mt-5">
      <h2 className="mb-4">Articles</h2>
      <div className="row">
        {articles.map(article => (
          <div key={article._id} className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.content}</p>
                <p className="card-text">
                  <small className="text-muted"><strong>Author:</strong> {article.author}</small>
                </p>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => onEdit(article)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(article._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticlesList;
