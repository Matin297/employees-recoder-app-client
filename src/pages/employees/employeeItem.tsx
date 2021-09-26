import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { EmployeeType } from 'types/employee-types'

import Grid from 'components/Grid';
import Button from 'components/Button';
import Typography from 'components/Typography';
import TrashIcon from 'components/Icons/Trash';
import EyeIcon from 'components/Icons/Eye';

function employeeToString({ first_name, last_name }: EmployeeType) {
    return `${first_name} ${last_name}`;
}

const EmployeeItemWrapper = styled.li`
    padding: ${({theme}) => theme.sizes.toRem(10)} 0;

    &:not(:first-child) {
        border-top: 1px solid ${({theme}) => theme.colors.primary[700]};
    }

    p {
        font-size: ${({theme}) => theme.sizes.toRem(20)};
        font-weight: 600;
    }

    span {
        font-weight: 500;
    }
`;

function EmployeeItem({ employee }: { employee: EmployeeType }) {
    return (
        <EmployeeItemWrapper>
            <Grid container justify="space-between" align="center">
                <div>
                    <Typography>{employeeToString(employee)}</Typography>
                    <Typography component="span">{employee.role}</Typography>
                </div>
                <Grid container>
                    <Button variant="outlined" color="primary"> <TrashIcon /> </Button>
                    <Link to={`/${employee._id}/edit`}>
                        <Button variant="outlined" color="primary"> <EyeIcon /> </Button>
                    </Link>
                </Grid>
            </Grid>
        </EmployeeItemWrapper>
    )
}

export default EmployeeItem;