import React, { useContext, useEffect } from "react";
// import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
// import FolderIcon from "@mui/icons-material/Folder";
import Typography from "@mui/material/Typography";

import { CarsContext } from "../components/contexts/car.context";

import CarsList from "../components/CarsList";

function CarsListPage() {
  const { cars, fetchCars, deleteCar } = useContext(CarsContext);

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
      <CarsList cars={cars} deleteHandler={deleteHandler} />
    </>
  );
}

export default CarsListPage;
