"use client";

import { Input, InputProps, InputRef } from "antd";
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  useEffect,
  useRef,
} from "react";
import "./app-input.css";

interface AppInputProps extends InputProps {
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
  type?: string;
  isOptional?: boolean;
  errorMessage?: string;
  suffixIcon?: React.ReactNode;
  prefixIcon?: React.ReactNode;
  required?:boolean;
}

const AppInput = ({
  className,
  label,
  name,
  value,
  dataTestId,
  type,
  id,
  disabled,
  handleChange,
  onClick,
  defaultValue,
  onPressEnter,
  isAutoFocus,
  triggerFocus,
  isOptional,
  errorMessage,
  suffixIcon,
  prefixIcon,
  required,
  ...props
}: AppInputProps) => {
  const inputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (isAutoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [triggerFocus, isAutoFocus]);

  const placeholder = isOptional ? `${label} (optional)` : label;

  return (
    <div className={`appInput ${className}`}>
      <Input
        type={type}
        data-test-id={dataTestId}
        id={id}
        disabled={disabled}
        name={name}
        className={"input"}
        value={value}
        onChange={handleChange}
        onClick={onClick}
        defaultValue={defaultValue}
        onPressEnter={onPressEnter}
        placeholder={`${required ? placeholder + " (required)" : placeholder}`}
        ref={inputRef}
        prefix={prefixIcon && prefixIcon}
        suffix={suffixIcon && suffixIcon}
        {...props}
      />

      {errorMessage && <div className={"error"}>{errorMessage}</div>}
    </div>
  );
};

export default AppInput;
