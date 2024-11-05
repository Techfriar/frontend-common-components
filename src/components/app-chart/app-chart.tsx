import React from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import "./app-chart.css";

// Register the necessary modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

type ChartType = "bar" | "line" | "pie" | "doughnut";

interface AppChartProps {
  type: ChartType;
  data: ChartData<"bar" | "line" | "pie" | "doughnut">;
  options?: ChartOptions<"bar" | "line" | "pie" | "doughnut">;
  className?: string;
  height?: number;
  width?: number;
}

const AppChart = ({
  type,
  data,
  options,
  className,
  height = 400,
  width = 600,
  ...props
}: AppChartProps) => {
  const renderChart = () => {
    switch (type) {
      case "bar":
        return (
          <Bar
            data={data as ChartData<"bar">}
            options={options as ChartOptions<"bar">}
            className={className}
          />
        );
      case "line":
        return (
          <Line
            data={data as ChartData<"line">}
            options={options as ChartOptions<"line">}
            className={className}
          />
        );
      case "pie":
        return (
          <Pie
            data={data as ChartData<"pie">}
            options={options as ChartOptions<"pie">}
            className={className}
          />
        );
      case "doughnut":
        return (
          <Doughnut
            data={data as ChartData<"doughnut">}
            options={options as ChartOptions<"doughnut">}
            className={className}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ height, width }} className={`appChart ${className}`}>
      {renderChart()}
    </div>
  );
};

export default AppChart;
