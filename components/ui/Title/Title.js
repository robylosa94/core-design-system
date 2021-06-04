import cn from "classnames";
import s from "./Title.module.css";

const Title = ({ size = "base", Component = "h2", children, className }) => {
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
