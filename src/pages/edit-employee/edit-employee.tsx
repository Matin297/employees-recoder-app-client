import { useEffect, FormEvent } from "react";
import { RouteComponentProps } from "react-router-dom";
import axios from "axios";

import { API_CONFIG } from "configs/api";
import { usePageTitle } from "contexts/page-title-context";
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

function EditEmployeePage({
  match,
  history,
}: RouteComponentProps<{ id: string }>) {
  const [{ setPageTitle }] = usePageTitle();
  const { formValues, setFormValues, formErrors, setFormErrors, onChange } =
    useFormState<FormStateType>(INITIAL_STATE, INITIAL_ERRS);

  useEffect(() => {
    axios
      .get(`${API_CONFIG.record.path}/${match.params.id}`)
      .then((res) => {
        if (res.status === 200) {
          setPageTitle(res.data.first_name);
          setFormValues(res.data);
        }
      })
      .catch((err) => alert(err));
  }, [setPageTitle, match, setFormValues]);

  function onSubmitEditHandler(e: FormEvent) {
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
      .patch(`${API_CONFIG.record.path}/${match.params.id}`, {
        first_name: first_name.value,
        last_name: last_name.value,
        role: role.value,
      })
      .then((res) => {
        if (res.status === 200) history.push("/");
      })
      .catch((err) => {
        if (err.response.data.error) setFormErrors(err.response.data.error);
        else alert(err);
      });
  }

  return (
    <Grid
      container
      direction="column"
      as="form"
      gap={1}
      onSubmit={onSubmitEditHandler}
    >
      <Input
        label="First Name"
        id="first_name"
        name="first_name"
        placeholder="Matin..."
        color="primary"
        value={formValues.first_name}
        onChange={onChange}
        helperText={formErrors.first_name}
        error={Boolean(formErrors.first_name)}
      />
      <Input
        label="Last Name"
        id="last_name"
        name="last_name"
        placeholder="Mir..."
        color="primary"
        value={formValues.last_name}
        onChange={onChange}
        helperText={formErrors.last_name}
        error={Boolean(formErrors.last_name)}
      />
      <Input
        label="Role"
        id="role"
        name="role"
        placeholder="Frontend Engineer..."
        color="primary"
        value={formValues.role}
        onChange={onChange}
        helperText={formErrors.role}
        error={Boolean(formErrors.role)}
      />

      <Button variant="filled" color="primary">
        Submit
      </Button>
    </Grid>
  );
}

export default EditEmployeePage;
