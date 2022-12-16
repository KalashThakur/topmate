import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from '@mui/material/Avatar';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";


export const Signup = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        let payload = {name, email, password}
        axios.post("http://localhost:8080/user/signup", payload)
        .then((res) => {
            console.log("res", res)
            navigate("/login")
        })
        .catch((err) => console.log("err", err));
    }

  return (
    <Box>
      
      <Box style={{textAlign: "center", margin: "auto", width: "5%"}}>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>

      </Box>
      <h1>Signup</h1>
      <Box component="form" onSubmit={handleSubmit}>
        {/* <label htmlFor="">Email</label> */}
        <TextField 
        type="text" 
        required 
        placeholder="john"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      
        <br />

        <TextField 
        type="email" 
        required 
        placeholder="john@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      
        <br />
        <TextField
          type="password"
          required
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Signup
        </Button>
        <p>Already have an account? <Span><Link to='/login'>Login here</Link></Span></p>
        </Box>
      </Box>
  );
};

const Span = styled.span`
 text-decoration: none; 
`
