import React from "react";
import { Modal, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import "./app-modal.css";

interface AppModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  footerButtons?: React.ReactNode;
  alignTitleLeft?: boolean;
  className?: string;
  closeIcon?: React.ReactNode;
  width?: number;
}

const AppModal = ({
  visible,
  onClose,
  title,
  description,
  children,
  footerButtons,
  alignTitleLeft = false,
  className,
  closeIcon,
  width,
}: AppModalProps) => {
  return (
    <div>
      <Modal
        open={visible}
        width={width}
        onCancel={onClose}
        footer={null}
        closeIcon={closeIcon || <CloseOutlined />}
        className={className}
      >
        <div className={"header"}>
          {title && (
            <div className={alignTitleLeft ? "titleLeft" : "title"}>
              {title}
            </div>
          )}
          {description && (
            <div className={alignTitleLeft ? "descriptionLeft" : "description"}>
              {description}
            </div>
          )}
        </div>

        <div className={"body"}>{children}</div>
        {footerButtons && <div className={"footer"}>{footerButtons}</div>}
      </Modal>
    </div>
  );
};

export default AppModal;
