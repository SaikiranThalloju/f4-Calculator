import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e, setNum) => {
    const value = e.target.value;
    setNum(value);
  };

  const validateInput = () => {
    if (!num1 || !num2 || isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
      setError('Input Cannot be Empty');
      return false;
    }

    setError('');
    return true;
  };

  const handleOperation = (operation) => {
    if (validateInput()) {
      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);

      switch (operation) {
        case '+':
          setResult(n1 + n2);
          break;
        case '-':
          setResult(n1 - n2);
          break;
        case '*':
          setResult(n1 * n2);
          break;
        case '/':
          if (n2 !== 0) {
            setResult(n1 / n2);
          } else {
            setError('Cannot divide by zero.');
          }
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className='cal-card'>
      <h1>React Calculator</h1>
      <div>
        <label >
          <input  className='label' type="text" value={num1} onChange={(e) => handleInputChange(e, setNum1)}  placeholder='Num 1'/>
        </label>
      </div>
      <div>
        <label>
          <input  className='label' type="text" value={num2} onChange={(e) => handleInputChange(e, setNum2)} placeholder='Num 2' />
        </label>
      </div>
      <div>
        <button className='btn'   onClick={() => handleOperation('+')}>+</button>
        <button  className='btn' onClick={() => handleOperation('-')}>-</button>
        <button  className='btn' onClick={() => handleOperation('*')}>*</button>
        <button  className='btn' onClick={() => handleOperation('/')}>/</button>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {result !== null && (
        <div style={{ color: 'black' }}>
          Result: {result}
        </div>
      )}
    </div>
  );
};

export default Calculator;
