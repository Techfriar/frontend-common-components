import { Popover } from "antd";
import { PopoverProps } from "antd/lib/popover";
import "./app-popover.css";

interface AppPopoverProps extends PopoverProps {
  content: React.ReactNode;
  title?: React.ReactNode;
  children: React.ReactNode;
  bgColor?: string;
  triggerType?: "hover" | "click";
  color?: string;
  className?: string;
}

const AppPopover = ({
  content,
  title,
  children,
  bgColor,
  color,
  triggerType = "hover",
  className,
  ...popoverProps
}: AppPopoverProps) => {
  const popoverStyle = {
    color: color ?? "inherit",
  };

  return (
    <div className={`appPopover ${className}`}>
      <Popover
        color={bgColor}
        content={<div style={popoverStyle}>{content}</div>}
        title={title ? <div style={popoverStyle}>{title}</div> : null}
        trigger={triggerType}
        overlayClassName={className}
        {...popoverProps}
      >
        <div className={"popoverComponent"}>{children}</div>
      </Popover>
    </div>
  );
};

export default AppPopover;
