import PropTypes from "prop-types";

const Button = ({
  styles,
  padding,
  fontSize,
  fontWeight,
  content,
  furtherClasses,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={{ borderWidth: 1.5, borderRadius: 4, ...styles }}
      className={`bg-red-500 border-2 border-red-500 ${padding}  ${fontSize} ${fontWeight} ${furtherClasses}   duration-300 text-white hover:bg-white hover:text-red-500 transition-all`}
    >
      {content}
    </button>
  );
};
Button.propTypes = {
  styles: PropTypes.object,
  padding: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  content: PropTypes.string.isRequired,
  furtherClasses: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
