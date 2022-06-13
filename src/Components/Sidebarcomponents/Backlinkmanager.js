import React from 'react'
import AcceptedLinks from '../AcceptedLinks'
import Accountsection from '../Accountsection';
import { Link } from "react-router-dom";
import Linkcontext from '../../contextApi/Linkcontext';

import { useContext } from 'react';
import Renderacceptedlink from '../Renderacceptedlink';


const Backlinkmanager = () => {
  const { acceptedLinks } = useContext(Linkcontext);
  return (


    <>


      <div >
        <Accountsection heading={'Backlink Manager'} />
        <div className="container d-flex flex-row cards1 justify-content-around  " style={{ backgroundColor: '#f7f8ff' }}>
          <div className="card customcard my-2 px-3" style={{ width: '13rem' }}>
            <div className="card-body">
              <h4 className="card-title text-muted text-center">In Progress</h4>
              <h1 className='text-center mt-3'>64</h1>
            </div>
          </div>
          <div className="card customcard my-2" style={{ width: '13rem' }}>
            <div className="card-body">
              <h4 className="card-title text-muted text-center">Re-Work</h4>
              <h1 className='text-center mt-3'>64</h1>
            </div>
          </div>
          <div className="card customcard my-2" style={{ width: '13rem' }}>
            <div className="card-body">
              <h4 className="card-title text-muted text-center">Submitted</h4>
              <h1 className='text-center mt-3'>64</h1>
            </div>
          </div>
          <div className="card customcard my-2" style={{ width: '13rem' }}>
            <div className="card-body">
              <h4 className="card-title text-muted text-center">Link Created</h4>
              <h1 className='text-center mt-3'>64</h1>
            </div>
          </div>
        </div>
        <div className="container d-flex flex-row justify-content-end pt-3" style={{ backgroundColor: '#f7f8ff', height: '60px' }}>
          <h5 style={{ width: 'inherit', marginLeft: '40px' }}><strong>Grab your backlinks now!</strong></h5>
          <div className="container  d-flex flex-row justify-content-end " style={{ marginRight: '80px', backgoundColor: '' }}>
            <img className="imageicon " style={{ marginTop: '4px', cursor: 'pointer' }} src="sort_icon.svg" alt="" />
            <div className='ml-1'><strong>Sort</strong></div>
            <img className="imageicon ml-4 " style={{ marginTop: '4px', cursor: 'pointer' }} src="filter_icon.svg" alt="" />
            <div className='ml-1'><strong>Filter</strong></div>
          </div>
        </div>

        <Renderacceptedlink />
      </div>

    </>


  )
}

export default Backlinkmanager


{/* <div className="container d-flex justify-content-between" style={{ backgroundColor: '#e6f0f3' }}>
<h1 style={{ width: 'inherit' }}>Backlink Manager</h1>
<div className="container d-flex justify-content-between" style={{ backgroundColor: '#e6f0f3' }}>

  <div className="container d-flex justify-content-end" style={{ height: '122px' }}>
    <div className="container ">
      <p className='text-end font-weight-bold' style={{ margin: '0', fontWeight: 700 }}>User</p>
      <p className='text-end'>flickzee.com</p>
    </div>

    <img src="images.jfif" className="img-rounded imagesize mx-2" alt="Cinque Terre"></img>
  </div>
</div>

</div> */}
{/* <div className="container d-flex flex-row cards1 justify-content-around">
<div className="card customcard my-2" style={{ width: '13rem' }}>
  <div className="card-body">
    <h4 className="card-title text-muted text-center">To Do</h4>
    <h1 className='text-center mt-3'>64</h1>
  </div>
</div>
<div className="card customcard my-2" style={{ width: '13rem' }}>
  <div className="card-body">
    <h4 className="card-title text-muted text-center">Re-Work</h4>
    <h1 className='text-center mt-3'>64</h1>
  </div>
</div>
<div className="card customcard my-2" style={{ width: '13rem' }}>
  <div className="card-body">
    <h4 className="card-title text-muted text-center">Submitted</h4>
    <h1 className='text-center mt-3'>64</h1>
  </div>
</div>
<div className="card customcard my-2" style={{ width: '13rem' }}>
  <div className="card-body">
    <h4 className="card-title text-muted text-center">Link Created</h4>
    <h1 className='text-center mt-3'>64</h1>
  </div>
</div>
<div className="card customcard my-2" style={{ width: '13rem' }}>
  <div className="card-body">
    <h4 className="card-title text-muted text-center">To Do</h4>
    <h1 className='text-center mt-3'>64</h1>
  </div>
</div>




</div> */}