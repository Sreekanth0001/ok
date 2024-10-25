//import React from 'react'
import { Box, Button, TextField } from "@mui/material"

function Movies() {
  return (
    <Box
    component="form"
    sx={{ '& .MuiTextField-root': { m: 2, width: '40ch' } }}
    noValidate
    autoComplete="off"
  >
    <div style={{textAlign:'center'}}>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Movie Name"
      />
      </div>
      <div style={{textAlign:'center'}}>
      <TextField
        id="outlined-required"
        label="Required"
        defaultValue="Description"
        
        
      />
      </div>
      
      <div style={{textAlign:'center'}}>
      <TextField
        id="outlined-required"
        label="Required"
        defaultValue="Rating"
        
        
      />
      </div>
    
    </Box>
  )
}

export default Movies
