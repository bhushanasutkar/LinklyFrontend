import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from "react";
import Linkcontext from "./../contextApi/Linkstate";
import { Requestreworkpopup, Rejectguestblogpopup, Publishlinkpopup,Acceptlinkexchangepopup, Rejectlinkexchangepopup } from './Popups';
const Linkgivercomponent = (props) => {
    const { linkgiverlink } = props;
    const [isOpenrework, setIsOpenrework] = useState(false);
    const [isOpenreject, setIsOpenreject] = useState(false);
    const [isOpenpublish, setIsOpenpublish] = useState(false);
    const [isapprove, setisapprove] = useState(false);
    const [isrejectexchange, setisrejectexchange ]= useState(false);
    // const {  getallacceptedLinks, setuserid } = useContext(Linkcontext);
    // useEffect(() => {
    //   setuserid();
    //   getallacceptedLinks();

    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
    const togglereuestrework = () => {
        setIsOpenrework(!isOpenrework);
    }
    const togglereject = () => {
        setIsOpenreject(!isOpenreject);
    }
    const togglepublish = () => {
        setIsOpenpublish(!isOpenpublish);
    }
    const toggleapprovce = () => {
        setisapprove(!isapprove);
    }
    const tooglerejectexchange = () => {
        setisrejectexchange(!isrejectexchange);
    }
    return (
        <>
            <div className='border border-secondary  my-4 mx-5 ' style={{ backgroundColor: '', borderRadius: '10px' }}>

                <div className='container d-flex flex-row'>
                    <div className="container  d-flex flex-column">
                        <div className="container mt-3 d-flex flex-row">
                            <img src={(linkgiverlink.Icon) ? linkgiverlink.Icon : "globe_icon.svg"}  className="imageicon mx-1 " style={{ marginTop: '4px' }} alt=""></img>
                            <div className='mx-1' style={{ width: '' }}>{linkgiverlink.Name}</div>
                            <a href={`https://${linkgiverlink.Url}`} rel="noopener noreferrer" target="_blank">

                                <img src="new_window.svg" className="imageicon ml-1 " style={{ marginTop: '4px', cursor: 'pointer' }} on alt="" />
                            </a>
                        </div>
                        <div className=" d-flex flex-row mt-4  ">
                            <div className='text-muted'>Order ID:</div>
                            <div className='text-end  text-muted' style={{ width: '7rem', height: '1.75rem', marginLeft: '' }}> #{linkgiverlink.order_id}</div>
                        </div>
                        <div className=" d-flex flex-row mt-2 ">
                            <div className='text-muted mr-2 '>Order On:</div>
                            <div className='text-center' style={{ width: '9rem', height: '1.75rem', marginLeft: '' }}><strong>{linkgiverlink.link_added_on}</strong></div>
                        </div>
                    </div>
                    <div className="container  d-flex flex-column  justify-content-center  ">
                        <div className="container d-flex flex-row justify-content-between mt-2 ">
                            <div className='mr-2 text-muted' >Content Type</div>
                            <div className='mr-2'><strong>{linkgiverlink.content_type}</strong></div>
                        </div>
                        <div className="container mt-3 d-flex justify-content-between flex-row  ">
                            <div className='' style={{ width: ' inherit' }}>Content Document</div>                            
                            <a href={`https://${linkgiverlink.Content_Guidelines}`} rel="noopener noreferrer" target="_blank">

                            <img src="new_window.svg" className="imageicon mr-3 " style={{ marginTop: '', marginRight: '20px', cursor: 'pointer' }} on alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="container  d-flex flex-column">
                        <div className="container mt-4 d-flex flex-row justify-contentr mt-2 ">
                            <div className='mx-4' >Link cost</div>
                            <div className='ml-5'><strong>{linkgiverlink.Link_category}</strong></div>
                        </div>
                        <div className="container mt-3 d-flex justify-content flex-row  ">
                            <div className='mx-4' style={{ width: ' ' }}>Amount Paid</div>
                            <div className='  rounded-pill text-center ' style={{ width: '4rem', height: '1.5rem', backgroundColor: '#29CC97', color: 'white' }}><strong>${(linkgiverlink.amout_paid)?linkgiverlink.amout_paid:0}</strong></div>
                        </div>
                        <div className="container mb-4 d-flex justify-content flex-row" style={{ marginTop: '11px' }}>
                            <div className='mx-4' style={{ width: ' ' }}>Linkly Credits</div>
                            <div className='   rounded-pill text-center' style={{ width: '4rem', height: '1.5rem', backgroundColor: '#5541D7', color: 'white' }}><strong>{(linkgiverlink.linkly_credits)?linkgiverlink.linkly_credits:0}</strong></div>
                        </div>
                    </div>
                    <div className="container  d-flex flex-column justify-content-center ">
                      {linkgiverlink.content_type==='Guest Blog' &&  <button type="button" onClick={togglepublish} class=" mt-3 rounded-lg btn btn-primary font-weight-bold" style={{ backgroundColor: '#4b2ca9', height: ' 3.5rem' }}>{`Publish`}</button>}
                      { linkgiverlink.content_type==='Link Insertion' &&  <button type="button" onClick={togglepublish} class=" mt-3 rounded-lg btn btn-primary font-weight-bold" style={{ backgroundColor: '#4b2ca9', height: ' 3.5rem' }}>{`Publish`}</button>}
                      {/* linkgiverlink.Link_category==='PAID'&& */}
                      {linkgiverlink.Link_category==='EXCHANGE'&&  <button type="button" onClick={toggleapprovce} class=" mt-3 rounded-lg btn btn-primary font-weight-bold" style={{ backgroundColor: '#4b2ca9', height: ' 3.5rem' }}>{`Approve`}</button>}
                        <div onClick={togglereuestrework} style={{ color: '#4b2ca9', cursor: 'pointer' }}>Request Re-work</div>
                        <div onClick={togglereject} className='text-end ' style={{ cursor: 'pointer' }}><u>Reject with Detailed Feedback</u></div>

                    </div>

                </div>
                {isOpenrework && <Requestreworkpopup linkid={linkgiverlink.Link_Id}
                    handleClose={togglereuestrework} linkgivereachlink={linkgiverlink}
                />}
                {isapprove && <Acceptlinkexchangepopup linkid={linkgiverlink.Link_Id}
                    handleClose={toggleapprovce}  linkgivereachlink={linkgiverlink}
                />}
                {isrejectexchange && <Rejectlinkexchangepopup linkid={linkgiverlink.Link_Id}
                    handleClose={tooglerejectexchange}  linkgivereachlink={linkgiverlink}
                />}
                {isOpenreject && <Rejectguestblogpopup linkid={linkgiverlink.Link_Id}
                    handleClose={togglereject} linkgivereachlink={linkgiverlink}
                />}
                {isOpenpublish && <Publishlinkpopup linkid={linkgiverlink.Link_Id}
                    handleClose={togglepublish} linkgivereachlink={linkgiverlink}
                />}
            </div>

        </>
    )
}

export default Linkgivercomponent