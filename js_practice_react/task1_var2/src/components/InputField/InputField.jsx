import { forwardRef } from 'react';

const InputField = forwardRef((props, nameInputRef) => {
  // eslint-disable-next-line react/prop-types
  const { label, ...otherProps } = props;
  return (
    <label>
      {label}
      <input
        {...otherProps}
        ref={nameInputRef}
        type="text"
        id="msg"
        name="msg"
        required
      />
    </label>
  );
});

InputField.displayName = 'InputField';

export default InputField;
