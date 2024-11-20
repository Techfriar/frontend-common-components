import React from "react";
import { Select, SelectProps } from "antd";
import { MouseEventHandler } from "react";
import "./app-select.css";

interface AppSelectProps extends SelectProps {
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
  showSearch?:boolean;
}

const AppSelect = ({
  value,
  handleChange,
  options,
  disabled,
  placeholder,
  className,
  errorMessage,
  showSearch,
  ...props
}: AppSelectProps) => {
  return (
    <div className={`appselect ${className}`}>
      <Select
        className={"select"}
        showSearch={showSearch}
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        onChange={(value: string | string[]) =>
          handleChange && handleChange(value)
        }
        {...props}
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
