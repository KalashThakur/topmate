import React from "react";
import style from "./Display.module.css";
import Box from "@mui/material/Box";

const DisplayData = () => {
  return (
    <section className={style.container}>
      <div className={style.container2}>
        <div className={style.container3}>
          {/* upper part */}
      <Box className={style.upperDiv}>
        <div className={style.heading}>
          <h4>Availability</h4>
        </div>

        <div className={style.headContainer}>
          <span className={style.headText}>
            <a className={style.activeBtn} href="">
              <span className={style.activeText}>Schedule</span>
            </a>

            <a className={style.inactiveBtn} href="">
              <span className={style.inactiveText}>Configurations</span>
            </a>
          </span>
        </div>
      </Box>

      {/* lower part */}
      <Box className={style.lowerDiv}></Box>
        </div>
      </div>
      
    </section>
  );
};

export default DisplayData;
