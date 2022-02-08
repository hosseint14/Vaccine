import { useState, useEffect, useCallback, Fragment } from "react";

import DataForm from "./components/DataForm/DataForm";
import Header from "./components/header/header";
import InputShowControl from "./components/InputShowControl/InputShowControl";
import Footer from "./components/UI/Footer/Footer";
import "./App.css";

function App() {
  const [information, setInformation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDataHandler = useCallback(async () => {
    setIsLoading(true);
    setError(false);

    try {
      const response = await fetch(
        "https://my-react-app-b9752-default-rtdb.firebaseio.com/vaccine.json"
      );

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const data = await response.json();
      console.log(data);

      let loadedData = [];

      for (const key in data) {
        loadedData.push({
          id: key,
          person: data[key].person,
          injection: data[key].injection,
          type: data[key].type,
        });
      }

      setInformation(loadedData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  const addPersonHandler = async (info) => {
    const response = await fetch(
      "https://my-react-app-b9752-default-rtdb.firebaseio.com/vaccine.json",
      {
        method: "post",
        body: JSON.stringify(info),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  let content = <p className="messageParagraph">find no Data!</p>;

  if (isLoading) {
    content = <p className="messageParagraph">Data is Loading...</p>;
  }

  if (error) {
    content = <p className="errorParagraph">{error}</p>;
  }

  if (information.length > 0) {
    content = <DataForm Data={information} />;
  }
  return (
    <div>
      <Header />
      <InputShowControl onAddData={addPersonHandler} />
      <Fragment>{content}</Fragment>
      <Footer />
    </div>
  );
}

export default App;
