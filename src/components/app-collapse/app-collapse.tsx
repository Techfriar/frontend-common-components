import React from "react";
import { Collapse } from "antd";
import { CollapseProps, CollapsePanelProps } from "antd/lib/collapse";

const { Panel } = Collapse;

interface AppCollapseProps extends CollapseProps {
  panels?: {
    key: string;
    header: React.ReactNode;
    content: React.ReactNode;
    collapsible?: CollapsePanelProps["collapsible"];
  }[];
  className?: string;
}

const AppCollapse = ({
  panels = [],
  defaultActiveKey,
  onChange,
  expandIconPosition,
  ghost,
  accordion,
  expandIcon,
  size,
  bordered,
  activeKey,
  className,
  ...restProps
}: AppCollapseProps) => {
  const items = panels.map((panel) => ({
    key: panel.key,
    label: panel.header,
    children: panel.content,
    collapsible: panel.collapsible,
  }));

  return (
    <div className={className}>
      <Collapse
        defaultActiveKey={defaultActiveKey}
        onChange={onChange}
        expandIconPosition={expandIconPosition}
        ghost={ghost}
        accordion={accordion}
        expandIcon={expandIcon}
        size={size}
        bordered={bordered}
        activeKey={activeKey}
        items={items}
        {...restProps}
      />
    </div>
  );
};

export default AppCollapse;
