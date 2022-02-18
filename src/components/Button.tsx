import { ComponentPropsWithRef } from "react";
import styled, { css } from "styled-components";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  variant?: "outlined" | "text" | "filled";
  color?: "default" | "primary" | "secondry";
}

const CustomButton = styled.button<ButtonProps>`
  ${({ theme, variant, color }) =>
    variant === "outlined" &&
    color &&
    css`
      border: 1px solid ${theme.colors[color][700]}};
      color: ${theme.colors[color][700]}}
    `}
  ${({ theme, variant, color }) =>
    variant === "filled" &&
    color &&
    css`
      background-color: ${theme.colors[color][700]};
      color: ${theme.colors.button[color]};
    `}
    ${({ theme, variant, color }) =>
    variant === "text" &&
    color &&
    css`
      color: ${theme.colors[color][700]};
    `}
`;

function Button({
  children,
  color = "default",
  variant = "text",
  ...props
}: ButtonProps) {
  return (
    <CustomButton color={color} variant={variant} {...props}>
      {children}
    </CustomButton>
  );
}

export default Button;
