const Button = ({ className, title, type, onClick = () => {} }) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
