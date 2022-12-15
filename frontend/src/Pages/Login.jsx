import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from '@mui/material/Avatar';
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { userlogin } from "../Redux/AuthReducer/action";
import { useDispatch } from "react-redux";

export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const comingFrom = location.state?.from?.pathname || "/";

    const handleSubmit = (e) => {
        e.preventDefault()
        let payload = {email, password}
        if (payload) {
          dispatch(userlogin(payload)).then((res) => {
            if (res.type === "GET_LOGIN_SUCCESS") {
              // navigate(comingFrom, { replace: true });
            }
          });
        }
    }

  return (
    <Box>
      
      <Box style={{textAlign: "center", margin: "auto", width: "5%"}}>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>

      </Box>
      <h1>Login</h1>
      <Box component="form" onSubmit={handleSubmit}>
        {/* <label htmlFor="">Email</label> */}
        <TextField 
        type="email" 
        required 
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      
        <br />
        <TextField
          type="password"
          required
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Submit
        </Button>
        <p>Don't have an account? <span><Link to='/'>Signup</Link></span></p>

        </Box>
      </Box>
  )
}
