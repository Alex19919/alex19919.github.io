import React from 'react';

// JSX-елемент з назвою jsxElement
const jsxElement = <h1>I am a JSX element</h1>;

// JSX-елемент з назвою header
const header = (
  <div>
    <h1>Welcome to React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </div>
);

// JSX-фрагмент
const jsxFragment = (
  <>
    <h1>Welcome to React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </>
);


const footer = <p>Copyright &copy; 2024</p>;

function App() {
  return (
    <div>
      {jsxElement}

      {header}

      {jsxFragment}

      {footer}
    </div>
  );
}

export default App;
