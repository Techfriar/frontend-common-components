import "./app-custom-loader.css";

interface AppCustomLoaderProps {
  className?: string;
}

const AppCustomLoader = ({ className }: AppCustomLoaderProps) => {
  return (
    <div className={`wrapper ${className}`}>
      <div className={"loader"}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
export default AppCustomLoader;
