type ContainerProps = {
  children: React.ReactNode;
};

type FlexBoxProps = {
  direction?: "row-reverse" | "column" | "column-reverse";
  align?: "stretch" | "flex-start" | "flex-end" | "baseline";
  wrapped?: "wrap" | "nowrap" | "wrap-reverse";
  children: React.ReactNode[];
};

type GridProps = {
  children: React.ReactNode;
};

export type { ContainerProps, FlexBoxProps, GridProps };
