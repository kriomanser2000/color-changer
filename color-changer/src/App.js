import React, { useState } from 'react';
import './App.css';
function App() 
{
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [textColor, setTextColor] = useState('black');
  const changeColor = (bgColor, txtColor) => {
    setBackgroundColor(bgColor);
    setTextColor(txtColor);
  };
  return (
    <div style={{ backgroundColor: backgroundColor, color: textColor }}>
      <p>Текст змінює колір</p>
      <button onClick={() => changeColor('red', 'white')}>Червоний фон, білий текст</button>
      <button onClick={() => changeColor('blue', 'yellow')}>Синій фон, жовтий текст</button>
      <button onClick={() => changeColor('green', 'black')}>Зелений фон, чорний текст</button>
    </div>
  );
}
export default App;