import './App.css';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Widgets from './Components/Widgets';
import firebase from './firebase';
import React, { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firebase.firestore().collection("posts").onSnapshot(snapShot => {
      const post = snapShot.docs.map(item => ({
        id: item.id,
        ...item.data()
      }))
      setPosts(post);
    })
  }, []);


  return (
    <div className="app">
      <Sidebar />
      <Feed posts={posts}/>
      <Widgets />
    </div>
  );
}

export default App;
