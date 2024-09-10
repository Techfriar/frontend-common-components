import React from "react";
import "react-phone-input-2/lib/style.css";
import "./app-phone-input.css";
import PhoneInput, { CountryData } from "react-phone-input-2";

interface AppPhoneInputProps {
  value: string;
  countryCode?: string;
  handleChange: (phone: string, countryCode: string, uniCode: string) => void;
  className:string;
}

const AppPhoneInput = ({
  value,
  handleChange,
  countryCode,
  className,
}: AppPhoneInputProps) => {
  return (
    <div className={className}>
      <div className={"inputContainer"}>
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
