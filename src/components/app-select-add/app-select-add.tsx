import { Select } from "antd";
import type { SelectProps } from "antd";
import "./app-select-add.css";

interface AppSelectAddProps extends SelectProps {
  options?: SelectProps["options"];
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const AppSelectAdd = ({
  options = [],
  placeholder = "Tags Mode",
  onChange,
  className,
  ...rest
}: AppSelectAddProps) => {
  return (
    <div className={`appSelectAdd ${className}`}>
      <Select
        mode="tags"
        style={{ width: "100%" }}
        placeholder={placeholder}
        onChange={onChange}
        options={options}
        {...rest}
      />
    </div>
  );
};

export default AppSelectAdd;
