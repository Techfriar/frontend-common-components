import React from "react";
import { Divider, DividerProps } from "antd";

interface AppDividerProps extends DividerProps {
  className?: string;
}

const AppDivider = ({ className, ...props }: AppDividerProps) => {
  return (
    <div className={className}>
      <Divider {...props} />
    </div>
  );
};

export default AppDivider;
