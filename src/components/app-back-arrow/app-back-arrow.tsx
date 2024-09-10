import React from "react";
import Icons from "../../themes/icons/icons";
import "./app-back-arrow.css";

interface BackArrowProps {
  text?: string;
  href: string;
  className?: string;
  backIcon?: React.ReactNode;
}

const AppBackArrow = ({
  text = "Back",
  href,
  className,
  backIcon,
}: BackArrowProps) => {
  const handleNavigation = () => {
    window.location.href = href;
  };

  return (
    <div className={`backArrow ${className}`} onClick={handleNavigation}>
      <span className={"icon"}>{backIcon || Icons.backArrow}</span>
      {text && <span className={"text"}>{text}</span>}
    </div>
  );
};

export default AppBackArrow;
