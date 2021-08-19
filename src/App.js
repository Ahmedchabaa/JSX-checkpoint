import React from 'react'
import './App.css'
import './style.css'

function App() {
  return (
    <div>
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
      <h1 className="title red">Ahmed</h1>
      <br />
      <img src="./imageInSrc.jpg" alt="imageInSrc"/>
      <br />
      <img src="./imageInPublic.jpg" alt="imageInPublic" />
    </div>
    <video width={320} height={240} controls>
      <source src="https://www.youtube.com/watch?v=u4YfzFUb6_Q" type="video/mp4" />
    </video>
  </div>
);
}

export default App;
