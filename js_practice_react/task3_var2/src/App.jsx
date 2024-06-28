import './App.css';
import InputNumber from './components/InputNumber';
import Message from './components/Message';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('the number is ...');

  function toggleMessage(value) {
    const number = parseFloat(value);
    if (!isNaN(number)) {
      if (number > 0) {
        setMessage('the number is positive');
      } else if (number < 0) {
        setMessage('the number is negative');
      } else {
        setMessage('the number is zero');
      }
    } else {
      setMessage('the input is not a number');
    }
  }

  return (
    <div>
      <InputNumber onChange={toggleMessage} />
      <Message msg={message} />
    </div>
  );
}

export default App;
