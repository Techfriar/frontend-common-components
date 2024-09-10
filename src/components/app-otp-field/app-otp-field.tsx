import React, { useEffect } from "react";
import OTPInput from "react-otp-input";
import "./app-otp-field.css";

interface AppOtpFieldProps {
  otp: string;
  onChange: (otp: string) => void;
  numInputs?: number;
  otpError?: string;
  resendTimeout?: number;
  onResendOtp?: () => void;
  setResendTimeout: (timeout: number) => void;
  className?: string;
  resendTxt?: string;
  resendTime: string;
}

const AppOtpField = ({
  otp,
  onChange,
  numInputs = 4,
  otpError,
  resendTimeout,
  onResendOtp,
  setResendTimeout,
  className,
  resendTxt,
  resendTime,
}: AppOtpFieldProps) => {
  useEffect(() => {
    if (resendTimeout && resendTimeout > 0) {
      const timer = setTimeout(() => {
        setResendTimeout(resendTimeout - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [resendTimeout, setResendTimeout]);

  return (
    <div className={`appOtpField ${className}`}>
      <OTPInput
        value={otp}
        onChange={onChange}
        numInputs={numInputs}
        containerStyle={"otpInputStyle"}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
      />
      {otpError && <p className={"error"}>{otpError}</p>}{" "}
      <div className={"resendWrap"}>
        {resendTimeout !== undefined && (
          <span className={"forgotPassword"}>
            {resendTimeout > 0 ? (
              <span className={"resendTimer"}>{resendTime}</span>
            ) : (
              onResendOtp && (
                <span className={"resendBtn"} onClick={() => onResendOtp()}>
                  {resendTxt}
                </span>
              )
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default AppOtpField;
