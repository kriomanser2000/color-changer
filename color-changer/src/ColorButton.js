import React from 'react';
function ColorButton({ bgColor, txtColor, onColorChange, children }) 
{
  return (
    <button onClick={() => onColorChange(bgColor, txtColor)}>
      {children}
    </button>
  );
}
export default ColorButton;