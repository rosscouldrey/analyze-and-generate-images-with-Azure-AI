import React from 'react';

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function text(text){
  return(
    <p> {text} </p> 
  )
}

function App() {
  return (
  <div>
    <h1> My Test App  </h1>
    <text text="Hello World" />
    <MyButton />
  </div>


  )
}

export default App;
