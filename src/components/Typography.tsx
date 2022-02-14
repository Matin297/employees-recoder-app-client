import { ComponentPropsWithoutRef, ElementType } from "react";
import styled, { css } from "styled-components";

const VARIANT_TO_COMPONENT_MAP = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
  body2: "span",
};

interface TypographyProps extends ComponentPropsWithoutRef<ElementType<any>> {
  variant?: keyof typeof VARIANT_TO_COMPONENT_MAP;
  component?: ElementType;
  color?: "default" | "primary" | "secondry" | "error";
}

const Component = styled.p<TypographyProps>`
  ${({ variant, theme }) =>
    variant &&
    css`
      font-size: ${theme.sizes.toRem(theme.sizes.typography[variant])};
    `}

  ${({ color, theme }) =>
    color &&
    css`
      color: ${theme.colors[color][700]};
    `}
`;

function Typography({
  variant = "body1",
  component,
  color = "default",
  children,
  ...props
}: TypographyProps) {
  return (
    <Component
      variant={variant}
      color={color}
      as={component || VARIANT_TO_COMPONENT_MAP[variant]}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Typography;
