import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
// import CircularProgress from "@mui/material/CircularProgress";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@mui/material";

const schema = yup
  .object()
  .shape({
    name: yup.string().max(30).required(),
    bhp: yup.number().integer().positive().max(5000).required(),
    avatar_url: yup.string().url(),
  })
  .required();

const defaults = {
  name: "",
  bhp: "",
  avatar_url: "",
};

export default function CarForm({ car, submitHandler }) {
  // console.log(car);
  const {
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
    reset,
    //so react hook form can control MUI components
    control,
    formState,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: car || defaults,
  });

  useEffect(() => {
    console.log(formState);
  });

  //takes care of population when we feed a car in
  useEffect(() => {
    // console.log('useeffect', car);
    if (car) {
      reset(car);
    }
  }, [car, reset]);

  const formRowStyle = {
    marginBlockEnd: "1em",
  };

  let submitFn = (vals) => {
    reset();
    //if car is updated via id, or a new car value is passed
    car ? submitHandler(car._id, vals) : submitHandler(vals);
  };

  return (
    /* "handleSubmit" comes from the hook above and will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(submitFn)}>
      <div style={formRowStyle}>
        <Controller
          //allow react-hook-form and MUI to talk to each other
          control={control}
          name="name"
          defaultValue={""}
          render={({ field }) => (
            <TextField
              type="name"
              //information that comes from the controller
              {...field}
              label="name"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />
      </div>
      <div style={formRowStyle}>
        <Controller
          control={control}
          name="bhp"
          defaultValue={""}
          render={({ field }) => (
            <TextField
              type="number"
              fullWidth
              error={!!errors.bhp}
              {...field}
              label="bhp"
              pattern={/[0-9]{1,4}/}
              helperText={errors.bhp?.message}
            />
          )}
        />
      </div>

      <div style={formRowStyle}>
        <Controller
          control={control}
          name="avatar_url"
          defaultValue={""}
          render={({ field }) => (
            <TextField
              fullWidth
              type="text"
              error={!!errors.avatar_url}
              {...field}
              label="Avatar URL"
              helperText={errors.avatar_url?.message}
            />
          )}
        />
      </div>
      <div style={{ marginTop: 20 }}>
        <Button
          type="reset"
          onClick={() => reset()}
          variant="contained"
          sx={{ mr: 2 }}
          disabled={!isDirty}
        >
          Reset
        </Button>
        <Button
          type="submit"
          primary="true"
          variant="contained"
          disabled={isSubmitting || !isDirty || (isDirty && !isValid)}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
