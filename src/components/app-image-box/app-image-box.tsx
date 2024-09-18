import React from "react";
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
}

const AppImageBox = ({
  width = 100,
  height = 100,
  text = "",
  image,
  className,
}: AppImageBoxProps) => {
  return (
    <div className={`appImageBox ${className}`}>
      <Image
        preview={false}
        width={width}
        height={height}
        src={image.src}
        alt={text}
      />
      {text && (
        <span className={"text"} dangerouslySetInnerHTML={{ __html: text }}>
          {text}
        </span>
      )}
    </div>
  );
};

export default AppImageBox;
