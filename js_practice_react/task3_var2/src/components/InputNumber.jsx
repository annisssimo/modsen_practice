import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function InputNumber({ onChange }) {
  const [input, setInput] = useState('');

  function handleChange(e) {
    const value = e.target.value;
    setInput(value);
    onChange(value);
  }

  return (
    <label htmlFor="inputNumber">
      Input Number
      <input
        onChange={handleChange}
        value={input}
        onInput={(e) => setInput(e.target.value)}
        id="inputNumber"
        type="number"
      />
    </label>
  );
}

export default InputNumber;
