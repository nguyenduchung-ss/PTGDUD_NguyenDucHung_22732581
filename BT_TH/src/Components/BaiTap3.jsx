import './Baitap3.css'
import React, { useState } from 'react';

export default function Calculator(){
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(null);

  function handleInputChange(e){
    const { name, value } = e.target;
    if (name === 'num1') {
      setNum1(value);
    } else if (name === 'num2') {
      setNum2(value);
    }
  }

  function handleOperationChange(e){
    setOperation(e.target.value);
  }

  function handleCalculate(){
    const n1 = parseInt(num1);
    const n2 = parseInt(num2);
    
    let calculation = 0;
    
    switch (operation) {
      case '+':
        calculation = n1 + n2;
        break
      case '-':
        calculation = n1 - n2;
        break
      case '*':
        calculation = n1 * n2;
        break
      case '/':
        calculation = n2 !== 0 ? n1 / n2 : 'Cannot divide by zero';
        break
      default:
        break
    }
    setResult(calculation);
  }

  return (
    <div>     
        <div>
        <input type="number" name="num1" value={num1} onChange={handleInputChange} placeholder="Input 1" />
        <br />
        <input type="number" name="num2" value={num2} onChange={handleInputChange} placeholder="Input 2" />
        </div>
      <div>
        <label>
          <input type="radio" value="+" checked={operation === '+'} onChange={handleOperationChange} /> +
        </label>    
        <label>
          <input type="radio" value="-" checked={operation === '-'} onChange={handleOperationChange} /> -
        </label>
        <label>
          <input type="radio" value="*" checked={operation === '*'} onChange={handleOperationChange} /> *
        </label>
        <label>
          <input type="radio" value="/" checked={operation === '/'} onChange={handleOperationChange} /> /
        </label>
        
      </div>

      <div>
        <button onClick={handleCalculate}>Click</button>
      </div>

      {result !== null && <div>Result: {result}</div>}
    </div>
  )
}
