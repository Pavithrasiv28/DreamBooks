import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useState } from "react";
import logo from '../../../public/dream-book-logo.png'
import LogoutIcon from '@mui/icons-material/Logout';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Button from '@mui/material/Button';

function AdminLayout() {
   const [active, setActive] = useState("Dashboard");
   const navigate = useNavigate();
   const location = useLocation();

   const menuItems = [
    { name: "Dashboard", icon: <GridViewOutlinedIcon fontSize="small"/>, path: "/admin/dashboard" },
    { name: "Books", icon: <MenuBookIcon fontSize="small"/>, path:"/admin/books" },
    { name: "Authors", icon: <PermContactCalendarIcon fontSize="small"/>, path:"/admin/authors" },
    { name: "Employees", icon: <PeopleAltIcon fontSize="small"/>, path:"/admin/employees" },
  ];

  return (
    <>
    <div className='layout_container flex h-[100dvh] w-[100dvw]'>

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
      onClick={() => {setActive(item.name); navigate(item.path);}}
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

      <div className='Route_pages bg-gray-100 h-[100dvh] w-[79dvw]'>
        <Outlet/>
      </div>
    </div>
    </>
  )
}

export default AdminLayout