import React, { useContext, useEffect } from "react";
import Button from "@mui/material/Button";
// import FolderIcon from "@mui/icons-material/Folder";
import Typography from "@mui/material/Typography";

import { CarsContext } from "../components/contexts/car.context";
import { UIContext } from "../components/contexts/UI.context";

import CarsList from "../components/CarsList";

function CarsListPage() {
  const { cars, fetchCars, deleteCar } = useContext(CarsContext);
  const { showMessage } = useContext(UIContext);

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  const deleteHandler = (id) => {
    deleteCar(id);
  };

  return (
    <>
      <Typography variant="h3" component="h2">
        Cars
      </Typography>
      <Button
        onClick={() =>
          showMessage({
            type: "warning",
            string: "This is a warning.",
          })
        }
      >
        Show Message
      </Button>
      <CarsList cars={cars} deleteHandler={deleteHandler} />
    </>
  );
}

export default CarsListPage;
