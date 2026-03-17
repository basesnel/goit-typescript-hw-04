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

type ChildrenProps = {
  children: ReactNode;
};

type FlexBoxProps = {
  direction?: "row-reverse" | "column" | "column-reverse";
  align?: "stretch" | "flex-start" | "flex-end" | "baseline";
  wrapped?: "wrap" | "nowrap" | "wrap-reverse";
  children: ReactNode[];
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

type ItemTextProps = {
  children: string | number;
};

type ListProps = {
  message: string;
  children: React.ReactNode[] | null;
};

type MainProps = {
  children: ReactNode;
};

type ObserverV1Props = {
  children: ReactNode;
  onContentEndVisible: () => void;
};

type ObserverV2Props = {
  children: ReactNode;
};

export type {
  ButtonProps,
  CaptionProps,
  CardProps,
  ChildrenProps,
  FlexBoxProps,
  Hprops,
  HideOverFlowProps,
  InputProps,
  ItemProps,
  ItemFlexProps,
  ItemTextProps,
  ListProps,
  MainProps,
  ObserverV1Props,
  ObserverV2Props,
};
