import styled from 'styled-components';
import Grid from './Grid';
import Typography from './Typography';

type InputProps = {
    label?: string
    error?: boolean
    id: string
    helperText?: string
    placeholder?: string
    color: 'primary' | 'secondry' | 'default'
}

const CustomInput = styled.input<InputProps>`
    font-weight: 600;
    transition: all ${({ theme }) => theme.animation.transition}ms ease-in-out;
    border: 1px solid ${({ theme }) => theme.colors.grey[300]};
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
        top: -25px
    }

    & + label > p {
        transition: all ${({ theme }) => theme.animation.transition}ms ease-in-out;
    }

    &:focus + label > p {
        color: ${({ theme, color }) => theme.colors[color][700]};
    }
`;

const CustomGrid = styled(Grid)`
    position: relative;
    margin-top: 25px;
`

function Input({ label, id, helperText, error, ...props }: InputProps) {
    return (
        <CustomGrid container direction="column">
            <CustomInput id={id} {...props} />
            <label htmlFor={id}> <Typography>{label}</Typography> </label>
            {helperText && <span> {helperText} </span>}
        </CustomGrid>
    )
}

Input.defaultProps = {
    color: 'default'
}

export default Input;