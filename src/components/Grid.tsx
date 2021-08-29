import { ReactNode, ElementType } from 'react';
import styled, { css } from 'styled-components';

type GridProps = {
    children: ReactNode
    gap: number
    container?: boolean
    item?: boolean
    justify?: "space-between" | string
    align?: string
    alignself?: string
    direction?: string
    wrap?: string
    as?: ElementType
}

const GridWrapper = styled.div<GridProps>`
    ${
        ({container, theme, gap, justify, align, direction, wrap}) =>
            container &&
            css`
                display: flex;
                gap: ${theme.sizes.remUnit * gap}px;
                justify-content: ${justify};
                align-items: ${align};
                flex-direction: ${direction};
                flex-wrap: ${wrap};
            `
    }
    ${
        ({item, alignself}) =>
            item &&
            css`
                align-self: ${alignself};
            `
    }
`

function Grid({children, ...props}: GridProps) {
    return (
        <GridWrapper {...props}>{children}</GridWrapper>
    )
}

Grid.defaultProps = {
    gap: 0.5,
    direction: 'row'
}

export default Grid;
