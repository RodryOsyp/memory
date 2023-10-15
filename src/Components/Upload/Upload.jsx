import React, { useState } from "react";
import style from "./Upload.module.scss";
const Upload = () => {
  const [width, setWidth] = useState(0);
  const progressStyle = `${style.progress2} ${style.progressMoved}`;
  const handleWidthChange = () => { 
    width < 390 ? setWidth(width+10) : setWidth(width)
   
  };
  return (
    <div className={style.upload}> 
      <div className={style.container}> 
       <div  className={style.text}>You`ve used <div className={style.text2}> {width} GB</div>of your storage</div>
        <div className={progressStyle}>
          <div className={style.progressBar2} style={{ width: `${width}px` }}></div>
            </div>
            <div className={style.min_max}>
              <div className={style.min}>0 GB</div>
              <div className={style.max}>390 GB</div>
        </div>
      </div>
      <div className={style.button} onClick={handleWidthChange}>Button</div>
    </div>
  );
};

export default Upload;
