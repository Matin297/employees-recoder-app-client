import {
  ComponentPropsWithoutRef,
  ElementType,
  useMemo,
  ReactNode,
} from "react";
import styled from "styled-components";

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

type TypographyProps = {
  variant?: keyof typeof VARIANT_TO_COMPONENT_MAP;
  component?: ElementType;
  color?: "default" | "primary" | "secondry";
  className?: string;
  children: ReactNode;
};

function Typography({
  variant = "body1",
  component = "p",
  color = "default",
  children,
  className,
}: TypographyProps) {
  const Component = useMemo(
    () => styled(
      component || (VARIANT_TO_COMPONENT_MAP[variant] as ElementType)
    )<ComponentPropsWithoutRef<typeof component>>`
      font-size: ${({ theme }) =>
        theme.sizes.toRem(theme.sizes.typography[variant])};
      color: ${({ theme }) => theme.colors[color][700]};
    `,
    [color, variant, component]
  );

  return <Component className={className}>{children}</Component>;
}

export default Typography;
