import React from 'react';

import './styles.css';

import Header from './components/Header';
import PostList from './components/PostList';

const App = () => (
  <div className="App">
    <Header />
    <PostList />
  </div>
);

export default App;
