import { useRef, useState } from "react";
import Card from "../UI/Card/Card";
import classes from "./InputForm.module.css";
import Button from "../UI/Button/Button";

const InputForm = (props) => {
  const personRef = useRef(null);
  const injectionRef = useRef(null);
  const [vaccineData, setVaccineData] = useState();

  const vaccineTypeHandler = () => {
    const vaccineType = document.getElementById("vaccine");
    setVaccineData(vaccineType.options[vaccineType.selectedIndex].value);
  };
  const onSubmitHandelr = (event) => {
    const newData = {
      person: personRef.current.value,
      injection: injectionRef.current.value,
      type: vaccineData,
    };
    props.onAddData(newData);
  };

  return (
    <form onSubmit={onSubmitHandelr}>
      <Card className={classes.input}>
        <label htmlFor="Person">Person(Enter Name and Family):</label>
        <input type="text" id="Person" ref={personRef} />
        <label htmlFor="injectionOrder"> Vaccine injection stage: </label>
        <input
          type="number"
          id="InjectionOrder"
          min="1"
          max="5"
          ref={injectionRef}
        />
        <label htmlFor="vaccine"> Type Of vaccine: </label>
        <select id="vaccine" onChange={vaccineTypeHandler}>
          <option value=""></option>
          <option value="Sinopharm">Sinopharm</option>
          <option value="Astrazeneca">Astrazeneca</option>
          <option value="Sputnik-V">Sputnik-V</option>
        </select>
        <Button title="Add new Person" type="onSubmit"/>
      </Card>
    </form>
  );
};

export default InputForm;
