const Button = ({ text, type, ...rest }) => {
  return (
    <div>
      <button type={type} {...rest}>
        {text}
      </button>
    </div>
  );
};
export default Button;
