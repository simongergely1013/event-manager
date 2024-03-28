import React, { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const style = {
    position: "absolute' as 'absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  };

const DeleteEventButton = ({deleteEvent}: any) => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleDeleteEvent = () => {
      deleteEvent();
      handleClose();
    }
  
    return (
      <div>
        <Button onClick={handleOpen} startIcon={<DeleteIcon />}>Törlés</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{marginBottom: 3, color:"black"}}>
             Biztos, hogy törli az eseményt?
            </Typography>
            <div className="flex gap">
              <Button onClick={handleDeleteEvent} variant="outlined" sx={{marginRight: 1}}>Igen</Button>
              <Button onClick={handleClose} variant="outlined">Mégsem</Button>
            </div>
          </Box>
        </Modal>
      </div>
    );
  }

export default DeleteEventButton;