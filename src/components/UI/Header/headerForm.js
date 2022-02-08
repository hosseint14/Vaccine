import classes from "./headerForm.module.css";
import Button from "../Button/Button";

const HeaderForm = (props) => {

  return (
    <form onSubmit={props.onSubmit}>
      <div className={classes.header}>
        <label htmlFor="userName">User Name: </label>
        <input type="text" id="userName" onChange={props.userName} value='admin'/>
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" onChange={props.password} value='123456'/>
        <Button title="LogIn" type="submit" />
      </div>
    </form>
  );
};

export default HeaderForm;
