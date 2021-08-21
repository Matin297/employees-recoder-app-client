import { ReactNode } from "react";
import styled from "styled-components";
// COMPONENTS
import AppBar from './appbar';
import SideMenu from './sidemenu';

type MainLayoutProps = {
    children: ReactNode,
    title?: string
}

const MainLayoutWrapper = styled.main`
    padding: ${({theme}) => theme.sizes.toRem(8)};
`

function MainLayout({ children, title }: MainLayoutProps) {
    return (
        <MainLayoutWrapper> 
            <AppBar title={title} />
            <SideMenu />
            {children} 
        </MainLayoutWrapper>
    )
}

export default MainLayout;
