import { Input } from "antd";
import { ChangeEventHandler, KeyboardEventHandler } from "react";
import "./app-textarea.css";

interface textAreaProps {
  id?: string;
  label?: string;
  name?: string;
  value?: string;
  dataTestId?: string;
  defaultValue?: string;
  onPressEnter?: KeyboardEventHandler<HTMLTextAreaElement>;
  handleChange?: ChangeEventHandler<HTMLTextAreaElement>;
  autoSize?: {
    minRows?: number;
    maxRows?: number;
  };
  rows?: number;
  cols?: number;
  placeholder?: string;
  className?: string;
  error?: string;
}

const AppTextarea = ({
  id,
  placeholder,
  name,
  value,
  dataTestId,
  defaultValue,
  onPressEnter,
  handleChange,
  rows,
  cols,
  className,
  error,
}: textAreaProps) => {
  return (
    <div className={`appTextArea ${className}`}>
      <Input.TextArea
        data-test-id={dataTestId}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        className={"textArea"}
        onChange={handleChange}
        defaultValue={defaultValue}
        onPressEnter={onPressEnter}
        rows={rows}
        cols={cols}
      />
      {error && <div className={"error"}>{error}</div>}
    </div>
  );
};

export default AppTextarea;
