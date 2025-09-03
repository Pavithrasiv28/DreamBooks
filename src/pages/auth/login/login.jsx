import React from 'react'
import logo from '../../../../public/dream-book-logo.png'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import './login.css'

function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
     <div className='login-container'>
       <div className='login-frame h-[100dvh] w-[100dvw] bg-black/10 flex justify-center items-center p-[min(1em,8%)]'>
         <div className='login-box flex justify-evenly flex-col '>

          {/* logo */}
           <div className='logo h-4/12 w-full flex justify-center'>
              <img src={logo} className="max-w-full h-auto object-contain" />
           </div>

           <div className='logo-ip h-6/12 w-full flex flex-col justify-evenly gap-y-2'>
             {/* Email Input */}

             <div className='w-full h-fit flex flex-col'>
                 <label className='mb-1 font-medium'>Email</label>
                 <OutlinedInput id="outlined-adornment-password" className='bg-gray-100' placeholder='Enter email' sx={{height:'40px', "& fieldset": { border: "none" }}}/>
            </div>

          {/* Password Input */}
          <div className='w-full h-fit flex flex-col'>
          <label className='mb-1 font-medium'>Password</label>
          <OutlinedInput
            id="outlined-adornment-password"
            className='bg-gray-100'
            sx={{height:'40px', "& fieldset": { border: "none" }}}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            placeholder='Enter password'/>
            </div>

            <button variant="contained" className='common-button w-full'>Login</button>

           </div>
            <div><p className='text-sm font-medium text-gray-500 text-center hover:underline'>Forgot Password?</p></div>
         </div>
       </div>
     </div>
    </>
  )
}

export default LoginPage