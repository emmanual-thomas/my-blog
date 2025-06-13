import React, { useState } from 'react';
import ArticlesList from './components/ArticlesList';
import CreateArticleForm from './components/CreateArticleForm';

function App() {
  const [refresh, setRefresh] = useState(0);

  const handleArticleCreated = () => {
    setRefresh(prev => prev + 1); // Force re-fetch
  };

  return (
    <div className="App">
      <h1>My Blog</h1>
      <CreateArticleForm onArticleCreated={handleArticleCreated} />
      <ArticlesList refresh={refresh} />
    </div>
  );
}

export default App;
