"use client";

import { Input, InputProps, InputRef } from "antd";
import {
  ChangeEvent,
  ChangeEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
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
  required?: boolean;
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
  const [inputValue, setInputValue] = useState<string>(value || "");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (isAutoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [triggerFocus, isAutoFocus]);

  useEffect(() => {
    if (value !== undefined) {
      setInputValue(value);
    }
  }, [value]);

  const placeholder = isOptional ? `${label} (optional)` : label;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsTyping(e.target.value.length > 0);
    handleChange?.(e);
  };

  return (
    <div className={`appInput ${className}`}>
      {/* Show placeholder only if user hasn't started typing */}
      {required && !isTyping && !inputValue && (
        <div className="placeHolder" onClick={() => inputRef.current?.focus()}>
          <label className="requiredText" htmlFor={id}>
            {placeholder}
          </label>
          <span className="star">*</span>
        </div>
      )}

      <Input
        type={type}
        data-test-id={dataTestId}
        id={id}
        disabled={disabled}
        name={name}
        className={"input"}
        value={inputValue}
        onChange={handleInputChange}
        onClick={onClick}
        defaultValue={defaultValue}
        onPressEnter={onPressEnter}
        placeholder={`${required ? "" : placeholder}`}
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
