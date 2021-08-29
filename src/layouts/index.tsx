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
    section {
        padding: ${({theme}) => theme.sizes.toRem(10)};
    }
`

function MainLayout({ children, title }: MainLayoutProps) {
    return (
        <MainLayoutWrapper> 
            <AppBar title={title} />
            <SideMenu />
            <section>{children}</section>
        </MainLayoutWrapper>
    )
}

export default MainLayout;
