import { useEffect, useState } from 'react';
import { RouteComponentProps } from "react-router-dom";
import axios from 'axios';

import { API_CONFIG } from 'configs/api'
import { usePageTitle } from 'contexts/page-title-context';
import { EmployeeType } from 'types/employee-types'

import Grid from 'components/Grid';
import Input from 'components/Input';
import Button from 'components/Button';

function EditEmployeePage({ match, history }: RouteComponentProps<{id: string}>) {
    const { setTitle } = usePageTitle();
    const [employee, setEmployee] = useState({
        first_name: "",
        last_name: "",
        _id: "",
        role: ""
    } as EmployeeType)
    const [errors, setErrors] = useState({} as {
        first_name?: string;
        last_name?: string;
        role?: string;
    })

    // TODO -> Send a request in order to update the employee info
    
    useEffect(() => {
        axios
        .get(`${API_CONFIG.record.path}/${match.params.id}`)
        .then(res => {
            if (res.status === 200) {
                setTitle(res.data.first_name);
                setEmployee(res.data)
            }
        })
        .catch(err => alert(err))
    }, [setTitle, match])

    function onSubmitEditHandler(e: Event) {
        e.preventDefault();

        const { first_name, last_name, role } = (e.target! as HTMLFormElement).elements as HTMLFormControlsCollection & {
            first_name: HTMLInputElement;
            last_name: HTMLInputElement;
            role: HTMLInputElement;
        };

        axios
            .patch(`${API_CONFIG.record.path}/${match.params.id}`, {
                first_name: first_name.value,
                last_name: last_name.value,
                role: role.value
            })
            .then(res => {
                if (res.status === 200)
                    history.push("/")
            })
            .catch(err => {
                if (err?.response?.data?.error)
                    setErrors(err?.response?.data?.error)
                else alert(err)
            })
    }

    return (
        <Grid container direction="column" as="form" gap={1} onSubmit={onSubmitEditHandler}>
            <Input 
                label="First Name" 
                id="first_name" 
                placeholder="Matin..." 
                color="primary" 
                defaultValue={employee.first_name}
                helperText={errors.first_name}
                error={Boolean(errors.first_name)}
            />
            <Input 
                label="Last Name" 
                id="last_name" 
                placeholder="Mir..." 
                color="primary" 
                defaultValue={employee.last_name} 
                helperText={errors.last_name}
                error={Boolean(errors.last_name)} 
            />
            <Input 
                label="Role"    
                id="role" 
                placeholder="Frontend Engineer..." 
                color="primary" 
                defaultValue={employee.role} 
                helperText={errors.role}
                error={Boolean(errors.role)} 
            />

            <Button variant="filled" color="primary"> Submit </Button>
        </Grid>
    )
}

export default EditEmployeePage;