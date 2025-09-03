import React from 'react';
import { useState } from "react";
import logo from '../../../public/dream-book-logo.png'
import LogoutIcon from '@mui/icons-material/Logout';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Button from '@mui/material/Button';

function AuthorLayout() {
   const [active, setActive] = useState("Dashboard");
   const menuItems = [
    { name: "Dashboard", icon: <GridViewOutlinedIcon fontSize="small" /> },
    { name: "Books", icon: <MenuBookIcon fontSize="small" /> },
    { name: "Settings", icon: <SettingsOutlinedIcon fontSize="small" /> },
  ];

  return (
    <>
    <div className='layout_container h-[100dvh] w-[100dvw]'>

      {/* Admin Layout */}
      <div className='sidebar_layout bg-white w-[21dvw] h-[100dvh] p-[min(1em,8%)] box-border'>
         <div className='dashboard_logo h-2/12 w-full flex items-center justify-center'>
             <img src={logo} className="max-w-40 h-auto object-contain" />
         </div>
         <div className="h-7/12 w-full box-border py-5.5">
  {menuItems.map((item) => (
    <Button
      key={item.name}
      startIcon={item.icon}
      onClick={() => setActive(item.name)}
      sx={{
        height: "45px",
        borderRadius: "12px",
        justifyContent: "flex-start",
        px: "20px",
        mb: "4px",
        fontWeight: 500,
        textTransform: "none",
        bgcolor: active === item.name ? "rgb(93 96 239 / var(--tw-bg-opacity, 1))" : "transparent",
        color: active === item.name ? "white" : "#57564F",
        "&:hover": {
          bgcolor: active === item.name ? "indigo.600" : "grey.100",
        },
      }}
      fullWidth
    >
      {item.name}
    </Button>
  ))}
</div>
         <div className='h-3/12 w-full flex items-end justify-center'>
           <Button variant="text" className='custom w-full' sx={{height:'45px', "& fieldset": { border: "none" }, backgroundColor:'#EEEEEE', color:'#44444E', textAlign:'start', justifyContent: "flex-start", px: "20px",}}><LogoutIcon fontSize='small'/>&nbsp;&nbsp;Logout</Button>
         </div>
      </div>

      {/* Routes */}
      <div className='Route_pages'>

      </div>
    </div>
    </>
  )
}

export default AuthorLayout