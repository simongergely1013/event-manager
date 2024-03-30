"use client";
import React, { useState } from "react";
import { Container } from "@mui/material";
import { eventsData, Event } from "../../src/app/lib/events-data";
import { tableStyles, tableCellStyles, tableRowStyles } from "./Events.styles";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteEventButton from "@/app/components/DeleteEventButton/DeleteEventButton";
import AddEventButton from "@/app/components/AddEventButton/AddEventButton";
import EventDetailsButton from "@/app/components/EventDetailsButton/EventDetailsButton";

const Events = () => {
  const [events, setEvents] = useState<Event[]>(eventsData);

  const deleteEventById = (id: string) => {
    const filteredEvents: Event[] = events.filter((el) => el.id !== id);
    setEvents(filteredEvents);
  };

  const handleAddEvent = (obj: Event) => {
    setEvents([obj, ...events]);
  };

  const handleSave = (event: Event) => {
    // eslint-disable-next-line
    console.log(event);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h5" gutterBottom sx={{ marginBottom: "24px" }}>
        Események listája
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={tableStyles} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={tableCellStyles}>Cím</TableCell>
              <TableCell sx={tableCellStyles} align="right">
                Kezdete
              </TableCell>
              <TableCell sx={tableCellStyles} align="right">
                Vége
              </TableCell>
              <TableCell sx={tableCellStyles} align="right" />
              <TableCell sx={tableCellStyles} align="right">
                <AddEventButton
                  addEvent={(event: Event) => handleAddEvent(event)}
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event) => {
              const startDate = new Date(event.start);
              const finishDate = new Date(event.finish);
              return (
                <TableRow key={event.id} sx={tableRowStyles}>
                  <TableCell component="th" scope="row">
                    {event.title}
                  </TableCell>
                  <TableCell align="right" suppressHydrationWarning>
                    {startDate.toLocaleString()}
                  </TableCell>
                  <TableCell align="right" suppressHydrationWarning>
                    {finishDate.toLocaleString()}
                  </TableCell>
                  <TableCell align="right">
                    <EventDetailsButton
                      save={(obj: Event) => handleSave(obj)}
                      title={event.title}
                      start={startDate}
                      finish={finishDate}
                      id={event.id}
                      photo={event.photo}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <DeleteEventButton
                      deleteEvent={() => deleteEventById(event.id)}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Events;
