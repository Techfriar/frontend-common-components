import React from "react";
import { Layout, Menu } from "antd";
import "./app-sidebar.css";

const { Sider } = Layout;

interface SidebarProps {
  links: {
    onClick?: () => void;
    label: string;
    path: string;
    icon: React.ReactNode;
    activeIcon?: React.ReactNode;
    tag?: React.ReactNode;
  }[];
  sideBarHead?: React.ReactNode;
  footerLinks?: {
    label: string;
    path: string;
    icon: React.ReactNode;
    activeIcon?: React.ReactNode;
  }[];
  className?: string;
  activeLink?: string;
}

const Sidebar = ({
  links,
  sideBarHead,
  footerLinks,
  className,
  activeLink,
}: SidebarProps) => {
  const handleNavigation = (path: string) => {
    if (path) {
      window.location.href = path;
    }
  };

  const handleClick = (path: string, onClick?: () => void) => {
    if (onClick) {
      onClick();
    } else {
      handleNavigation(path);
    }
  };

  const menuItems = links.map((link) => ({
    key: link.path || link.label,
    icon:
      link.path === activeLink && link.activeIcon ? link.activeIcon : link.icon,
    className: link.path === activeLink ? "active" : "",
    label: (
      <span onClick={() => handleClick(link.path, link.onClick)}>
        <span>{link.label}</span>
        {link.tag && <span className={"tag"}>{link.tag}</span>}
      </span>
    ),
  }));

  const footerMenuItems = footerLinks?.map((link) => ({
    key: link.path,
    icon:
      link.path === activeLink && link.activeIcon ? link.activeIcon : link.icon,
    className: link.path === activeLink ? "active" : "",
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
