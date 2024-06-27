import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import { useRef } from 'react';

function Form() {
  const inputTextRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = inputTextRef.current.value;
    console.log(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Write something: "
        id="msg"
        name="msg"
        ref={inputTextRef}
      />
      <Button />
    </form>
  );
}

export default Form;
