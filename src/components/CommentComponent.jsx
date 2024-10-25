import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function CommentComponent() {
  const[data,setData]=useState([]);
  useEffect(()=>{
    axios.get('https://dummyapi.online/api/movies').then((res)=>{

      console.log(res.data.users);
      setData(res.data.users);
    })
  })
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{border:"1px solid black",marginTop:"50px"}}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">movieName</TableCell>
            <TableCell align="center">rating</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.movieName}</TableCell>
              <TableCell align="center">{row.rating}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CommentComponent
