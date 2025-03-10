import { Breadcrumb, BreadcrumbProps } from "antd";

interface AppBreadcrumbProps extends BreadcrumbProps {
  className?: string;
}

const AppBreadcrumb = ({ className, ...props }: AppBreadcrumbProps) => {
  return (
    <div className={className}>
      <Breadcrumb {...props} />
    </div>
  );
};

export default AppBreadcrumb;
