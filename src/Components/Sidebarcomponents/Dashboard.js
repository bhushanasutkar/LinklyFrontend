import React from 'react'

import { useUserAuth } from "../../contextApi/useAuthContext";
import Home from '../Home';
const Dashboard = () => {
  

    return (
        <>
            <div className="container d-flex justify-content-between" style={{ backgroundColor: '#e6f0f3' }}>
                <h1 style={{ width: 'inherit' }}>Dashboard</h1>
                <div className="container d-flex justify-content-end" style={{ height: '100px' }}>
                   <Home/>

                    <img src="images.jfif" class="img-rounded imagesize mx-2" style={{margin:'auto'}} alt="Cinque Terre"></img>
                </div>
            </div>
            <div className="container d-flex flex-row cards1 justify-content-around">
                <div class="card customcard my-2" style={{width: '13rem'}}>
                    <div class="card-body">
                    <h4 class="card-title text-muted text-center">To Do</h4>
                    <h1 className='text-center mt-3'>64</h1>
                    </div>
                </div>
                <div class="card customcard my-2" style={{width: '13rem'}}>
                    <div class="card-body">
                    <h4 class="card-title text-muted text-center">Re-Work</h4>
                    <h1 className='text-center mt-3'>64</h1>
                    </div>
                </div>
                <div class="card customcard my-2" style={{width: '13rem'}}>
                    <div class="card-body">
                    <h4 class="card-title text-muted text-center">Submitted</h4>
                    <h1 className='text-center mt-3'>64</h1>
                    </div>
                </div>
                <div class="card customcard my-2" style={{width: '13rem'}}>
                    <div class="card-body">
                    <h4 class="card-title text-muted text-center">Link Created</h4>
                    <h1 className='text-center mt-3'>64</h1>
                    </div>
                </div>
                <div class="card customcard my-2" style={{width: '13rem'}}>
                    <div class="card-body">
                    <h4 class="card-title text-muted text-center">To Do</h4>
                    <h1 className='text-center mt-3'>64</h1>
                    </div>
                </div>
                
              
               

            </div>
        </>
    )
}

export default Dashboard