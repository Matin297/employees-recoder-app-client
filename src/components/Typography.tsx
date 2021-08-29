import { ReactNode } from "react";
import styled from 'styled-components';

type TypographyProps = {
    children: ReactNode
    component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
    color: 'default' | 'primary' | 'secondry'
    className?: string
}

const TYPOGRAPHY_MAP = {
    'h1': styled.h1<TypographyProps>`
        font-size: ${({theme}) => theme.sizes.toRem(40)};
        color: ${({ color, theme }) => theme.colors[color][700]};
    `,
    'h2': styled.h2<TypographyProps>`
        font-size: ${({theme}) => theme.sizes.toRem(35)};
        color: ${({ color, theme }) => theme.colors[color][700]};
    `,
    'h3': styled.h3<TypographyProps>`
        font-size: ${({theme}) => theme.sizes.toRem(30)};
        color: ${({ color, theme }) => theme.colors[color][700]};
    `,
    'h4': styled.h4<TypographyProps>`
        font-size: ${({theme}) => theme.sizes.toRem(25)};
        color: ${({ color, theme }) => theme.colors[color][700]};
    `,
    'h5': styled.h5<TypographyProps>`
        font-size: ${({theme}) => theme.sizes.toRem(20)};
        color: ${({ color, theme }) => theme.colors[color][700]};
    `,
    'h6': styled.h6<TypographyProps>`
        font-size: ${({theme}) => theme.sizes.toRem(18)};
        color: ${({ color, theme }) => theme.colors[color][700]};
    `,
    'p': styled.p<TypographyProps>`
        font-size: ${({theme}) => theme.sizes.toRem(16)};
        color: ${({ color, theme }) => theme.colors[color][700]};
    `,
    'span': styled.span<TypographyProps>`
        font-size: ${({theme}) => theme.sizes.toRem(12)};
        color: ${({ color, theme }) => theme.colors[color][700]};
    `,
}

function Typography({ component = 'p', color = 'default', children, className }: TypographyProps) {
    const Component = TYPOGRAPHY_MAP[component];
    return <Component className={className} color={color}>{children}</Component>
}

Typography.defaultProps = {
    component: 'p', 
    color: 'default'
}

export default Typography;