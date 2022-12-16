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
          <Box className={style.lowerDiv}>
            <div className={style.lowerDiv2}>
              <div className={style.lowerDiv3}>
                <div className={style.lowerDiv4}>
                  <div className={style.row}>
                    {/* default */}
                    <div className={style.rowText}>
                      <button className={style.btnActive}>Default</button>
                    </div>

                    {/* new */}
                    <div className={style.rowText2}>
                      <button className={style.btnInactive}>+ New Schedule</button>
                    </div>
                  </div>

                  {/* bottom */}
                  <div className={style.bottom}>
                    <div className={style.bottom2}>
                       <div className={style.innerDiv}>
                        <div className={style.innerDivSlots}>
                          {/* 1 */}
                          <div className={style.innerDivSlots1}>
                            <div className={style.innerDivSlots2}>
                              <div className={style.innerDivSlotText}>Default</div>
                              <div className={style.innerSlot1Div}>
                                <div className={style.innerSlot1Div2}>
                                  <button className={style.innerSlot1Btn}>
                                    <span className={style.innerSlot1Text}>Save</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* 2 */}
                        </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default DisplayData;
