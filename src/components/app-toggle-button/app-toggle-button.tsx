import { useState } from "react";
import { Switch } from "antd";
import "./app-toggle-button.css";

interface AppToggleButtonProps {
  initialChecked?: boolean;
  onChange?: (checked: boolean) => void;
  checkedLabel?: string;
  uncheckedLabel?: string;
  className?: string;
}

const AppToggleButton = ({
  initialChecked = false,
  onChange,
  checkedLabel,
  uncheckedLabel,
  className,
}: AppToggleButtonProps) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleToggle = (checked: boolean) => {
    setIsChecked(checked);
    if (onChange) {
      onChange(checked);
    }
  };

  return (
    <div className={`toggleContainer ${className}`}>
      <Switch
        checked={isChecked}
        onChange={handleToggle}
        className={"switch"}
      />
      <span className={"label"}>
        {isChecked ? checkedLabel : uncheckedLabel}
      </span>
    </div>
  );
};

export default AppToggleButton;
