import React from "react";
import { Card } from "antd";
import { CardProps } from "antd/lib/card";
import "./app-card.css";

interface AppCardProps extends CardProps {
  title?: React.ReactNode;
  extra?: React.ReactNode;
  cover?: React.ReactNode;
  hoverable?: boolean;
  actions?: React.ReactNode[];
  className?: string;
  borderless?: boolean;
}

const AppCard = ({
  title,
  extra,
  cover,
  hoverable = false,
  actions,
  className,
  borderless,
  ...cardProps
}: AppCardProps) => {
  return (
    <div className={`appCard ${className}`}>
      <Card
        title={title}
        extra={extra}
        cover={cover}
        hoverable={hoverable}
        className={`${borderless ? "borderless" : ""}`}
        actions={actions}
        {...cardProps}
      >
        {cardProps.children}
      </Card>
    </div>
  );
};

export default AppCard;
