import { Link } from "react-router-dom";
import styled from "styled-components";

import { EmployeeType } from "types/employee-types";

import Grid from "components/Grid";
import Button from "components/Button";
import Typography from "components/Typography";
import TrashIcon from "components/Icons/Trash";
import EyeIcon from "components/Icons/Eye";

function employeeToString({ first_name, last_name }: EmployeeType) {
  return `${first_name} ${last_name}`;
}

const EmployeeItemWrapper = styled.li`
  padding: ${({ theme }) => theme.sizes.toRem(10)} 0;

  &:not(:first-child) {
    border-top: 1px solid ${({ theme }) => theme.colors.primary[700]};
  }
`;

function EmployeeItem({ employee }: { employee: EmployeeType }) {
  return (
    <EmployeeItemWrapper>
      <Grid container justifyContent="space-between" alignItems="center">
        <div>
          <Typography variant="h5">{employeeToString(employee)}</Typography>
          <Typography variant="body1">{employee.role}</Typography>
        </div>
        <Grid container>
          <Button variant="outlined" color="primary">
            {" "}
            <TrashIcon />{" "}
          </Button>
          <Link to={`/${employee._id}/edit`}>
            <Button variant="outlined" color="primary">
              {" "}
              <EyeIcon />{" "}
            </Button>
          </Link>
        </Grid>
      </Grid>
    </EmployeeItemWrapper>
  );
}

export default EmployeeItem;
