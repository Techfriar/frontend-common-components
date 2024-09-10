import "./app-label.css";

interface AppLabelProps {
  text: string;
  htmlFor?: string;
  color?: string;
  fontSize?: string;
  className?: string;
}

const AppLabel = ({
  text,
  htmlFor,
  color = "inherit",
  fontSize = "inherit",
  className,
}: AppLabelProps) => {
  const labelStyle = {
    color,
    fontSize,
  };

  return (
    <label
      htmlFor={htmlFor}
      className={`label ${className}`}
      style={labelStyle}
    >
      {text}
    </label>
  );
};

export default AppLabel;
