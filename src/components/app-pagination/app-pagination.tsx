import React from "react";
import { Pagination } from "antd";
import { PaginationProps } from "antd/lib/pagination";

interface AppPaginationProps extends PaginationProps {
  total: number;
  currentPage: number;
  pageSize?: number;
  onPageChange: (page: number, pageSize: number) => void;
  showGotoBox: boolean;
  sizeChanger: boolean;
  className?: string;
}

const AppPagination = ({
  total,
  currentPage,
  pageSize = 10,
  onPageChange,
  showGotoBox = false,
  sizeChanger = true,
  className,
  ...rest
}: AppPaginationProps) => {
  return (
    <div className={className}>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={total}
        onChange={onPageChange}
        showSizeChanger={sizeChanger}
        showQuickJumper={showGotoBox}
        {...rest}
      />
    </div>
  );
};

export default AppPagination;
