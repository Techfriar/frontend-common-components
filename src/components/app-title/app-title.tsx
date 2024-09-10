import React from "react";
import { Typography } from "antd";
import "./app-title.css";

const { Title, Text } = Typography;

interface TitleProps {
  mainText: string;
  className?: string;
  subText?: string;
  level?: 1 | 2 | 3 | 4 | 5;
}

const AppTitle = ({
  mainText,
  className = "",
  subText,
  level = 1,
}: TitleProps) => {
  return (
    <div className={`titleComponent ${className}`}>
      <Title level={level}>{mainText}</Title>
      {subText && <Text className={"subText"}>{subText}</Text>}
    </div>
  );
};

export default AppTitle;
