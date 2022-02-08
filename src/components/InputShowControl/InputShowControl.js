import { Fragment } from "react";
import InputForm from "../InputForm/InputForm";
import Card from "../UI/Card/Card";
import classes from "./InputShowControl.module.css";

const InputShowControl = (props) => {
  return (
    <Fragment>
      {localStorage.getItem("LoggIn") === "1" ? (
        <InputForm onAddData={props.onAddData}/>
      ) : (
        <Card className={classes.line}>
          <p>Please LogIn first for enter Values</p>
        </Card>
      )}
    </Fragment>
  );
};

export default InputShowControl;
