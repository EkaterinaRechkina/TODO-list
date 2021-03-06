import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";

export default function Account() {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        margin: "100px auto",
        position: "relative",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://img.freepik.com/free-vector/3d-cartoon-young-woman-sitting-using-laptop-character-illustration-vector-design_40876-3101.jpg?t=st=1657304775~exp=1657305375~hmac=4382d8dd20f1539ba0155cc5d30d949b1203348b86e957ff8ca0b42351d74d2f&w=826"
          alt="avatar"
        />
        <EditIcon
          sx={{
            position: "absolute",
            top: 5,
            right: 5,
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name: {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: {email}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            About user
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
