// eslint-disable-next-line react/prop-types
const Card = ({ children, key }) => {
  return (
    <div key={key} className="note-card">
      {children}
    </div>
  );
};

export { Card };
