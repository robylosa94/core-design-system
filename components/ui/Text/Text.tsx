import { FC } from "react";
import cn from "classnames";
import s from "./Text.module.css";

interface Props {
  size?: "lg" | "xl" | "2xl";
  className?: string;
}

const Text: FC<Props> = ({ size = "base", className, children }) => {
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
