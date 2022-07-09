import * as React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Checkbox,
  Modal,
  TextField,
  useMediaQuery,
} from "@mui/material";

import { AccessAlarm, PlayDisabled, ThreeDRotation } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useState } from "react";

import { useDispatch } from "react-redux";
import {
  deleteTask,
  editTask,
  checkedTask,
} from "../../Redux/actions/task.action";
import { textAlign } from "@mui/system";

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
export default function Task({ id, title, text, status }) {
  const dispatch = useDispatch();

  const isActive = useMediaQuery("(max-width: 620px)");

  const [newTitle, setNewTitle] = useState(title);
  const [newText, setNewText] = useState(text);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function deleteTaskT(id) {
    dispatch(deleteTask(id));
  }

  function editHandler(id, newTitle, newText) {
    dispatch(editTask(id, newTitle, newText));
    handleClose();
  }

  function checkTask(id) {
    dispatch(checkedTask(id));
  }

  return (
    <>
      <Card id={id} sx={isActive ? { minWidth: 350 } : { minWidth: 550 }}>
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
              sx={
                status
                  ? { textDecoration: "line-through", marginRight: "10px" }
                  : { marginRight: "10px", textDecoration: "none" }
              }
            >
              {title}
            </Typography>
          </div>
          <div>
            <Typography
              variant="body2"
              sx={
                status
                  ? { textDecoration: "line-through", marginRight: "10px" }
                  : { marginRight: "10px", textDecoration: "none" }
              }
            >
              {text}
            </Typography>
          </div>
          <div>
            <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Checkbox onClick={() => checkTask(id)} />
              <Button
                sx={{ width: "24px", padding: 0, margin: 0 }}
                disabled={Boolean(status)}
              >
                <EditIcon id={id} onClick={handleOpen} />
              </Button>

              <Button id={id} sx={{ width: "24px", padding: 0, margin: 0 }}>
                <DeleteIcon onClick={() => deleteTaskT(id)} />
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
          <TextField
            onChange={(event) => setNewTitle(event.target.value)}
            value={newTitle}
            id="standard-basic"
            label="Title"
            variant="standard"
          />
          <TextField
            onChange={(event) => setNewText(event.target.value)}
            value={newText}
            id="standard-basic"
            label="Description"
            variant="standard"
          />
          <Button
            id={id}
            size="small"
            onClick={() => editHandler(id, newTitle, newText)}
          >
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
