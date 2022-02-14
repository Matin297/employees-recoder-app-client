import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import Grid from "./Grid";
import Typography from "./Typography";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  error?: boolean;
  helperText?: string;
  color: "primary" | "secondry" | "default";
}

const CustomInput = styled.input<InputProps>`
  font-weight: 600;
  transition: all ${({ theme }) => theme.animation.transition}ms ease-in-out;
  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors.error[500] : theme.colors.grey[300]};
  border-radius: 4px;
  padding: ${({ theme }) => theme.sizes.toRem(10)};
  outline: none;

  &:focus {
    border: 1px solid ${({ theme, color }) => theme.colors[color][700]};
  }
  &::placeholder {
    font-weight: 400;
  }

  & + label {
    position: absolute;
    top: -25px;
  }

  & + label > p {
    transition: all ${({ theme }) => theme.animation.transition}ms ease-in-out;
  }

  & + label > p,
  &:focus + label > p {
    color: ${({ theme, error, color }) =>
      error ? theme.colors.error[500] : theme.colors[color][700]};
  }
`;

const CustomGrid = styled(Grid)`
  position: relative;
  margin-top: 25px;
`;

function Input({
  label,
  id,
  helperText,
  color = "default",
  ...props
}: InputProps) {
  return (
    <CustomGrid container direction="column">
      <CustomInput id={id} color={color} {...props} />
      <label htmlFor={id}>
        <Typography>{label}</Typography>
      </label>
      {helperText && (
        <Typography variant="body2" color={props.error ? "error" : "default"}>
          {helperText}
        </Typography>
      )}
    </CustomGrid>
  );
}

export default Input;
