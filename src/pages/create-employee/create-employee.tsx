import { useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import axios from 'axios';

import { API_CONFIG } from 'configs/api'

import Grid from 'components/Grid';
import Input from 'components/Input';
import Button from 'components/Button';

function SubmitEmployeePage({ history }: RouteComponentProps) {
    const [errors, setErrors] = useState({} as {
        first_name?: string;
        last_name?: string;
        role?: string;
    })

    // TODO -> adds validations and request to server to create one employee
    const onSubmitEmployeeHandler = (e: Event) => {
        e.preventDefault();

        const { first_name, last_name, role } = (e.target! as HTMLFormElement).elements as HTMLFormControlsCollection & {
            first_name: HTMLInputElement;
            last_name: HTMLInputElement;
            role: HTMLInputElement;
        }

        axios
            .post(API_CONFIG.record.path, {
                first_name: first_name.value,
                last_name: last_name.value,
                role: role.value
            })
            .then(res => {
                if (res.status === 201)
                    history.push('/');
            })
            .catch(err => {
                if (err.response?.data?.error)
                    setErrors(err.response?.data?.error)
                else
                    alert(err)
            })
    }

    return (
        <Grid container direction="column" as="form" gap={1} onSubmit={onSubmitEmployeeHandler}>
            <Input 
                error={Boolean(errors.first_name)} 
                helperText={errors.first_name}
                label="First Name" 
                id="first_name" 
                placeholder="Matin..." 
                color="primary" 
            />
            <Input 
                error={Boolean(errors.last_name)} 
                helperText={errors.last_name}
                label="Last Name" 
                id="last_name" 
                placeholder="Mir..." 
                color="primary" 
            />
            <Input 
                error={Boolean(errors.role)} 
                helperText={errors.role}
                label="Role" 
                id="role" 
                placeholder="Frontend Engineer..." 
                color="primary" 
            />

            <Button variant="filled" color="primary"> Submit </Button>
        </Grid>
    )
}

export default SubmitEmployeePage;