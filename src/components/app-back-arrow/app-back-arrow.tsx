import React from "react";
import { MouseEventHandler } from "react";
import Icons from "../../themes/icons/icons";
import "./app-back-arrow.css";

interface BackArrowProps {
  text?: string;
  href?: string;
  className?: string;
  backIcon?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLElement>;
}

const AppBackArrow = ({
  text = "Back",
  href,
  className,
  backIcon,
  onClick,
}: BackArrowProps) => {
  const handleNavigation: MouseEventHandler<HTMLElement> = (event) => {
    if (onClick) {
      onClick(event);
    } else if (href) {
      window.location.href = href;
    }
  };

  return (
    <div className={`backArrow ${className}`} onClick={handleNavigation}>
      <span className={"icon"}>{backIcon || Icons.backArrow}</span>
      {text && <span className={"text"}>{text}</span>}
    </div>
  );
};

export default AppBackArrow;
