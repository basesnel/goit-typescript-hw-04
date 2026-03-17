import type { ReactNode } from "react";
import type { ButtonHTMLAttributes } from "react";
import type { InputHTMLAttributes } from "react";
import type { LiHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  full?: boolean;
}

type CaptionProps = {
  label: string;
  note: string;
};

type CardProps = {
  title: ReactNode;
  children: ReactNode;
};

type ContainerProps = {
  children: ReactNode;
};

type FlexBoxProps = {
  direction?: "row-reverse" | "column" | "column-reverse";
  align?: "stretch" | "flex-start" | "flex-end" | "baseline";
  wrapped?: "wrap" | "nowrap" | "wrap-reverse";
  children: ReactNode[];
};

type GridProps = {
  children: ReactNode;
};

type Hprops = {
  level: number;
  children: ReactNode;
};

type HideOverFlowProps = {
  children: ReactNode;
};

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

interface ItemProps extends LiHTMLAttributes<HTMLLIElement> {}

type ItemFlexProps = {
  children: ReactNode;
  spaceBetween?: boolean;
};

export type {
  ButtonProps,
  CaptionProps,
  CardProps,
  ContainerProps,
  FlexBoxProps,
  GridProps,
  Hprops,
  HideOverFlowProps,
  InputProps,
  ItemProps,
  ItemFlexProps,
};
