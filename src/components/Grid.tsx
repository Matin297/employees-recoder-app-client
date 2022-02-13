import { ReactNode, ElementType, CSSProperties, FormEventHandler } from 'react';
import styled, { css } from 'styled-components';

interface GridProps extends CSSProperties {
    children: ReactNode
    container?: boolean
    item?: boolean
    as?: ElementType<any>
    onSubmit?: FormEventHandler
    gap?: number
}

const GridWrapper = styled.div<GridProps>`
    ${
        ({container, theme, gap, justifyContent, alignItems, flexDirection, flexWrap}) =>
            container &&
            css`
                display: flex;
                gap: ${gap ? theme.sizes.remUnit * gap : 0}px;
                justify-content: ${justifyContent};
                align-items: ${alignItems};
                flex-direction: ${flexDirection};
                flex-wrap: ${flexWrap};
            `
    }
    ${
        ({item, alignSelf}) =>
            item &&
            css`
                align-self: ${alignSelf};
            `
    }
`

function Grid({children, gap = 0.5, flexDirection = 'row', ...props}: GridProps) {
    return (
        <GridWrapper gap={gap} flexDirection={flexDirection} {...props}>{children}</GridWrapper>
    )
}

export default Grid;
