import { Progress } from "antd";

interface AppProgressProps {
  percent: number;
  type?: "line" | "circle" | "dashboard";
  strokeColor?: string;
  trailColor?: string;
  size?: "default" | "small";
  status?: "success" | "exception" | "normal" | "active";
  showInfo?: boolean;
  className?: string;
}

const AppProgress = ({
  percent,
  type = "line",
  strokeColor,
  trailColor,
  size = "default",
  status,
  showInfo = true,
  className,
}: AppProgressProps) => {
  return (
    <div className={className}>
      <Progress
        percent={percent}
        type={type}
        strokeColor={strokeColor}
        trailColor={trailColor}
        size={size}
        status={status}
        showInfo={showInfo}
      />
    </div>
  );
};

export default AppProgress;
