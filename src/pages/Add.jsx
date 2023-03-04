import React from "react";
import Typography from "@mui/material/Typography";
import CarForm from "../components/forms/CarForm";

function Add() {
  return (
    <>
      <Typography variant="h2" component="h1">
        Add Car
      </Typography>
      <CarForm />
    </>
  );
}

export default Add;
