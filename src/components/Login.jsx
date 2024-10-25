//import React from 'react'
import { Box, Button, TextField } from "@mui/material"
function Login() {
  return (
    <Box
    component="form"
    sx={{ '& .MuiTextField-root': { m: 3, width: '40ch' } }}
    noValidate
    autoComplete="off"
  >
    
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
    <Button variant="outlined" className="btn btn-primary">Login</Button>
    </div>
    </Box>
  )
}

export default Login
