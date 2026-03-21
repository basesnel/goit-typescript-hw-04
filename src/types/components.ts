import type { ReactNode } from "react";
import type { ButtonHTMLAttributes } from "react";
import type { InputHTMLAttributes } from "react";
import type { LiHTMLAttributes } from "react";

type ChildrenProps = {
  children: ReactNode;
};

type CardTitle = {
  title: ReactNode;
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  full?: boolean;
}

type CaptionProps = {
  label: string;
  note: string;
};

type CardProps = CardTitle & ChildrenProps;

type FlexBox = {
  direction?: "row-reverse" | "column" | "column-reverse";
  align?: "stretch" | "flex-start" | "flex-end" | "baseline";
  wrapped?: "wrap" | "nowrap" | "wrap-reverse";
};

type FlexBoxProps = FlexBox & ChildrenProps;

type HLevel = {
  level: number;
};

type Hprops = HLevel & ChildrenProps;

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

type ObserverV1Props = {
  children: ReactNode;
  onContentEndVisible: () => void;
};

export type {
  ButtonProps,
  CaptionProps,
  CardProps,
  ChildrenProps,
  FlexBoxProps,
  Hprops,
  InputProps,
  ItemProps,
  ItemFlexProps,
  ItemTextProps,
  ListProps,
  ObserverV1Props,
};
