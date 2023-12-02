import React from 'react';
function MyComponent() {
  
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div>
      <h1>ReactJS with JSX</h1>
      <p>Welcome to the world of ReactJS</p>
      <p>The current time is: {currentTime}</p>
      <ul>
        <li>{currentTime}</li>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
}

export default MyComponent;