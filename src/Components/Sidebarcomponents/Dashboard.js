import React from 'react'
import Home from '../Home';
import { useContext } from "react";
import Linkcontext from "../../contextApi/Linkcontext";

const Dashboard = () => {

    const { Link, getallLinks } = useContext(Linkcontext);
    getallLinks();

    return (
        <>
            <div className="container d-flex justify-content-between" style={{ backgroundColor: '#e6f0f3' }}>
                <h1 style={{ width: 'inherit' }}>Dashboard</h1>
                <div className="container d-flex justify-content-end" style={{ height: '100px' }}>
                    <Home />

                    <img src="images.jfif" className="img-rounded imagesize mx-2" style={{ margin: 'auto' }} alt="Cinque Terre"></img>
                </div>
            </div>
            <div className="container d-flex flex-row cards1 justify-content-around">
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
            </div>
        </>
    )
}

export default Dashboard