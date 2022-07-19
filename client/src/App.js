import './App.css';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Widgets from './Components/Widgets';
import React, { useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);


  return (
    <div className="app">
      <Sidebar />
      <Feed posts={posts}/>
      <Widgets />
    </div>
  );
}

export default App;
