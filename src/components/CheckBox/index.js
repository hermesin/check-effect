import { memo } from "react";

const CheckBox = ({ id, title, isChecked, changeData }) => {
  return (
    <div className="top">
      <div className="checkbox" onClick={() => changeData(id)}>
        <div className="top_box"></div>
        {isChecked && <img src="./check.jpg" className="label" />}
      </div>
      <div>
        <h2>
          <i>{title}</i>
        </h2>
      </div>
    </div>
  );
};

export default memo(CheckBox);
