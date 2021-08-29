import Grid from 'components/Grid';
import Input from 'components/Input';
import Button from 'components/Button';

function SubmitEmployeePage() {

    // TODO -> adds validations and request to server to create one employee

    return (
        <Grid container direction="column" as="form" gap={1}>
            <Input label="First Name" id="first_name" placeholder="Matin..." color="primary" />
            <Input label="Last Name" id="last_name" placeholder="Mir..." color="primary" />
            <Input label="Role" id="role" placeholder="Frontend Engineer..." color="primary" />

            <Button variant="filled" color="primary"> Submit </Button>
        </Grid>
    )
}

export default SubmitEmployeePage;