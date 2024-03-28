"use client";
import React, { useState } from "react";
import { Container } from "@mui/material";
import { eventsData, Event } from "../src/app/lib/events-data";
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteEventButton from "@/app/components/DeleteEventButton";
import AddEventButton from "@/app/components/AddEventButton";

const Events = () => {
  const [events, setEvents] = useState<Event[]>(eventsData);

  const deleteEventById = (id: string) => {
    const filteredEvents: Event[] = events.filter(el => el.id !== id);
    setEvents(filteredEvents);
  }

  const handleAddEvent = (obj: Event) => {
    setEvents([obj, ...events]);
  }
    return(
        <Container maxWidth="lg">
          <Typography variant="h5" gutterBottom sx={{marginBottom: "24px"}}>Események listája</Typography>
           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:"bold"}}>Cím</TableCell>
            <TableCell sx={{fontWeight:"bold"}} align="right">Kezdete</TableCell>
            <TableCell sx={{fontWeight:"bold"}} align="right">Vége</TableCell>
            <TableCell sx={{fontWeight:"bold"}} align="right"/>
            <TableCell sx={{fontWeight:"bold"}} align="right"><AddEventButton addEvent={(event: any) => handleAddEvent(event)}/></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((event) => {
            const startDate = new Date(event.start);
            const finishDate = new Date(event.finish);
            return (
              <TableRow
                key={event.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {event.title}
                </TableCell>
                <TableCell align="right" suppressHydrationWarning>{startDate.toLocaleString()}</TableCell>
                <TableCell align="right" suppressHydrationWarning>{finishDate.toLocaleString()}</TableCell>
                <TableCell align="right"><Button sx={{color:"black"}} variant="outlined">Részletek</Button></TableCell>
                <TableCell align="right"><DeleteEventButton deleteEvent={() => deleteEventById(event.id)}/></TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
        </Container>
    );
}

export default Events;