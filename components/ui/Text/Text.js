import cn from "classnames";
import s from "./Text.module.css";

const Text = ({ size = "base", children, className }) => {
  const rootClassName = cn(
    s.root,
    {
      "text-base": size === "base",
      "text-sm": size === "sm",
    },
    className
  );
  return <div className={rootClassName}>{children}</div>;
};

export default Text;
