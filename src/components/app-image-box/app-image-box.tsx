import { MouseEventHandler } from "react";
import { Image } from "antd";
import "./app-image-box.css";

interface ImageType {
  src: string;
}

interface AppImageBoxProps {
  width?: number;
  height?: number;
  text?: string;
  image: ImageType;
  className?: string;
  handleClick?: MouseEventHandler<HTMLElement>;
}

const AppImageBox = ({
  width = 100,
  height = 100,
  text,
  image,
  className,
  handleClick,
}: AppImageBoxProps) => {
  return (
    <div className={`appImageBox ${className}`} onClick={handleClick}>
      <Image
        preview={false}
        width={width}
        height={height}
        src={image.src}
        alt={text}
      />
      {text && (
        <span className={"text"} dangerouslySetInnerHTML={{ __html: text }} />
      )}
    </div>
  );
};

export default AppImageBox;
