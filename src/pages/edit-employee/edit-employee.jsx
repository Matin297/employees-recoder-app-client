import { useLayoutEffect } from 'react';
import { usePageTitle } from 'contexts/page-title-context';

import Grid from 'components/Grid';
import Input from 'components/Input';
import Button from 'components/Button';

function EditEmployeePage({ match }) {
    const { setTitle } = usePageTitle();

    // TODO -> Send a request in order to update the employee info
    
    useLayoutEffect(() => {
        setTitle(match.params.id);
    }, [setTitle, match])

    return (
        <Grid container direction="column" as="form" gap={1}>
            <Input label="First Name" id="first_name" placeholder="Matin..." color="primary" />
            <Input label="Last Name" id="last_name" placeholder="Mir..." color="primary" />
            <Input label="Role" id="role" placeholder="Frontend Engineer..." color="primary" />

            <Button variant="filled" color="primary"> Submit </Button>
        </Grid>
    )
}

export default EditEmployeePage;