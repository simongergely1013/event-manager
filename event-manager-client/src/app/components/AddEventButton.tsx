import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const style = {
    position: "absolute" as "absolute",
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
  };

const AddEventButton = ({addEvent}: any) => {
  const [open, setOpen] = useState<boolean>(false);
  const [eventTitle, setEventTitle] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddEvent = () => {
    addEvent({
      id: uuidv4(),
      start: startDate + " " + startTime,
      title: eventTitle,
      finish: endDate + " " + endTime,
      photo: null
    });
    setEventTitle("");
    setStartDate("");
    setStartTime("");
    setEndDate("");
    setEndTime("");
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>Új esemény</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
      component="form"
      sx={style}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h6" sx={{color:"black", margin:2, textAlign:"center"}}>Új esemény hozzáadása</Typography>
      <TextField onChange={(e) => setEventTitle(e.target.value)} value={eventTitle} id="outlined-basic" label="Esemény cím" variant="outlined" sx={{margin:1}}/>
      <div className="flex flex-col gap-2 m-2 text-black">
        <label>Kezdete</label>
        <div className="flex">
        <input onChange={(e) => setStartDate(e.target.value)} value={startDate} id="start-date" type="date" className="border p-2"/>
        <input onChange={(e) => setStartTime(e.target.value)} value={startTime} id="start-time" type="time" className="border p-2"/>
        </div>
      </div>
      <div className="flex flex-col gap-2 m-2 text-black">
         <label>Vége</label>
          <div className="flex">
           <input onChange={(e) => setEndDate(e.target.value)} value={endDate} id="end-date" type="date" className="border p-2"/>
           <input onChange={(e) => setEndTime(e.target.value)} value={endTime} id="end-time" type="time" className="border p-2"/>
        </div>
      </div>
      <Button onClick={handleAddEvent} variant="outlined" sx={{marginTop:1}}>Hozzáadás</Button>
      <Button onClick={handleClose} variant="outlined" sx={{marginTop:1}}>Mégsem</Button>
    </Box>
      </Modal>
    </div>
  );
};

export default AddEventButton;