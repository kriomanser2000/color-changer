import React, { useState } from 'react';
import './App.css';
import ColorButton from './ColorButton';
function App() 
{
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [textColor, setTextColor] = useState('black');
  const changeColor = (bgColor, txtColor) => 
  {
    setBackgroundColor(bgColor);
    setTextColor(txtColor);
  };
  return (
    <div style={{ backgroundColor: backgroundColor, color: textColor }}>
      <p>Текст змінює колір</p>
      <ColorButton bgColor="red" txtColor="white" onColorChange={changeColor}>
        Червоний фон, білий текст
      </ColorButton>
      <ColorButton bgColor="green" txtColor="black" onColorChange={changeColor}>
        Зелений фон, чорний текст
      </ColorButton>
      <ColorButton bgColor="yellow" txtColor="blue" onColorChange={changeColor}>
        Жовтий фон, синій текст
      </ColorButton>
    </div>
  );
}
export default App;