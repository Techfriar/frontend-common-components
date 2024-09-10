import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "./app-tab.css";

interface AppTabProps {
  className?: string;
  items?: TabsProps["items"];
  handleChange?: (activeKey: string) => void;
  defaultActiveKey?: string;
}

const AppTab = ({
  className,
  items,
  handleChange,
  defaultActiveKey,
}: AppTabProps) => {
  return (
    <div className={`appTab ${className}`}>
      <Tabs
        defaultActiveKey={defaultActiveKey}
        items={items}
        onChange={handleChange}
        className={"tab"}
      />
    </div>
  );
};

export default AppTab;
