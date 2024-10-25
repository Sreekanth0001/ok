//import React from 'react'

import { Box, Button, TextField } from "@mui/material"

function Signup() {
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
        defaultValue="Name"
      />
      </div>
      <div style={{textAlign:'center'}}>
      <TextField
        id="outlined-helperText"
        label="Required"
        defaultValue="Email"
        
        
      />
      </div>
      <div style={{textAlign:'center'}}>
      <TextField
        id="outlined-password-input"
        label="Required"
        type="password"
        defaultValue="Password"
      />
      </div>
      <div style={{textAlign:'center'}}>
    
      <TextField
        id="outlined-number"
        label="Required"
        defaultValue="Phone Number"
        
      />
       
    </div>
    <div style={{textAlign:'center'}}>
    <Button variant="outlined" className="btn btn-primary">SignUp</Button>
    </div>
    </Box>
  )
}

export default Signup
