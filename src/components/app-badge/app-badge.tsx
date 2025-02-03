import React from "react";
import { Badge, BadgeProps as AntdBadgeProps } from "antd";
import "./app-badge.css";

interface AppBadgeProps extends Omit<AntdBadgeProps, "content"> {
  content?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  ribbon?: {
    text: React.ReactNode;
    color?: string;
    placement?: "start" | "end";
  };
}

const AppBadge = ({
  content,
  children,
  className,
  ribbon,
  ...props
}: AppBadgeProps) => {
  return (
    <div className={`appBadge ${className}`}>
      <Badge count={content} {...props}>
        {ribbon ? (
          <div className={"ribbonWrapper"}>
            <Badge.Ribbon
              text={ribbon.text}
              color={ribbon.color}
              placement={ribbon.placement}
            >
              {children}
            </Badge.Ribbon>
          </div>
        ) : (
          children
        )}
      </Badge>
    </div>
  );
};

export default AppBadge;
