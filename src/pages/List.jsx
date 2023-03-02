import React from "react";
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

function CarsList() {
  const cars = [
    {
      _id: 1,
      name: "Polo",
      bhp: 1234,
      avatar_url:
        "https://images.clickdealer.co.uk/blog/1311/post_images/d6c690e771f5bf59fc96fccb014d68be.jpg",
    },
    {
      _id: 2,
      name: "Mini",
      bhp: 5678,
      avatar_url:
        "https://www.topgear.com/sites/default/files/cars-car/image/2022/11/mini%20countryman.jpeg",
    },
  ];
  return (
    <>
      <Typography variant="h3" component="h2">
        Cars
      </Typography>
      <List>
        {cars.map(({ name, bhp, avatar_url, _id }, i) => (
          <ListItem key={i}>
            <ListItemAvatar>
              <Avatar alt="" src={avatar_url} />
            </ListItemAvatar>
            <ListItemText>
              {name} (BHP: {bhp})
            </ListItemText>
            <IconButton
              aria-label="update"
              to={`/update/${_id}`}
              component={Link}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              onClick={() => console.log(`Delete ${_id}`)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default CarsList;
