import React from "react";
import { Spin, Skeleton } from "antd";
import "./app-loader.css";

type LoaderType = "spinner" | "skeleton" | "custom";

interface AppLoaderProps {
  type?: LoaderType;
  customLoader?: React.ReactNode;
  className?: string;
}

const AppLoader = ({ type, customLoader, className }: AppLoaderProps) => {
  const loaderType: LoaderType = customLoader ? "custom" : type || "spinner";

  switch (loaderType) {
    case "spinner":
      return <Spin className={`loader ${className}`} />;
    case "skeleton":
      return <Skeleton active className={`loader ${className}`} />;
    case "custom":
      return customLoader || <Spin className={`loader ${className}`} />;
    default:
      return <Spin className={`loader ${className}`} />;
  }
};

export default AppLoader;
