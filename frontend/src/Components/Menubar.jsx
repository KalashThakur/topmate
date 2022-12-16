import React from "react";
import style from "./Menubar.module.css";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <Box className={style.container}>
      {/* logo */}
      <Link to="/" className={style.logo}>
        <img src="https://topmate.io/topmate-light.svg" alt="" />
      </Link>

      <Box className={style.infoContainer}>
        <Box className={style.name}>
          <Box className={style.logo2}>
            <Box className={style.handImg}>
              <img
                className={style.logo2img}
                src="https://topmate.io/static/media/profile_dummy.cb50583c08f6018fb7b7.png"
                alt=""
              />
            </Box>
          </Box>

          <Box className={style.userInfo}>
            <Box className={style.inneruserDiv}>
              <Link to="/" className={style.userLink}>
                <span>
                  <strong>topmate.io/</strong>
                </span>
              </Link>
            </Box>
          </Box>
        </Box>

        <Box className={style.divider}></Box>
      </Box>

      {/* profile button */}
      <Box className={style.btnDiv}>
        <Link to="/"></Link>
        <button className={style.btn}>Publish Profile</button>
      </Box>

      <ul className={style.list}>
        <li className={style.listitems}>
          <span className={style.listSpan}>
            <a href="" className={style.menuLink}> <span>Home</span> </a>
          </span>
        </li>
        <li className={style.listitems}>
          <span className={style.listSpan}>
            <a href="" className={style.menuLink}> <span>Calls</span> </a>
          </span>
        </li>
        <li className={style.listitems}>
          <span className={style.listSpan}>
            <a href="" className={style.menuLink}> <span>Queries</span> </a>
          </span>
        </li>
        <li className={style.listitems}>
          <span className={style.listSpan}>
            <a href="" className={`${style.menuLink} ${style.active}`}> <span>Availability</span> </a>
          </span>
        </li>
        <li className={style.listitems}>
          <span className={style.listSpan}>
            <a href="" className={style.menuLink}> <span>Services</span> </a>
          </span>
        </li>
        <li className={style.listitems}>
          <span className={style.listSpan}>
            <a href="" className={style.menuLink}> <span>Payments</span> </a>
          </span>
        </li>
        <li className={style.listitems}>
          <span className={style.listSpan}>
            <a href="" className={style.menuLink}> <span>Rewards</span> </a>
          </span>
        </li>
        <li className={style.listitems}>
          <span className={style.listSpan}>
            <a href="" className={style.menuLink}> <span>Profile</span> </a>
          </span>
        </li>
      </ul>
    </Box>
  );
};

export default Menubar;
