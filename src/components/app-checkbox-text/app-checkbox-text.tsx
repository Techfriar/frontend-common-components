import React from "react";
import { Checkbox } from "antd";
import "./app-checkbox-text.css";

interface Type {
  text: string;
  className?: string;
}

const AppCheckboxText = ({ text, className }: Type) => {
  return (
    <div className={`appCheckboxText ${className}`}>
      <Checkbox className={"checkboxText"}>
        <span dangerouslySetInnerHTML={{ __html: text }} />
      </Checkbox>
    </div>
  );
};

export default AppCheckboxText;
