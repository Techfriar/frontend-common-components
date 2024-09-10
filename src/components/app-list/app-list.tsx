import React from "react";
import { List, ListProps } from "antd";

interface AppListProps<T> extends ListProps<T> {
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
}

const AppList = <T extends unknown>({
  renderItem,
  dataSource,
  className,
  ...props
}: AppListProps<T>) => {
  return (
    <div className={className}>
      <List
        dataSource={dataSource}
        renderItem={(item, index) => renderItem(item, index)}
        {...props}
      />
    </div>
  );
};

export default AppList;
