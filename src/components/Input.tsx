import React from 'react';
import styled from 'styled-components';
import Grid from './Grid';
import Typography from './Typography';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    label?: string
    error?: boolean;
    helperText?: string;
    color: 'primary' | 'secondry' | 'default';
}

const CustomInput = styled.input<InputProps>`
    font-weight: 600;
    transition: all ${({ theme }) => theme.animation.transition}ms ease-in-out;
    border: 1px solid ${({ theme, error }) => error ? theme.colors.error[500] : theme.colors.grey[300]};
    border-radius: 4px;
    padding: ${({theme}) => theme.sizes.toRem(10)};
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
        color: ${({ theme, error, color }) => error ? theme.colors.error[500] : theme.colors[color][700]};
    }
`;

const CustomGrid = styled(Grid)`
    position: relative;
    margin-top: 25px;
`

const HelperText = styled(Typography)<{ error?: boolean }>`
    color: ${({ theme, error }) => error ? theme.colors.error[500] : theme.colors.grey[700]};
`

function Input({ label, id, helperText, ...props }: InputProps) {
    return (
        <CustomGrid container direction="column">
            <CustomInput id={id} {...props} />
            <label htmlFor={id}> <Typography>{label}</Typography> </label>
            {helperText && <HelperText error={props.error} component="span">{helperText}</HelperText>}
        </CustomGrid>
    )
}

Input.defaultProps = {
    color: 'default'
}

export default Input;