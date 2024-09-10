import React, { useState } from "react";
import { Tag } from "antd";
import "./app-tag.css";

interface AppTagProps {
  color?: string;
  closable?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
  closeIcon?: React.ReactNode;
}

const AppTag = ({
  color,
  closable = false,
  onClick,
  style,
  className,
  children,
  closeIcon,
}: AppTagProps) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={`appTab ${className}`}>
      <Tag
        color={color}
        closable={closable}
        onClose={handleClose}
        onClick={onClick}
        style={style}
        closeIcon={closeIcon}
      >
        {children}
      </Tag>
    </div>
  );
};

export default AppTag;
