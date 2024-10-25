//import React from 'react'
import { AppBar, Box, Button, IconButton, Link, MenuItem, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"



function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#004d40' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuItem/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexGrow: 800 }}>
          <NavLink to={'/sign'}><Button color="inherit" style={{color:"red"}}>Login</Button></NavLink>
          <NavLink to={'/login'}><Button color="inherit" style={{color:"red"}}>Sign UP</Button></NavLink>
                      <NavLink to={'/comment'}><Button color="inherit" style={{ color:"red"}}>Home</Button></NavLink>
                      <NavLink to={'/addmovie'}><Button color="inherit" style={{ color:"red"}}>Add Movie</Button></NavLink>
          </Box>
          {/* <NavLink to={'/exit'}><Button color="inherit" style={{color:"white"}}>LogOut</Button></NavLink> */}
          <NavLink to={'/exit'} style={{ textDecoration: 'none' }}>
         <Button style={{ backgroundColor: "#ff5722",color: "white", padding: '8px 16px' }} >LogOut </Button>
         </NavLink>
         
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
