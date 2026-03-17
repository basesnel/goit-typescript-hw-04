import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  full?: boolean;
}

type CaptionProps = {
  label: string;
  note: string;
};

type CardProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

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

export type {
  ButtonProps,
  CaptionProps,
  CardProps,
  ContainerProps,
  FlexBoxProps,
  GridProps,
};
