import React from "react";
import { FloatButton, FloatButtonProps } from "antd";

interface AppFloatButtonProps extends FloatButtonProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
}

const AppFloatButton = ({
  className,
  onClick,
  onMouseEnter,
  ...props
}: AppFloatButtonProps) => {
  return (
    <div className={className}>
      <FloatButton {...props} onClick={onClick} onMouseEnter={onMouseEnter} />
    </div>
  );
};

export default AppFloatButton;
