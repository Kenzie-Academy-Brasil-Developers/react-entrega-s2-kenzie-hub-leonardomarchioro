import { Buttonstyle } from "./styles.js";

const Button = ({ text, type, style, hover, ...rest }) => {
  return (
    <Buttonstyle
      type={type}
      backgroundColor={style}
      backgroundHover={hover}
      {...rest}
    >
      {text}
    </Buttonstyle>
  );
};
export default Button;
