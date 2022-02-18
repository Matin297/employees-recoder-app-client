import { FormEvent } from "react";
import { RouteComponentProps } from "react-router-dom";
import axios from "axios";

import { API_CONFIG } from "configs/api";
import useFormState from "hooks/useFormState";

import Grid from "components/Grid";
import Input from "components/Input";
import Button from "components/Button";

type FormStateType = {
  first_name?: string;
  last_name?: string;
  role?: string;
};

const INITIAL_STATE = {
  first_name: "",
  last_name: "",
  role: "",
};
const INITIAL_ERRS = {};

function SubmitEmployeePage({ history }: RouteComponentProps) {
  const { formValues, formErrors, onChange, setFormErrors } =
    useFormState<FormStateType>(INITIAL_STATE, INITIAL_ERRS);

  const onSubmitEmployeeHandler = (e: FormEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      first_name: { value: string };
      last_name: { value: string };
      role: { value: string };
    };

    const { first_name, last_name, role } = target;

    const errors: FormStateType = {};

    if (!first_name.value) errors.first_name = "Firstname is required";
    if (!last_name.value) errors.last_name = "Lastname is required";
    if (!role.value) errors.role = "Role is required";

    if (Object.keys(errors).length > 0) return setFormErrors(errors);

    axios
      .post(API_CONFIG.record.path, {
        first_name: first_name.value,
        last_name: last_name.value,
        role: role.value,
      })
      .then((res) => {
        if (res.status === 201) history.push("/");
      })
      .catch((err) => {
        if (err.response.data.error) setFormErrors(err.response.data.error);
        else alert(err);
      });
  };

  return (
    <Grid
      container
      direction="column"
      as="form"
      gap={1}
      onSubmit={onSubmitEmployeeHandler}
    >
      <Input
        label="First Name"
        id="first_name"
        name="first_name"
        placeholder="Matin..."
        color="primary"
        value={formValues.first_name}
        onChange={onChange}
        error={Boolean(formErrors.first_name)}
        helperText={formErrors.first_name}
      />
      <Input
        label="Last Name"
        id="last_name"
        name="last_name"
        placeholder="Mir..."
        color="primary"
        value={formValues.last_name}
        onChange={onChange}
        error={Boolean(formErrors.last_name)}
        helperText={formErrors.last_name}
      />
      <Input
        label="Role"
        id="role"
        name="role"
        placeholder="Frontend Engineer..."
        color="primary"
        value={formValues.role}
        onChange={onChange}
        error={Boolean(formErrors.role)}
        helperText={formErrors.role}
      />

      <Button variant="filled" color="primary">
        Submit
      </Button>
    </Grid>
  );
}

export default SubmitEmployeePage;
