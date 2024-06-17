import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState("");

  const clickHandler = (event) => {
    setData(data.concat(event.target.value));
  }

  const clearDisplay = () => {
    setData("");
  }

  const calculateData = () => {
    try {
      setData(eval(data).toString());
    } catch (e) {
      setData("Error");
    }
  }

  const deleteLastCharacter = () => {
    setData(data.slice(0, -1));
  }

  return (
    <div className="calculator">
      <input type="text" placeholder="0" id="calculation" value={data} readOnly />
      <div className="buttons">
        <button onClick={clearDisplay} className="button button-clear">C</button>
        <button onClick={deleteLastCharacter} className="button">DEL</button>
        <button onClick={clickHandler} value="%" className="button">%</button>
        <button onClick={clickHandler} value="/" className="button button-operator">/</button>
        <button onClick={clickHandler} value="7" className="button">7</button>
        <button onClick={clickHandler} value="8" className="button">8</button>
        <button onClick={clickHandler} value="9" className="button">9</button>
        <button onClick={clickHandler} value="*" className="button button-operator">*</button>
        <button onClick={clickHandler} value="4" className="button">4</button>
        <button onClick={clickHandler} value="5" className="button">5</button>
        <button onClick={clickHandler} value="6" className="button">6</button>
        <button onClick={clickHandler} value="-" className="button button-operator">-</button>
        <button onClick={clickHandler} value="1" className="button">1</button>
        <button onClick={clickHandler} value="2" className="button">2</button>
        <button onClick={clickHandler} value="3" className="button">3</button>
        <button onClick={clickHandler} value="+" className="button button-operator">+</button>
        <button onClick={clickHandler} value="0" className="button button-zero">0</button>
        <button onClick={clickHandler} value="." className="button">.</button>
        <button onClick={calculateData} className="button button-equal">=</button>
      </div>
    </div>
  );
}

export default App;
