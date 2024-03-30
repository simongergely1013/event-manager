import React, { useState, useCallback } from "react";
import {
  boxStyle,
  typographyStyles,
  textFieldStyles,
  buttonStyles,
} from "./EventDetailsButton.styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const EventDetailsButton = ({ title, start, finish, id, photo, save }: any) => {
  const [open, setOpen] = useState<boolean>(false);
  const [eventTitle, setEventTitle] = useState<string>(title);
  const [startDate, setStartDate] = useState<string>(
    start.toLocaleString().split(",")[0].split("/").reverse().join("-")
  );
  const [startTime, setStartTime] = useState<string>(
    start.toLocaleString().split(",")[1].slice(0, -3)
  );
  const [endDate, setEndDate] = useState<string>(
    finish
      .toLocaleString()
      .split(",")[0]
      .split(",")[0]
      .split("/")
      .reverse()
      .join("-")
  );
  const [endTime, setEndTime] = useState<string>(
    finish.toLocaleString().split(",")[1].slice(0, -3)
  );
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleTitleChange = useCallback(
    (title: string) => {
      setEventTitle(title);
    },
    // eslint-disable-next-line
    [eventTitle]
  );

  const handleStartDateChange = useCallback(
    (date: string) => {
      setStartDate(date);
    },
    // eslint-disable-next-line
    [startDate]
  );

  const handleStartTimeChange = useCallback(
    (time: string) => {
      setStartTime(time);
    },
    // eslint-disable-next-line
    [startTime]
  );

  const handleEndDateChange = useCallback(
    (date: string) => {
      setEndDate(date);
    },
    // eslint-disable-next-line
    [endDate]
  );

  const handleEndTimeChange = useCallback(
    (time: string) => {
      setEndTime(time);
    },
    // eslint-disable-next-line
    [endTime]
  );

  const handleSave = () => {
    save({
      id,
      start: startDate + " " + startTime,
      title: eventTitle,
      finish: endDate + " " + endTime,
      photo,
    });
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Részletek
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" sx={boxStyle} noValidate autoComplete="off">
          <Typography variant="h6" sx={typographyStyles}>
            Esemény részletei
          </Typography>
          <TextField
            onChange={(e) => handleTitleChange(e.target.value)}
            value={eventTitle}
            id="outlined-basic"
            label="Esemény cím"
            variant="outlined"
            sx={textFieldStyles}
          />
          <div className="flex flex-col gap-2 m-2 text-black">
            <label>Kezdete</label>
            <div className="flex">
              <input
                onChange={(e) => handleStartDateChange(e.target.value)}
                value={startDate}
                id="start-date"
                type="date"
                className="border p-2"
              />
              <input
                onChange={(e) => handleStartTimeChange(e.target.value)}
                value={startTime}
                id="start-time"
                type="time"
                className="border p-2"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 m-2 text-black">
            <label>Vége</label>
            <div className="flex">
              <input
                onChange={(e) => handleEndDateChange(e.target.value)}
                value={endDate}
                id="end-date"
                type="date"
                className="border p-2"
              />
              <input
                onChange={(e) => handleEndTimeChange(e.target.value)}
                value={endTime}
                id="end-time"
                type="time"
                className="border p-2"
              />
            </div>
          </div>
          <Button onClick={handleSave} variant="outlined" sx={buttonStyles}>
            Mentés
          </Button>
          <Button onClick={handleClose} variant="outlined" sx={buttonStyles}>
            Mégsem
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default EventDetailsButton;
