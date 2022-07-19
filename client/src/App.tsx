import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [posts, setPosts] = useState([]);


  return (
    <div className="app">
      <Sidebar />
      <Feed posts={posts} />
      <Widgets />
    </div>
  );
}

export default App;
