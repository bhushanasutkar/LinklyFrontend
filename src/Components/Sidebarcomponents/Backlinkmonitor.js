import React from "react";
import Accountsection from "../Accountsection";
// import { useState } from "react";
// import { Addlinktomonitorpopup } from "../../Components/Popups";
// import Linkmonitor from '../Linkmonitor';
// import { useContext } from "react";
// import Linkcontext from "../../contextApi/Linkstate";
import{Navigate} from 'react-router-dom';
import Monitorlink from "../Monitorlink";

const Backlinkmonitor = () => {
  
  return (
    <>
      { !localStorage.getItem('token')?<Navigate to='/' />: 
      <div>
      <Accountsection heading={"Backlink Monitor"} />
      <Monitorlink />
      </div>
  }
    </>
  );
};

export default Backlinkmonitor;
