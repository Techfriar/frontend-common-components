import React from "react";
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
  return (
    <div className={`appselect ${className}`}>
      <Select
        className={"select"}
        showSearch={showSearch}
        disabled={disabled}
        value={value?.length ? value : null}
        placeholder={`${required ? placeholder + " (required)" : placeholder}`}
        onChange={(value: string | string[]) =>
          handleChange && handleChange(value)
        }
        filterOption={(input, options) =>
          (options?.label || "")
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
      ></Select>
      {errorMessage && <div className={"error"}>{errorMessage}</div>}
    </div>
  );
};

export default AppSelect;
