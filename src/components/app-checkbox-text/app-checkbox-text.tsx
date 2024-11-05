import React from "react";
import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import "./app-checkbox-text.css";

interface AppCheckboxTextProps {
  text: string;
  checked?: boolean;
  handleChange?: (e: CheckboxChangeEvent) => void;
  className?: string;
}

const AppCheckboxText = ({
  text,
  checked,
  handleChange,
  className,
}: AppCheckboxTextProps) => {
  return (
    <div className={`appCheckboxText ${className}`}>
      <Checkbox
        className="checkboxText"
        checked={checked}
        onChange={handleChange}
      >
        <span dangerouslySetInnerHTML={{ __html: text }} />
      </Checkbox>
    </div>
  );
};

export default AppCheckboxText;
