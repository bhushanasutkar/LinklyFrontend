import React from 'react'
import Accountsection from '../Accountsection';
import { useState } from 'react';
import {Addlinktomonitorpopup} from '../../Components/Popups'
// import Linkmonitor from '../Linkmonitor';
import { useContext } from "react";
import Linkcontext from "../../contextApi/Linkstate";
import Monitorlink from '../Monitorlink';

const Backlinkmonitor = () => {
  return (
    <>
      <Accountsection heading={'Backlink Monitor'} />
      <Monitorlink/>
      
    </>

  )
}

export default Backlinkmonitor