//import logo from './logo.svg';
import React,{useState} from "react";
import "./App.css";


function App(){
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');
    
  
    const handleNum1Change = (event) => {
      setNum1(event.target.value);
    };
  
    const handleNum2Change = (event) => {
      setNum2(event.target.value);
    };
  
    const handleAddition = () => {
      if (!validateInputs()) {
        return;
      }
      const sum = parseFloat(num1) + parseFloat(num2);
      setResult(sum);
    };
  
    const handleSubtraction = () => {
      if (!validateInputs()) {
        return;
      }
      const difference = parseFloat(num1) - parseFloat(num2);
      setResult(difference);
    };
  
    const handleMultiplication = () => {
      if (!validateInputs()) {
        return;
      }
      const product = parseFloat(num1) * parseFloat(num2);
      setResult(product);
    };
  
    const handleDivision = () => {
      if (!validateInputs()) {
        return;
      }
      if (parseFloat(num2) === 0) {
        setError('Error: Cannot divide by zero');
        return;
      }
      const quotient = parseFloat(num1) / parseFloat(num2);
      setResult(quotient);
    };
  
    const validateInputs = () => {
      if (!num1 || !num2) {
        setError('Error: Num1 Can not be Empaty');
        return false;
      }
      if (!/^-?\d*\.?\d+$/.test(num1) || !/^-?\d*\.?\d+$/.test(num2)) {
        setError('Error: Please Enter Valid Numbers');
        return false;
      }
      setError('');
      return true;
    };



  return (
    <div className="container">
      <h1>React Calculator</h1>
      <div>
        <input type="text" placeholder="Num1" value={num1} onChange={handleNum1Change} />
        </div>
      
        <div>
        <input type="text" placeholder="Num2" value={num2} onChange={handleNum2Change} />
        </div>
      <br />
      
      <div className="container1">
      <button onClick={handleAddition}>+</button>
      <button onClick={handleSubtraction}>-</button>
      <button onClick={handleMultiplication}>*</button>
      <button onClick={handleDivision}>/</button>
      </div>
      <br />
      {error && <div style={{ color: '#FB184E' }}>{error}</div>}
      {result && (
        <div className="abc" style={{ color: '#0057FF' }}>
          Result:{result}
          
          
        </div>
      )}
      
    </div>
  );
}

    

export default App;