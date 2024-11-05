import React, { useEffect, useRef } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput, { CountryData } from "react-phone-input-2";
import "./app-phone-input.css";

interface AppPhoneInputProps {
  value: string;
  countryCode?: string;
  handleChange: (phone: string, countryCode: string, uniCode: string) => void;
  className: string;
  id: string;
}

const AppPhoneInput = ({
  value,
  handleChange,
  countryCode,
  className,
  id,
}: AppPhoneInputProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      const inputElement = wrapperRef.current.querySelector("input");
      if (inputElement) {
        inputElement.id = id;
      }
    }
  }, [id]);
  return (
    <div className={className}>
      <div className={"inputContainer"} ref={wrapperRef}>
        <PhoneInput
          value={value}
          country={"ae"}
          onChange={(phone, country: CountryData) => {
            handleChange(phone, `+${country.dialCode}`, country.countryCode);
          }}
          enableSearch={true}
          inputProps={{ required: true }}
        />
      </div>
    </div>
  );
};
export default AppPhoneInput;
