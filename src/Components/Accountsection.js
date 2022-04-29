import React from 'react'
import { useContext, useState } from 'react';
import Linkcontext from '../contextApi/Linkcontext';
const Accountsection = (props) => {
  const {User}=props;


  return (
    <>
      <div className="container d-flex justify-content-between" style={{ backgroundColor: '#e6f0f3' }}>
        <h1 style={{ width: 'inherit' }}>BackLink Vault</h1>
        <div className="container d-flex justify-content-end" style={{ height: '122px' }}>
          <div className="container ">
            <p className='text-end font-weight-bold' style={{ margin: '0', fontWeight: 700 }}>User</p>
            <p className='text-end'>flickzee.com</p>
          </div>

          <img src="images.jfif" class="img-rounded imagesize mx-2" alt="Cinque Terre"></img>
        </div>
      </div>

    </>
  )
}

export default Accountsection