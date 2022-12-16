import React, { useState } from 'react'
import Box from "@mui/material/Box";
import styled from "styled-components";
import Menubar from '../Components/Menubar';
import DisplayData from '../Components/DisplayData';

export const Home = () => {
  return (
    <Box>
        {/* <h1>Home Page</h1> */}
        <HomePageWrapper>
          <LeftMenuWrapper>
            <Menubar />
          </LeftMenuWrapper>
          <DisplayBoxWrapper>
            <DisplayData />
          </DisplayBoxWrapper>
      </HomePageWrapper>
    </Box>
  )
}

const HomePageWrapper = styled.div`
  display: flex;
  height: 100vh; //view height
`;

const LeftMenuWrapper = styled.div`
  /* width: 350px; */
  border: 3px solid black;
  margin-right: 40px;

  max-width: 288px;
    min-width: 288px;
    width: 288px;
    background: #fff;
    transition: all 0.2s;
    overflow: auto;
    height: 100vh;
    position: fixed !important;
    left: 0;
    top: 0;
    bottom: 0;
    padding: 18px 16px 60px;
    background-color: #fbf9f9 !important;
    border: none !important;
    /* font-family: "Gilroy", -apple-system, BlinkMacSystemFont, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif; */
    color: #141414;
    font-size: 14px;
        line-height: 1.17;
`;

const DisplayBoxWrapper = styled.div`
  width: 100%;
  border: 3px solid black;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, max-content)); //fit for every sce
  grid-gap: 16px;
  justify-content: center;
  padding: initial;
`;
