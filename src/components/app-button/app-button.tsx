import { Button } from "antd";
import { MouseEventHandler } from "react";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import "./app-button.css";
import React from "react";

interface AppButtonProps {
  size?: "small" | "middle" | "large" | "default" | undefined;
  className?: string;
  handleClick?: MouseEventHandler<HTMLElement>;
  icon?: React.ReactNode;
  text?: string;
  disabled?: boolean;
  iconPosition?: string;
  isLoading?: boolean;
  type?: "default" | "text" | "link" | "primary" | "dashed" | undefined;
}

const AppButton = ({
  type,
  size,
  className,
  handleClick,
  icon,
  text,
  disabled,
  iconPosition,
  isLoading,
}: AppButtonProps) => {
  return (
    <div className={`appButton ${className}`}>
      <Button
        disabled={disabled}
        type={type}
        className={[
          "customBtn",
          icon ? "btn-icon" : "",
          iconPosition === "right" ? "iconRight" : "",
        ].join(" ")}
        size={size as SizeType}
        onClick={handleClick}
        icon={icon}
        loading={isLoading}
      >
        {text}
      </Button>
    </div>
  );
};

export default AppButton;
