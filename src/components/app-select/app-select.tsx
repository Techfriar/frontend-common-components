import React from "react";
import { Select } from "antd";
import { MouseEventHandler } from "react";
import "./app-select.css";

interface AppSelectProps {
  className?: string;
  value?: string | null;
  dataTestId?: string;
  id?: string;
  disabled?: boolean;
  handleChange?: (value: string | string[]) => void;
  onClick?: MouseEventHandler<HTMLElement>;
  options?: Array<{ value: string; label: string }>;
  onSelectChange?: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  errorMessage?: string;
}

const AppSelect = ({
  value,
  handleChange,
  options,
  disabled,
  placeholder,
  className,
  errorMessage,
}: AppSelectProps) => {
  return (
    <div className={`appselect ${className}`}>
      <Select
        className={"select"}
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        onChange={(value: string | string[]) =>
          handleChange && handleChange(value)
        }
      >
        {options &&
          options.map((option, i) => (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
      </Select>
      {errorMessage && <div className={"error"}>{errorMessage}</div>}
    </div>
  );
};

export default AppSelect;
