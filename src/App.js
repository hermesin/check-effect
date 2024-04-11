import "./App.css";
import { useState } from "react";
import CheckBox from "./components/CheckBox";

const data = [
  { id: 1, title: "Find Another Way" },
  { id: 2, title: "Acquire the Discarded Lenses" },
  { id: 3, title: "Install the Discarded Lenses" },
  { id: 4, title: "Activate the Oraculum" },
];

function App() {
  const [isChecked, setIsChecked] = useState([]);

  const changeData = (id) => {
    const changedValue = [...isChecked];
    if (isChecked.indexOf(id) > -1)
      changedValue.splice(isChecked.indexOf(id), 1);
    else changedValue.push(id);

    setIsChecked(changedValue);
  };

  return (
    <div className="background">
      <div className="section">
        <div className="top">
          <div className="top_box"></div>
          <h2>
            <i>Kill Breanna Ashworth</i>
          </h2>
        </div>

        <div className="section">
          {data.map(({ id, title }, index) => (
            <CheckBox
              key={index}
              id={id}
              title={title}
              isChecked={isChecked.indexOf(id) > -1}
              changeData={changeData}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
