import './App.css';
import { useState } from 'react';

function Display({ expression }) {
  return (
    <div className="bg-stone-300 ring-black ring-2 p-12 text-right">
      <p className="text-4xl font-extrabold">{expression}</p>
    </div>
  );
}

function Button({ symbol, handleInput, sizeX, sizeY }) {
  let colSpan = `col-span-${sizeX}`
  let rowSpan = `row-span-${sizeY}`
  return (
    <button
      onClick={() => handleInput(symbol)}
      className={`bg-stone-400 font-extrabold text-xl ring-black ring-2 hover:bg-stone-600 hover:text-white p-10 ${colSpan} ${rowSpan}`}
    >
      {symbol}
    </button>
  );
}

function Controls({ handleInput }) {
  return (
    <div className="items-center justify-center grid">
      <div className="text-center grid grid-cols-4">
        <Button symbol="AC" sizeX={2} sizeY={1} handleInput={handleInput} />
        <Button symbol="." sizeX={1} sizeY={1} handleInput={handleInput} />
        <Button symbol="/" sizeX={1} sizeY={1} handleInput={handleInput} />
      </div>
      <div className="text-center grid grid-cols-4">
        <Button symbol="7" sizeX={1} sizeY={1} handleInput={handleInput} />
        <Button symbol="8" sizeX={1} sizeY={1} handleInput={handleInput} />
        <Button symbol="9" sizeX={1} sizeY={1} handleInput={handleInput} />
        <Button symbol="x" sizeX={1} sizeY={1} handleInput={handleInput} />
      </div>
      <div className="text-center grid grid-cols-4">
        <Button symbol="4" sizeX={1} sizeY={1} handleInput={handleInput} />
        <Button symbol="5" sizeX={1} sizeY={1} handleInput={handleInput} />
        <Button symbol="6" sizeX={1} sizeY={1} handleInput={handleInput} />
        <Button symbol="-" sizeX={1} sizeY={1} handleInput={handleInput} />
      </div>
      <div className="text-center grid grid-cols-4">
        <Button symbol="1" sizeX={1} sizeY={1} handleInput={handleInput} />
        <Button symbol="2" sizeX={1} sizeY={1} handleInput={handleInput} />
        <Button symbol="3" sizeX={1} sizeY={1} handleInput={handleInput} />
        <Button symbol="+" sizeX={1} sizeY={1} handleInput={handleInput} />
      </div>
      <div className="text-center grid grid-cols-4">
        <Button symbol="0" sizeX={2} sizeY={1} handleInput={handleInput} />
        <Button symbol="=" sizeX={2} sizeY={1} handleInput={handleInput} />
      </div>
    </div>
  );
}

export default function App() {
  const [expression, setExpression] = useState("0");

  const handleInput = (symbol) => {
    switch(symbol) {
      case "AC":
        setExpression("0"); // Reset expression to "0"
        break;
      case "=":
        let evaluation = eval(expression.replace(/x/g, '*'));
        setExpression(evaluation);
        break;
      // For numeric and operator buttons
      default:
        setExpression(prevExpression => {
          // If the current expression is "0", replace it with the symbol
          // Otherwise, append the symbol to the current expression
          return prevExpression === "0" ? symbol : prevExpression + symbol;
        });
        break;
    }
  };

  return (
    <div className="pt-6 max-w-xs">
        <Display expression={expression} />
        <Controls handleInput={handleInput} />
    </div>
  );
}