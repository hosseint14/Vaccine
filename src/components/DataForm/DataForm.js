import Card from "../UI/Card/Card";
import classes from "./DataForm.module.css";

const DataForm = (props) => {
  
  return (
    <Card>
      <ul>
        {props.Data.map((item) => (
          <li className={classes.list} key={item.id}>
            <p className={classes.person}>Person: {item.person}</p>
            <p>Vaccine injection stage: {item.injection}</p>
            <p>Type Of vaccine: {item.type}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default DataForm;
