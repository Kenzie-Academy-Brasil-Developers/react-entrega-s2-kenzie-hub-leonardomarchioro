import { Buttonstyle } from "./styles.js";

const Button = ({ text, type, style, ...rest }) => {
  return (
    <Buttonstyle type={type} backgroundColor={style} {...rest}>
      {text}
    </Buttonstyle>
  );
};
export default Button;
