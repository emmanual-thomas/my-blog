import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ArticlesList({ refresh, onEdit }) {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/articles');
      setArticles(res.data);
    } catch (err) {
      console.error('Error fetching articles:', err);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [refresh]);

  return (
    <div>
      <h2>Articles</h2>
      {articles.map(article => (
        <div key={article._id} style={{ margin: '10px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
          <p><strong>Author:</strong> {article.author}</p>
          <button onClick={() => onEdit(article)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default ArticlesList;
