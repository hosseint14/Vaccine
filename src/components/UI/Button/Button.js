import classes from "./button.module.css";

const Button = (props) => {
  return (
    <div>
      <button
        type={props.type || "button"}
        className={`${props.className} ${classes.button}`}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
