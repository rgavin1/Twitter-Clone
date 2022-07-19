import React from 'react';
import './App.css';

import { Feed, Widgets, Sidebar } from './components';

const App: React.FC = () => {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
