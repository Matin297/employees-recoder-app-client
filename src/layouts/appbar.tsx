import styled from "styled-components";
import { usePageTitle } from "contexts/page-title-context";

import Typography from "components/Typography";

type AppBarPropTypes = {
  title?: string;
};

const CustomNav = styled.nav`
  padding: ${({ theme }) => theme.sizes.toRem(16)}
    ${({ theme }) => theme.sizes.toRem(10)};

  > h1 {
    color: ${({ theme }) => theme.colors.primary[800]};
  }
`;

function AppBar({ title }: AppBarPropTypes) {
  const { title: contextPageTitle } = usePageTitle();

  return (
    <CustomNav>
      <Typography variant="h1"> {title || contextPageTitle} </Typography>
    </CustomNav>
  );
}

export default AppBar;
