import React from "react";
import { Layout, Menu } from "antd";
import "./app-sidebar.css";

const { Sider } = Layout;

interface SidebarProps {
  links: {
    label: string;
    path: string;
    icon: React.ReactNode;
    tag?: React.ReactNode;
  }[];
  sideBarHead?: React.ReactNode;
  footerLinks?: {
    label: string;
    path: string;
    icon: React.ReactNode;
  }[];
  className?: string;
}

const Sidebar = ({
  links,
  sideBarHead,
  footerLinks,
  className,
}: SidebarProps) => {
  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  const menuItems = links.map((link) => ({
    key: link.path,
    icon: link.icon,
    label: (
      <span onClick={() => handleNavigation(link.path)}>
        {link.label}
        {link.tag && <span className={"tag"}>{link.tag}</span>}
      </span>
    ),
  }));

  const footerMenuItems = footerLinks?.map((link) => ({
    key: link.path,
    icon: link.icon,
    label: (
      <span onClick={() => handleNavigation(link.path)}>{link.label}</span>
    ),
  }));

  return (
    <div className={`sideBar ${className}`}>
      <Sider className={"sider"}>
        <div className={"sideBarHead"}>{sideBarHead}</div>
        <Menu mode="inline" className={"menu"} items={menuItems} />
        {footerLinks && (
          <div className={"footer"}>
            <Menu mode="inline" items={footerMenuItems} />
          </div>
        )}
      </Sider>
    </div>
  );
};

export default Sidebar;
