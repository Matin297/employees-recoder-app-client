import { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

import { API_CONFIG } from 'configs/api'

import { EmployeeType } from 'types/employee-types'

import RectangleSkeleton from 'components/Skeleton/Rectangle'
import Grid from 'components/Grid';
import Button from 'components/Button'

import EmployeeItem from './employeeItem';

type EmployeeState = {
    data: EmployeeType[]
    isLoading: boolean
    error?: object | string
}

const CustomGrid = styled(Grid)`
    padding: ${({theme}) => theme.sizes.toRem(10)} 0;
`

const CustomButton = styled(Button)`
    margin-bottom: ${({theme}) => theme.sizes.toRem(10)};
`

function HomePage({ history }: RouteComponentProps) {

    const [employees, setEmployees] = useState({
        data: [],
        isLoading: true
    } as EmployeeState)

    function onAddNewHandler() {
        history.push("/create-employee")
    }

    // TODO -> Requests to get a list of employees to show
    useEffect(() => {
        setEmployees(state => ({
            ...state,
            isLoading: true
        }))

        axios
            .get(`${API_CONFIG.record.path}`)
            .then(res => {
                setEmployees(state => ({
                    ...state,
                    isLoading: false
                }))

                if (res.status === 200) {
                    setEmployees(state => ({
                        ...state,
                        data: res.data
                    }))
                } else {
                    setEmployees(state => ({
                        ...state,
                        error: res.data.error
                    }))
                }
            })
            .catch(error => {
                setEmployees(state => ({
                    ...state,
                    error: `Opps, ${error.message}`,
                    isLoading: false
                }))
            })
    }, [])

    if (employees.error)
        return <p> {employees.error} </p>

    return (
        <div>
            {
                employees.isLoading ?
                <CustomGrid container direction="column" gap={1.3}>
                    {SKELETONS.map(skelet => (
                        <Grid container justify="space-between" key={skelet}>
                            <RectangleSkeleton  width={200} height={43} />
                            <Grid container>
                                <RectangleSkeleton width={42} height={42} />
                                <RectangleSkeleton width={42} height={42} />
                            </Grid>
                        </Grid>
                    ))}
                </CustomGrid> :
                <>
                    <CustomButton onClick={onAddNewHandler} variant="filled" color="primary"> Add New </CustomButton>
                    <ul>
                        {employees.data.map((employee: EmployeeType) => <EmployeeItem key={employee._id} employee={employee} />)}
                    </ul>
                </>
            }
        </div>
    )
}

export default HomePage;

const SKELETONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
