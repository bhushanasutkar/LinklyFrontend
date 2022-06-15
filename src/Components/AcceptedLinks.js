import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Feedbackpopup, Linkexhangepopup, Metadatapopup, Addlinktomonitorpopup, Requestreworkpopup, Rejectguestblogpopup, Publishlinkpopup, Acceptlinkexchangepopup, Guestblogpopup, Linkinsertionpopup, Savelogindetailpopup } from './Popups';
const AcceptedLinks = (props) => {

  const { acceptedlink } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenExchange, setIsOpenExchange] = useState(false);
  const [isOpenblog, setIsOpenblog] = useState(false);
  const [isOpeninsertion, setIsOpeninsertion] = useState(false);
  const [issavelogin, setissavelogin] = useState(false);
  const [isOpenmetainfo, setIsOpenmetainfo] = useState(false);
  const [setstatus, setsetstatus] = useState();
  const currentstatus = async () => {
    // const host = "http://localhost:8000";
    const host = process.env.React_App_host
    const UserId = localStorage.getItem('userid');
    // console.log("Inside update")
    // const Linkid = acceptedlink.Link_Id;
    // const response1 = await fetch(`${host}/v1/userlink/get_update_status`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     authorization: "Bearer " + localStorage.getItem("token"),
    //   },
    //   body: JSON.stringify({ Linkid, UserId }),
    // });
    // const data = await response1.json()
    // console.log(data.response[0].status);
    // console.log(data.response[0].status);
    setsetstatus(acceptedlink.status);
    var sdelect = document.getElementById(`statusvalueid-${acceptedlink.Link_Id}`);

    // var items = sdelect.options;//Javascript get select all option
    // // console.log(items)
    // for (var i = 0; i < items.length; i++) {
    //   if (items[i].value === data.response[0].status) {
    //     console.log("Are equal")
    //     console.log(items[i].value);
    //     console.log(data.response[0].status)
    //     console.log("setting selected true");
    //     sdelect.options[i].selected = true;

    //   }
    // }

    
  }

  const getselectedValues = async () => {
    // var sdelect = document.getElementById("status");
    var statusvalue = document.getElementById(`statusvalueid-${acceptedlink.Link_Id}`).value;
    // sdelect.options[sdelect.selectedIndex].setAttribute('selected', true);
    // console.log(statusvalue);
    // const host = "http://localhost:8000";
    // const host = "https://linkly-backend-stg.herokuapp.com";
    const host = process.env.React_App_host

    const UserId = localStorage.getItem('userid');
    // const Linkid= props.Linkid
    const Linkid = acceptedlink.Link_Id;
    const response = await fetch(`${host}/v1/userlink/update_status`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({ Linkid, UserId, statusvalue }),
    });
    // console.log("hi")
    console.log(response);

  }
  const togglePopup = () => {
    setIsOpen(!isOpen);

  }

  const toggleGuestblogPopup = () => {
    setIsOpenblog(!isOpenblog);
  }
  const toggleExchange = () => {
    setIsOpenExchange(!isOpenExchange);
  }
  const toggleMetainfo = () => {
    setIsOpenmetainfo(!isOpenmetainfo);
  }
  const toogleinsertionPopup = () => {
    setIsOpeninsertion(!isOpeninsertion);
  }
  const toogleSavelogindetail = () => {
    console.log("Hi");
    setissavelogin(!issavelogin);
  }
  const openurl=()=>{
    console.log("hi")
    window.open(acceptedlink.registration_link, '_blank');
  }
  useEffect(() => {
    currentstatus();
  }, [])


  return (
    <>
      
      <div className='border border-secondary  mb-4 mx-5 ' style={{ backgroundColor: 'white', borderRadius: '10px' }}>

        <div className='container d-flex flex-row'>
          <div className="container  my-3  d-flex flex-column">
            <div className="container mt-2 d-flex flex-row">
              <img src="https://logo.clearbit.com/microsoft.com" className="imageicon mx-1 " style={{ marginTop: '4px' }} alt=""></img>
              <div className='mx-1' style={{ width: '' }}>{acceptedlink.Name}</div>
              <a href={`https://${acceptedlink.Url}`} rel="noopener noreferrer" target="_blank">

                <img src="new_window.svg" className="imageicon ml-1" style={{ marginTop: '0px', cursor: 'pointer' }} on alt="" />
              </a>
            </div>
            { acceptedlink.content_type && <div className=" d-flex flex-row mt-4 ">
              <div className='' style={{ width: 'max-content' }}>Content Req.</div>
              <div className=' text-center' style={{ width: '7rem', height: '1.75rem', marginLeft: 'auto' }}><strong> {acceptedlink.content_type}</strong></div>
            </div>}
            <div className=" d-flex flex-row mt-3 ">
              <div className='mr-2 '>Work Req.</div>
              <div className=' text-center' style={{ width: '7rem', height: '1.75rem', marginLeft: 'auto' }}><strong>{acceptedlink.Work_Required}</strong></div>
            </div>
            <div className="container d-flex flex-row mt-3 justify-content-center ">
              <p onClick={toggleMetainfo} className='text-center' style={{ color: 'rgb(75, 44, 169)', cursor: 'pointer' }}><strong>View all meta info</strong></p>
            </div>
          </div>
          <div className="container my-3 d-flex flex-column">
            <div className="container justify-content-center d-flex flex-row mt-2 ">
              <div className='tooltip-wrap'>
                <div className='mr-2'>{(acceptedlink.Rel_Attribute === 'dofollow') ? 'DF' : 'NF'}</div>
                <div className='tooltip-content' >{(acceptedlink.Rel_Attribute === 'dofollow') ? 'This link will pass link juice to your site.' : 'Doesn’t pass link juice to your site, good for getting your site discovered.'}</div>
              </div>
              <div className='tooltip-wrap'>
                <img src={(acceptedlink.SPM_Instantapproval === 'YES') ? 'instant_publish.svg ' : 'not_instant_publish.svg'} className='px-1' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
                <div className='tooltip-content' >{(acceptedlink.SPM_Instantapproval === 'YES') ? 'For self-publish sites, your blog will be posted instantly.' : 'Your blog will be reviewed & then published by the author.'}</div>
              </div>
              <div className='tooltip-wrap'>
                <img src={(acceptedlink.Link_Type === 'Comment') ? 'comment_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
                <div className='tooltip-content' >Backlink from comments on QnAs or blogs.</div>
              </div>
              <div className='tooltip-wrap'>
                <img src={(acceptedlink.Link_Type === 'Image') ? 'image_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
                <div className='tooltip-content' >Backlink from image, with an alt-text.</div>
              </div>
              <div className='tooltip-wrap'>
                <img src={(acceptedlink.Link_Type === 'Author Bio') ? 'author_bio_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
                <div className='tooltip-content' >Backlink from Author byline, might be on blog page, or separate author page</div>
              </div>
              <div className='tooltip-wrap'>
                <img src={(acceptedlink.Link_Type === 'Content') ? 'content_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
                <div className='tooltip-content' >Most wanted form of backlink, from the content, preferably at the top.</div>
              </div>
              <div className='tooltip-wrap'>
                <img src={(acceptedlink.Link_Type === null) ? 'info.svg' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
                <div className='tooltip-content' >Read more in ‘Content Guidelines’ & ‘How to get link’ doc to know details.</div>
              </div>
              <div className='tooltip-wrap'>
                <img src={(acceptedlink.Link_Type === 'Profile') ? 'profile_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
                <div className='tooltip-content' >Backlink from user profile page, like facebook profile.</div>
              </div>
              <div className='tooltip-wrap'>
                <img src={(acceptedlink.Link_Type === 'Reference') ? 'reference_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
                <div className='tooltip-content' >Backlink at the bottom of the blog, in references/bibliography section</div>
              </div>
              <div className='tooltip-wrap'>
                <img id='indexed' src={(acceptedlink.Google_Indexed === 'YES') ? 'indexed.svg ' : 'noindexed.svg'} className='px-1' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
                <div className='tooltip-content' >{(acceptedlink.Google_Indexed === 'YES') ? ' Search engines will index this page.' : 'This link will not be indexed by search engines.'}</div>
              </div>
            </div>
            <div className="container mt-4 d-flex flex-row justify-content-between mt-2 ">
              <div className='mr-2' >Link Cost</div>
              <div className='mr-2'><strong>{acceptedlink.Link_category}</strong></div>
            </div>
            <div className="container mt-3 d-flex justify-content-between flex-row  ">
              <div className='' style={{ width: ' inherit' }}>Amount Paid</div>
              <div className='  rounded-pill text-center' style={{ width: '6rem', height: '1.75rem', backgroundColor: '#29CC97', color: 'white' }}><strong>${(acceptedlink.Cost_usd) === null ? '0' : acceptedlink.Cost_usd}</strong></div>
            </div>
            <div className="container  d-flex justify-content-between flex-row" style={{ marginTop: '11px' }}>
              <div className='' style={{ width: ' inherit' }}>Linkly Credits</div>
              <div className='   rounded-pill text-center' style={{ width: '6rem', height: '1.75rem', backgroundColor: '#5541D7', color: 'white' }}><strong>{(acceptedlink.linkly_credits) === null ? '0' : acceptedlink.linkly_credits}</strong></div>
            </div>
          </div>
          <div className="container my-3 d-flex flex-column">
            <div className='py-2 mb-2 font-weight-bold'>Useful Links</div>
            <div className=" d-flex flex-row justify-content-between  my-1 ">
              <div className=''>How to get that link</div>
              <a href={`https://${acceptedlink.how_to_get_link}`} rel="noopener noreferrer" target="_blank">
                <img src="new_window.svg" className="imageicon mr-3  " style={{ marginTop: '1px', marginRight: '20px', cursor: 'pointer', paddingLeft:'2px' }} on alt="" />

              </a>
            </div>
            <div className=" d-flex flex-row justify-content-between mt-2 mb-1 ">
              <div className='' >Condition  for backlink</div>
              <a href={`https://${acceptedlink.Condition}`} rel="noopener noreferrer" target="_blank">

                <img src="new_window.svg" className="imageicon mr-3 " style={{ marginTop: '-2px', marginRight: '20px', cursor: 'pointer', paddingLeft:'2px' }} on alt="" />
              </a>
            </div>
            <div className=" d-flex flex-row justify-content-between my-1">
              <div className='py-2' >Content Guidelines</div>
              <a href={`https://${acceptedlink.Content_Guidelines}`} rel="noopener noreferrer" target="_blank">

                <img src="new_window.svg" className="imageicon mr-3 " style={{ marginTop: '11px', marginRight: '20px', cursor: 'pointer', paddingLeft:'2px' }} on alt="" />
              </a>
            </div>
          </div>
          <div className="container my-3 d-flex flex-column">
            <div className=' font-weight-bold mt-2'>Next Step</div>
            <div className='mt-3'>{acceptedlink.next_steps} </div>

          </div>
          <div className="container my-3 d-flex flex-column justify-content-between ">
            {acceptedlink.Link_category === 'FREE' &&acceptedlink.contact_method === 'Email' && <button type="button" onClick={toogleSavelogindetail} class=" mt-3 rounded-lg btn btn-primary font-weight-bold" style={{ backgroundColor: '#4b2ca9', color:'white', height: ' 3.5rem' }}>{`Send Email`}</button>}
            {acceptedlink.Link_category === 'FREE'&& acceptedlink.status === 'Submitted - Waiting for Approval (from Link Giver)'  && acceptedlink.contact_method === 'Link' &&  <button onClick={toogleSavelogindetail} type="button"  class=" mt-3 rounded-lg btn btn-primary font-weight-bold" style={{ backgroundColor: 'white',color:'#4b2ca9', height: ' 3.5rem' }}>{`Save Login Detail`}</button>}
            {acceptedlink.Link_category === 'FREE'&& acceptedlink.status !== 'Submitted - Waiting for Approval (from Link Giver)'  && acceptedlink.contact_method === 'Link' &&  <button onClick={openurl} type="button"  class=" mt-3 rounded-lg btn btn-primary font-weight-bold" style={{ backgroundColor: '#4b2ca9', height: ' 3.5rem' }}>{`Submit Here`}</button>}
            {acceptedlink.Link_category === 'PAID' && acceptedlink.content_type === 'Guest Blog' && <button type="button" onClick={toggleGuestblogPopup} class=" mt-3 rounded-lg btn btn-primary font-weight-bold" style={{ backgroundColor: '#4b2ca9', height: ' 3.5rem' }}>{`Send Guest Blog`}</button>}
            {acceptedlink.Link_category === 'PAID' && acceptedlink.content_type === 'Link Insertion' && <button type="button" onClick={toogleinsertionPopup} class=" mt-3 rounded-lg btn btn-primary font-weight-bold" style={{ backgroundColor: '#4b2ca9', height: ' 3.5rem' }}>{`Send Content`}</button>}
            {acceptedlink.Link_category === 'EXCHANGE' && <button type="button" onClick={toggleExchange} class=" mt-3 rounded-lg btn btn-primary font-weight-bold" style={{ backgroundColor: '#4b2ca9', height: ' 3.5rem' }}>{`Send Request`}</button>}
            <div>
              <div className="" >Current Status</div>
              {/* id={`${index}-statusvalueid`} */}
              {/* selected={enumval==1}  */}
              <select id={`statusvalueid-${acceptedlink.Link_Id}`} onChange={getselectedValues} style={{
                height: '2.5rem',
                width: '13rem',
                borderRadius: '9px', marginTop: '3px', cursor: 'pointer'
              }}>
                <option value="">Status </option>
                <option selected={setstatus==='Link Accepted (by Link Taker)'} value="Link Accepted (by Link Taker)" >Link Accepted (by Link Taker)</option>
                <option  selected={setstatus==='Rejected (by Link Giver)'}  value="Rejected (by Link Giver)">Rejected (by Link Giver) </option>
                <option  selected={setstatus==='Rejected (by Link Taker)'}  value="Rejected (by Link Taker)">Rejected (by Link Taker)</option>
                <option  selected={setstatus==='In progress'}  value="In progress">In progress</option>
                <option  selected={setstatus==='Re-work'}  value="Re-work">Re-work</option>
                <option  selected={setstatus==='Submitted - Waiting for Approval (from Link Giver)'}  value="Submitted - Waiting for Approval (from Link Giver)">Submitted - Waiting for Approval (from Link Giver) </option>
                <option  selected={setstatus==='Re-Submitted after Re-work - Waiting for Approval (from Link Giver)'}  value="Re-Submitted after Re-work - Waiting for Approval (from Link Giver)">Re-Submitted after Re-work - Waiting for Approval (from Link Giver)</option>
                <option  selected={setstatus==='Link Created'}  value="Link Created">Link Created</option>
              </select>
            </div>

            <div style={{ marginLeft: 'auto', cursor: 'pointer' }}>
              <div>
                <div
                  style={{ textDecoration: 'underline' }}
                  type=""
                  value="Feedback"
                  onClick={togglePopup}
                >Feedback</div>
              </div>

              {isOpen && <Feedbackpopup
                handleClose={togglePopup} acceptedlink={acceptedlink} acceptedlinkname={acceptedlink.Name} linkid={acceptedlink.Link_Id}
              />}
              {issavelogin && <Savelogindetailpopup
                handleClose={toogleSavelogindetail} acceptedlink={acceptedlink} acceptedlinkname={acceptedlink.Name} linkid={acceptedlink.Link_Id}
              />}
              {isOpeninsertion && <Linkinsertionpopup
                handleClose={toogleinsertionPopup} acceptedlink={acceptedlink} acceptedlinkname={acceptedlink.Name} linkid={acceptedlink.Link_Id}
              />}
              {isOpenExchange && <Linkexhangepopup
                handleClose={toggleExchange} acceptedlinkname={acceptedlink.Name} linkid={acceptedlink.Link_Id}
              />}
              {isOpenblog && <Guestblogpopup
                handleguestblogClose={toggleGuestblogPopup} acceptedlink={acceptedlink} acceptedlinkname={acceptedlink.Name} linkid={acceptedlink.Link_Id}
              />}
              {isOpenmetainfo && <Metadatapopup
                handleMetainfo={toggleMetainfo} acceptedlink={acceptedlink} acceptedlinkname={acceptedlink.Name} linkid={acceptedlink.Link_Id}
              />}
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default AcceptedLinks
