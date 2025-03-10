import { Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import "./app-radio-group.css";

interface Option {
  value: number;
  text: string;
}

interface AppRadioGroupProps {
  options: Option[];
  selectedValue: number | null;
  onChange: (value: number) => void;
  className?: string;
}

const AppRadioGroup = ({
  options,
  selectedValue,
  onChange,
  className,
}: AppRadioGroupProps) => {
  const handleChange = (e: RadioChangeEvent) => {
    onChange(e.target.value);
  };

  return (
    <div className={`appRadioGroup ${className}`}>
      <Radio.Group
        className={"radioGroup"}
        onChange={handleChange}
        value={selectedValue}
      >
        {options.map((option) => (
          <Radio key={option.value} value={option.value}>
            {option.text}
          </Radio>
        ))}
      </Radio.Group>
    </div>
  );
};

export default AppRadioGroup;
