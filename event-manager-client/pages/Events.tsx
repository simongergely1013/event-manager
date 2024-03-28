"use client";
import React, { useState } from "react";
import { Container } from "@mui/material";
import {eventsData} from "../src/app/lib/events-data";
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import DeleteEventButton from "@/app/components/DeleteEventButton";



const Events = () => {
  const [events, setEvents] = useState(eventsData);

  const deleteEventById = (id: string) => {
    const filteredEvents = events.filter(el => el.id !== id);
    setEvents(filteredEvents);
  }
    return(
        <Container maxWidth="md">
          <Typography variant="h5" gutterBottom sx={{marginBottom: "24px"}}>Események listája</Typography>
           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Cím</TableCell>
            <TableCell align="right">Kezdete</TableCell>
            <TableCell align="right">Vége</TableCell>
            <TableCell align="right"/>
            <TableCell align="right"/>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((event) => {
            const startDate = new Date(event.start);
            const finishDate = new Date(event.finish);
            return (
              <TableRow
                key={event.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {event.title}
                </TableCell>
                <TableCell align="right">{startDate.toLocaleString()}</TableCell>
                <TableCell align="right">{finishDate.toLocaleString()}</TableCell>
                <TableCell align="right"><Button sx={{color:"black"}} variant="contained">Részletek</Button></TableCell>
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
