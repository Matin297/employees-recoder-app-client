import styled from "styled-components";
import { usePageTitle } from "contexts/page-title-context";

import Typography from "components/Typography";

type AppBarPropTypes = {
  title?: string;
};

const CustomNav = styled.nav`
  padding: ${({ theme }) =>
    `${theme.sizes.toRem(16)} ${theme.sizes.toRem(10)}`};
`;

function AppBar({ title }: AppBarPropTypes) {
  const [{ pageTitle: contextPageTitle }] = usePageTitle();

  return (
    <CustomNav>
      <Typography variant="h1" color="primary">
        {title || contextPageTitle}
      </Typography>
    </CustomNav>
  );
}

export default AppBar;
