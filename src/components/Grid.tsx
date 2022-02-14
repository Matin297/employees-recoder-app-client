import { ReactNode, ElementType, FormEventHandler } from "react";
import styled, { css } from "styled-components";

type JustifyType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "initial"
  | "inherit";

type AlignType =
  | "stretch"
  | "center"
  | "flex-start"
  | "flex-end"
  | "baseline"
  | "initial"
  | "inherit";

type AlignSelfType = "auto" | AlignType;

type DirectionType =
  | "row"
  | "row-reverse"
  | "column"
  | "column-reverse"
  | "initial"
  | "inherit";

type WrapType = "nowrap" | "wrap" | "wrap-reverse" | "initial" | "inherit";

type GridProps = {
  children: ReactNode;
  container?: boolean;
  item?: boolean;
  as?: ElementType<any>;
  onSubmit?: FormEventHandler;
  gap?: number;
  justify?: JustifyType;
  align?: AlignType;
  direction?: DirectionType;
  wrap?: WrapType;
  alignSelf?: AlignSelfType;
};

const GridWrapper = styled.div<GridProps>`
  ${({ container, theme, gap, justify, align, direction, wrap }) =>
    container &&
    css`
      display: flex;
      gap: ${gap ? theme.sizes.remUnit * gap : 0}px;
      justify-content: ${justify};
      align-items: ${align};
      flex-direction: ${direction};
      flex-wrap: ${wrap};
    `}
  ${({ item, alignSelf }) =>
    item &&
    css`
      align-self: ${alignSelf};
    `}
`;

function Grid({ children, gap = 0.5, direction = "row", ...props }: GridProps) {
  return (
    <GridWrapper gap={gap} direction={direction} {...props}>
      {children}
    </GridWrapper>
  );
}

export default Grid;
