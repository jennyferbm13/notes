// eslint-disable-next-line react/prop-types
const InputText = ({ handleInputChange, noteText, placeholder }) => {
  const onChange = (event) => {
    handleInputChange(event.target.value);
  };
  console.log(noteText);
  return (
    <div className="input-card">
      <textarea
        type="text"
        placeholder={placeholder}
        value={noteText}
        onChange={onChange}
      />
    </div>
  );
};

export { InputText };
