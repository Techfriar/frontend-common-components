import React from "react";
import { Typography } from "antd";
import "./over-view-card.css";

const { Text } = Typography;

interface OverViewCardProps {
  className?: string;
  text?: string;
  number?: number;
}

const OverViewCard = ({ className, text, number }: OverViewCardProps) => {
  return (
    <div className={`overViewCard ${className}`}>
      <Text>{text}</Text>
      <span>{number}</span>
    </div>
  );
};

export default OverViewCard;
