import React, { useState } from 'react';
import ArticlesList from './components/ArticlesList';
import CreateArticleForm from './components/CreateArticleForm';

function App() {
  const [refresh, setRefresh] = useState(0);
  const [editingArticle, setEditingArticle] = useState(null);

  const handleArticleSaved = () => {
    setRefresh(prev => prev + 1);
    setEditingArticle(null); // Clear edit form
  };

  const handleEdit = (article) => {
    setEditingArticle(article);
  };

  return (
    <div className="App">
      <h1>My Blog</h1>
      <CreateArticleForm
        onArticleSaved={handleArticleSaved}
        editingArticle={editingArticle}
      />
      <ArticlesList refresh={refresh} onEdit={handleEdit} />
    </div>
  );
}

export default App;
