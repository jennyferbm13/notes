// eslint-disable-next-line react/prop-types
const SecundaryButton = ({ text, onClick, bottom, right }) => {
  return (
    <button
      className="button-secundary"
      style={{ bottom: bottom, right: right }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export { SecundaryButton };
