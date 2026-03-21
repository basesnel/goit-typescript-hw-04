import type { ReactNode } from "react";
import type { ButtonHTMLAttributes } from "react";
import type { InputHTMLAttributes } from "react";
import type { LiHTMLAttributes } from "react";

type ChildrenProps = { children: ReactNode };

type CardTitle = { title: ReactNode };
type FlexBox = {
  direction?: "row-reverse" | "column" | "column-reverse";
  align?: "stretch" | "flex-start" | "flex-end" | "baseline";
  wrapped?: "wrap" | "nowrap" | "wrap-reverse";
};
type HLevel = { level: number };
type ItemFlex = { spaceBetween?: boolean };
type ObserverV1 = { onContentEndVisible: () => void };

type CardProps = CardTitle & ChildrenProps;
type FlexBoxProps = FlexBox & ChildrenProps;
type Hprops = HLevel & ChildrenProps;
type ItemFlexProps = ItemFlex & ChildrenProps;
type ObserverV1Props = ObserverV1 & ChildrenProps;

type CaptionProps = {
  label: string;
  note: string;
};

type ItemTextProps = { children: string | number };

type ListProps = {
  message: string;
  children: ReactNode[] | null;
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  full?: boolean;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

interface ItemProps extends LiHTMLAttributes<HTMLLIElement> {}

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
