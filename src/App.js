import React from 'react'
import './App.css';

import GalleryBase02 from './components/GalleryBase02';
import GalleryBase01 from './components/GalleryBase01';
import GalleryBase03 from './components/GalleryBase03';

function App() {
  return (
    <div className="App">
      <GalleryBase01 />
      <GalleryBase02 />
      <GalleryBase03 />
    </div>
  );
}

export default App;
