import React, { useState } from "react";
import {
  boxStyle,
  typographyStyles,
  buttonStyles,
} from "./DeleteEventButton.styles";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const DeleteEventButton = ({ deleteEvent }: any) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDeleteEvent = () => {
    deleteEvent();
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen} startIcon={<DeleteIcon />}>
        Törlés
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={typographyStyles}
          >
            Biztos, hogy törli az eseményt?
          </Typography>
          <div className="flex gap">
            <Button
              onClick={handleDeleteEvent}
              variant="outlined"
              sx={buttonStyles}
            >
              Igen
            </Button>
            <Button onClick={handleClose} variant="outlined">
              Mégsem
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteEventButton;
