import React, { useState } from 'react';
import ArticlesList from './components/ArticlesList';
import CreateArticleForm from './components/CreateArticleForm';

function App() {
  const [refresh, setRefresh] = useState(0);
  const [editingArticle, setEditingArticle] = useState(null);

  const handleArticleSaved = () => {
    setRefresh(prev => prev + 1);
    setEditingArticle(null);
  };

  const handleEdit = (article) => {
    setEditingArticle(article);
  };

  const handleDelete = () => {
    setRefresh(prev => prev + 1);
  };

  return (
    <div className="App">
      <h1>My Blog</h1>
      <CreateArticleForm
        onArticleSaved={handleArticleSaved}
        editingArticle={editingArticle}
      />
      <ArticlesList
        refresh={refresh}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
