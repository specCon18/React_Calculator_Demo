import './App.css';


function Display(){
  return (
    <div className="bg-stone-300 ring-black ring-2 p-12 text-right">
      <p className="text-4xl font-extrabold">0</p>
    </div>
  );
}

function Controls() {
  return (
    <div className=" items-center justify-center grid">

      <div className="text-center grid grid-cols-4">
        <Button symbol="AC" sizeX="1" sizeY="1" />
        <Button symbol="+/-" sizeX="1" sizeY="1" />
        <Button symbol="%" sizeX="1" sizeY="1" />
        <Button symbol="/" sizeX="1" sizeY="1" />
      </div>
      <div className="text-center grid grid-cols-4">
        <Button symbol="7" sizeX="1" sizeY="1" />
        <Button symbol="8" sizeX="1" sizeY="1" />
        <Button symbol="9" sizeX="1" sizeY="1" />
        <Button symbol="x" sizeX="1" sizeY="1" />
      </div>
      <div className="text-center grid grid-cols-4">
        <Button symbol="4" sizeX="1" sizeY="1" />
        <Button symbol="5" sizeX="1" sizeY="1" />
        <Button symbol="6" sizeX="1" sizeY="1" />
        <Button symbol="-" sizeX="1" sizeY="1" />
      </div>
      <div className="text-center grid grid-cols-4">
        <Button symbol="1" sizeX="1" sizeY="1" />
        <Button symbol="2" sizeX="1" sizeY="1" />
        <Button symbol="3" sizeX="1" sizeY="1" />
        <Button symbol="+" sizeX="1" sizeY="1" />
      </div>
      <div className="text-center grid grid-cols-4">
        <Button symbol="0" sizeX="2" sizeY="1" />
        <Button symbol="." sizeX="1" sizeY="1" />
        <Button symbol="=" sizeX="1" sizeY="1" />
      </div>
    </div>
  );
}

function Button({symbol, sizeX, sizeY}) {
  // Apply Tailwind's col-span class based on sizeX
  let colSpanClass = `col-span-${sizeX}`;
  let rowSpanClass = `row-span-${sizeY}`;

  return (
    <button onClick={handle_input} className={`bg-stone-400 font-extrabold text-xl ring-black ring-2 hover:bg-stone-600 hover:text-white p-10 ${colSpanClass} ${rowSpanClass}`}>{symbol}</button>
  );
}

function handle_input(input) {
  let button_text = input.target.innerText;
  switch(button_text) {
    case "0":
      alert(`pressed ${button_text}`)
      break
    case "1":
      alert(`pressed ${button_text}`)
      break
    case "2":
      alert(`pressed ${button_text}`)
      break  
    case "3":
      alert(`pressed ${button_text}`)
      break
    case "4":
      alert(`pressed ${button_text}`)
      break
    case "5":
      alert(`pressed ${button_text}`)
      break
    case "6":
      alert(`pressed ${button_text}`)
      break
    case "7":
      alert(`pressed ${button_text}`)
      break
    case "8":
      alert(`pressed ${button_text}`)
      break
    case "9":
      alert(`pressed ${button_text}`)
      break
    case "AC":
      alert(`pressed ${button_text}`)
      break
    case "+":
      alert(`pressed ${button_text}`)
      break
    case "-":
      alert(`pressed ${button_text}`)
      break
    case "x":
      alert(`pressed ${button_text}`)
      break
    case "/":
      alert(`pressed ${button_text}`)
      break
    case ".":
      alert(`pressed ${button_text}`)
      break
    case "=":
      alert(`pressed ${button_text}`)
      break
    case "+/-":
      alert(`pressed ${button_text}`)
      break
    case "%":
      alert(`pressed ${button_text}`)
      break
  }
}

export default function App() {
  return (
    <div className="App mx-auto pt-6 max-w-sm">
        <Display />
        <Controls />
    </div>
  );
}
