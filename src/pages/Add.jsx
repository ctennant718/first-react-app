import React, {useContext} from "react";
import Typography from "@mui/material/Typography";
import CarForm from "../components/forms/CarForm";
import { CarsContext } from "../components/contexts/car.context";

function Add() {
  const {addCar} = useContext(CarsContext)
  return (
    <>
      <Typography variant="h2" component="h1">
        Add Car
      </Typography>
      <CarForm submitHandler={addCar} />
    </>
  );
}

export default Add;
