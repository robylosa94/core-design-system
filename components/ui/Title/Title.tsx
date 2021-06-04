import { FC, JSXElementConstructor } from "react";

import cn from "classnames";
import s from "./Title.module.css";

interface Props {
  size?: "lg" | "xl" | "2xl";
  Component?: string | JSXElementConstructor<any>;
  className?: string;
}

const Title: FC<Props> = ({
  size = "base",
  Component = "h2",
  className,
  children,
}) => {
  const rootClassName = cn(
    s.root,
    {
      [s.xl]: size === "xl",
      [s.lg]: size === "lg",
      [s.md]: size === "md",
      [s.base]: size === "base",
      [s.sm]: size === "sm",
      [s.xs]: size === "xs",
    },
    className
  );
  return <Component className={rootClassName}>{children}</Component>;
};

export default Title;
