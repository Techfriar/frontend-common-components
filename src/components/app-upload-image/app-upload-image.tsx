import React, { useState, useRef } from "react";
import Icons from "../../themes/icons/icons";
import "./app-upload-image.css";

interface AppUploadImageProps {
  className?: string;
  uploadIcon?: React.ReactNode;
  value?: string;
  text?: string;
  onFileChange?: (file: File | null) => void;
  alertMessages?: {
    invalidType?: string;
    sizeExceed?: string;
  };
  acceptedFormats?: string[];
  maxSizeMb?: number;
  altText?: string;
}

const AppUploadImage = ({
  className,
  uploadIcon,
  value = "",
  text = "Upload Image",
  onFileChange,
  alertMessages = {
    invalidType: "You can only upload JPG/PNG/SVG file!",
    sizeExceed: "Image must be smaller than 2MB!",
  },
  acceptedFormats = ["image/jpeg", "image/png", "image/svg+xml"],
  maxSizeMb = 2,
  altText = "Profile Image",
}: AppUploadImageProps) => {
  const [imageUrl, setImageUrl] = useState<string>(value);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const isAcceptedFormat = acceptedFormats.includes(file.type);
      const isLtMaxSize = file.size / 1024 / 1024 < maxSizeMb;

      if (!isAcceptedFormat) {
        alert(alertMessages.invalidType);
        return;
      }

      if (!isLtMaxSize) {
        alert(alertMessages.sizeExceed);
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
        if (onFileChange) {
          onFileChange(file);
        }
      };
      reader.readAsDataURL(file);
    } else if (onFileChange) {
      onFileChange(null);
    }
  };

  return (
    <div className={`profileImageContainer ${className}`}>
      <div className={imageUrl === "" ? "altTextWrapper" : ""}>
        <img className={"profileImage"} src={imageUrl} alt={altText} />
      </div>
      <button className={"uploadButton"} onClick={handleButtonClick}>
        <span>{uploadIcon || Icons.uploadIcon}</span>
        {text}
      </button>
      <input
        type="file"
        accept={acceptedFormats.join(",")}
        className={"fileInput"}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default AppUploadImage;
