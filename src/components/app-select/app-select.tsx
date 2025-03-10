import { useState, useEffect, useRef } from "react";
import { Select, SelectProps } from "antd";
import { MouseEventHandler } from "react";
import "./app-select.css";

interface Options {
  value: string;
  label: string;
  flag?: string;
}

interface AppSelectProps extends SelectProps {
  className?: string;
  value?: string | null;
  dataTestId?: string;
  id?: string;
  disabled?: boolean;
  handleChange?: (value: string | string[]) => void;
  onClick?: MouseEventHandler<HTMLElement>;
  options?: Options[];
  onSelectChange?: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  errorMessage?: string;
  showSearch?: boolean;
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
  required,
  ...props
}: AppSelectProps) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [selectedValue, setSelectedValue] = useState<string | null>(
    value || null
  );

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  const handleSelectChange = (val: string | string[]) => {
    setSelectedValue(val ? String(val) : null);
    handleChange?.(val);
  };

  return (
    <div className={`appselect ${className}`} ref={selectRef}>
      {/* Show placeholder only when nothing is selected */}
      {required && !selectedValue && (
        <div
          className="placeHolder"
          onClick={() => {
            const selectElement = selectRef.current?.querySelector(
              ".ant-select-selector"
            ) as HTMLElement;
            if (selectElement) {
              selectElement.click();
              setTimeout(() => {
                selectElement.dispatchEvent(
                  new MouseEvent("mousedown", { bubbles: true })
                );
              }, 0);
            }
          }}
        >
          <label className="requiredText" htmlFor={props.id}>
            {placeholder}
          </label>
          <span className="star">*</span>
        </div>
      )}

      <Select
        className={"select"}
        showSearch={showSearch}
        disabled={disabled}
        value={selectedValue || null}
        placeholder={`${required ? "" : placeholder}`}
        onChange={handleSelectChange}
        filterOption={(input, option) =>
          (option?.label || "")
            .toString()
            .toLowerCase()
            .includes(input.toLowerCase())
        }
        options={options?.map(({ value, label, flag }) => ({
          label: (
            <>
              {flag ? (
                <div
                  style={{
                    display: "grid",
                    alignItems: "center",
                    gridTemplateColumns: "0.2fr 1fr",
                    gap: 12,
                  }}
                >
                  <img
                    src={flag}
                    alt={label}
                    style={{ width: 32, height: 20 }}
                  />
                  <span>{label}</span>
                </div>
              ) : (
                <span>{label}</span>
              )}
            </>
          ),
          value,
        }))}
        {...props}
      />

      {errorMessage && <div className={"error"}>{errorMessage}</div>}
    </div>
  );
};

export default AppSelect;
