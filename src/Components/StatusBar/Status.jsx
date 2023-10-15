import React from "react";
import style from "./Status.module.scss";
import logo from "../../images/logo.svg";
import document from "../../images/icon-document.svg";
import iconFolder from "../../images/icon-folder.svg";
import iconUpload from "../../images/icon-upload.svg";
const Status = () => {
  return (
    <div className={style.status}>
      <img src={logo} alt="" className={style.logo} />
      <div className={style.box}>
      <img src={document} alt="" className={style.document} />
      <img src={iconFolder} alt="" className={style.iconFolder} />
      <img src={iconUpload} alt="" className={style.iconUpload} />
      </div>
    </div>
  );  
};

export default Status;
