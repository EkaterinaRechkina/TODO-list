import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Checkbox } from "@mui/material";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};
export default function Task({ title, text }) {
  const [state, setState] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function editHandler(event) {
    event.preventDefault();
  }

  return (
    <>
      <Card sx={{ minWidth: 550 }}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Typography
              variant="h5"
              component="div"
              sx={{ marginRight: "10px" }}
            >
              {title}
            </Typography>
          </div>
          <div>
            <Typography variant="body2">{text}</Typography>
          </div>
          <div>
            <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Checkbox />
              <Button sx={{ width: "24px", padding: 0, margin: 0 }}>
                <EditIcon onClick={handleOpen} />
              </Button>

              <Button sx={{ width: "24px", padding: 0, margin: 0 }}>
                <DeleteIcon />
              </Button>
            </CardActions>
          </div>
        </CardContent>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField id="standard-basic" label="Title" variant="standard" />
          <TextField
            id="standard-basic"
            label="Description"
            variant="standard"
          />
          <Button size="small" type="submit" onSubmit={editHandler}>
            Submit
          </Button>
          <Button size="small" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
}
