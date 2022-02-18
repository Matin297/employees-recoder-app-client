import { useState, ChangeEvent } from "react";

type StateType = {
  [props: string]: any;
};

function useFormState<T, K extends StateType = T>(
  initialState: T,
  initialErrState: K
) {
  const [value, setValue] = useState(initialState);
  const [errors, setErrors] = useState(initialErrState);

  return {
    formValues: value,
    setFormValues: setValue,
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      setValue((state) => ({ ...state, [e.target.name]: e.target.value }));
      if (errors[e.target.name])
        setErrors((state) => ({ ...state, [e.target.name]: "" }));
    },
    formErrors: errors,
    setFormErrors: setErrors,
    clearFormValues: () => setValue(initialState),
    clearFormErrors: () => setErrors(initialErrState),
  };
}
export default useFormState;
