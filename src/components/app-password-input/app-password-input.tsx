import React, { ReactElement, useState } from "react";
import { Input } from "antd";
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
} from "react";
import Icons from "../../themes/icons/icons";
import "./app-password-input.css";

interface AppPasswordInputProps {
  className?: string;
  label?: string;
  name?: string;
  value?: string;
  dataTestId?: string;
  id?: string;
  disabled?: boolean;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLElement>;
  onPressEnter?: KeyboardEventHandler<HTMLInputElement>;
  defaultValue?: string;
  isAutoFocus?: boolean;
  triggerFocus?: boolean;
  errorMessage?: string;
  autoComplete?: string;
  icon?: React.ReactNode;
  hiddenIcon?: React.ReactNode;
  showIcon?: boolean;
}

const AppPasswordInput = ({
  label,
  name,
  value,
  dataTestId,
  id,
  disabled,
  handleChange,
  onClick,
  defaultValue,
  onPressEnter,
  className,
  errorMessage,
  isAutoFocus,
  triggerFocus,
  autoComplete = "new-password",
  icon,
  hiddenIcon,
  showIcon = true,
}: AppPasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`appPasswordInput ${className}`}>
      <div className="position-relative w-100">
        <Input
          type={showPassword ? "text" : "password"}
          className={"inputPassword"}
          data-test-id={dataTestId}
          id={id}
          disabled={disabled}
          name={name}
          value={value}
          onChange={handleChange}
          onClick={onClick}
          defaultValue={defaultValue}
          onPressEnter={onPressEnter}
          placeholder={label}
          autoFocus={isAutoFocus}
          autoComplete={autoComplete}
        />
        {showIcon && (
          <span className={"icon"} onClick={togglePasswordVisibility}>
            {!showPassword
              ? icon || Icons.iconHiddenIcon
              : hiddenIcon || Icons.eyePassword}
          </span>
        )}
      </div>
      {errorMessage && <div className={"error"}>{errorMessage}</div>}
    </div>
  );
};

export default AppPasswordInput;
