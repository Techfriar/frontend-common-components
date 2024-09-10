import React from "react";
import { Avatar } from "antd";
import type { AvatarProps } from "antd";
import { UserOutlined } from "@ant-design/icons";

interface AppAvatarProps extends AvatarProps {
  fallbackIcon?: React.ReactNode;
  className?: string;
}

const AppAvatar = ({
  src,
  fallbackIcon = <UserOutlined />,
  className,
  ...props
}: AppAvatarProps) => {
  return (
    <div className={className}>
      <Avatar src={src} icon={!src ? fallbackIcon : undefined} {...props} />
    </div>
  );
};

export default AppAvatar;
