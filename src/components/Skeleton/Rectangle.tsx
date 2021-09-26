import styled, { keyframes, css } from 'styled-components'

type RectangleProps = {
    width: number | string
    height: number | string
}

const shimmer = keyframes`
    100% {
      transform: translateX(100%);
    }
`

const StyledRectangle = styled.div<RectangleProps>`
    overflow: hidden;
    border-radius: 3px;
    position: relative;

    ${({ width, height, theme }) => css`
        width: ${typeof width === "number" ? width + 'px' : width};
        height: ${typeof height === "number" ? height + 'px' : height};
        background-color: ${theme.colors.grey[200]};
    `}

    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        background-image: linear-gradient(90deg, rgba(256, 256, 256, 0) 0, rgba(256, 256, 256, 0.2) 20%, rgba(256, 256, 256, 0.5) 60%, rgba(256, 256, 256, 0));
        animation: ${shimmer} 1s infinite;
    }
`

function Rectangle(props: RectangleProps) {
    return <StyledRectangle {...props} />
}

export default Rectangle