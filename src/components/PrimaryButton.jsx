// eslint-disable-next-line react/prop-types
const PrimaryButton = ({ text, onClick }) => {
  return (
    <button className="button-primary" onClick={onClick}>
      {text}
    </button>
  );
};

export { PrimaryButton };
