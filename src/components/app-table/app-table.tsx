import { Table, TableProps } from "antd";
import { ColumnsType } from "antd/lib/table";

interface AppTableProps<T> extends TableProps<T> {
  columns: ColumnsType<T>;
  dataSource: T[];
  rowKey?: string;
  bordered?: boolean;
  pagination?: TableProps<T>["pagination"];
  size?: "small" | "middle" | "large";
  scroll?: TableProps<T>["scroll"];
  className?: string;
}

const AppTable = <T extends object>({
  columns,
  dataSource,
  rowKey,
  bordered = false,
  pagination = { pageSize: 10 },
  size = "middle",
  scroll,
  className,
  ...tableProps
}: AppTableProps<T>) => {
  return (
    <div className={className}>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowKey={rowKey}
        bordered={bordered}
        pagination={pagination}
        size={size}
        scroll={scroll}
        {...tableProps}
      />
    </div>
  );
};

export default AppTable;
