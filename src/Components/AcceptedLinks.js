import React from 'react'

import { Link } from "react-router-dom";

const AcceptedLinks = (props) => {

  const { acceptedlink } = props;


  return (
    <>

      <div className='border border-secondary  my-4 mx-5 ' style={{ backgroundColor: '', borderRadius: '10px' }}>

        <div className='container d-flex flex-row'>
          <div className="container  my-3  d-flex flex-column">
            <div className="container mt-2 d-flex flex-row">
              <img src="https://logo.clearbit.com/microsoft.com" className="imageicon " style={{ marginTop: '4px' }} alt="NA"></img>
              <div className='px-2' style={{ width: '' }}>{acceptedlink.Name}</div>
              <img src="new_window.svg" className="imageicon " style={{ marginTop: '4px', cursor: 'pointer' }} on alt="NA" />
            </div>
            <div className=" d-flex flex-row mt-4 ">
              <div className=''>Content Req.</div>
              <div className=' text-center' style={{ width: '7rem', height: '1.75rem', marginLeft: 'auto' }}><strong> {acceptedlink.content_type}</strong></div>
            </div>
            <div className=" d-flex flex-row mt-2 ">
              <div className='mr-2 '>Work Req.</div>
              <div className=' text-center' style={{ width: '7rem', height: '1.75rem', marginLeft: 'auto' }}><strong>{acceptedlink.Work_Required}</strong></div>
            </div>
            <div className="container d-flex flex-row mt-3 justify-content-center ">
              <p className='text-center' style={{ color: 'rgb(75, 44, 169)', cursor: 'pointer' }}><strong>View all meta info</strong></p>
            </div>
          </div>
          <div className="container my-3 d-flex flex-column">
            <div className="container justify-content-center d-flex flex-row mt-2 ">
              <div className='mr-2'>{(acceptedlink.Rel_Attribute === 'dofollow')?'DF':'NF'}</div>
              <img src={(acceptedlink.Self_Publish === 'YES') ? 'instant_publish.svg ' : 'not_instant_publish.svg'} className='px-1' style={{ marginTop: '2px', height: 'fit-content' }} alt="NA" />
              <img src={(acceptedlink.Link_Type === 'Image') ? 'image_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
              <img src={(acceptedlink.Link_Type === 'Comment') ? 'comment_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
              <img src={(acceptedlink.Link_Type === 'Content') ? 'content_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
              <img src={(acceptedlink.Link_Type === 'Profile') ? 'profile_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
              <img src={(acceptedlink.Link_Type === 'Reference') ? 'reference_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
              <img src={(acceptedlink.Google_Indexed === 'YES') ? 'indexed.svg ' : 'noindexed.svg'} className='px-1' style={{ marginTop: '2px', height: 'fit-content' }} alt="NA" />
            </div>
            <div className="container mt-4 d-flex flex-row justify-content-between mt-2 ">
              <div className='mr-2' >Link Cost</div>
              <div className='mr-2'><strong>{acceptedlink.Link_category}</strong></div>
            </div>
            <div className="container mt-3 d-flex justify-content-between flex-row  ">
              <div className='' style={{ width: ' inherit' }}>Amount Paid</div>
              <div className='  rounded-pill text-center' style={{ width: '6rem', height: '1.75rem', backgroundColor: '#29CC97', color: 'white' }}><strong>${acceptedlink.Cost_usd}</strong></div>
            </div>
            <div className="container  d-flex justify-content-between flex-row" style={{ marginTop: '11px' }}>
              <div className='' style={{ width: ' inherit' }}>Linkly Credits</div>
              <div className='   rounded-pill text-center' style={{ width: '6rem', height: '1.75rem', backgroundColor: '#5541D7', color: 'white' }}><strong>{acceptedlink.linkly_credits}</strong></div>
            </div>
          </div>
          <div className="container my-3 d-flex flex-column">
            <div className='py-2 mb-2 font-weight-bold'>Useful Links</div>
            <div className=" d-flex flex-row justify-content-between ">
              <div className='py-2'>How to get that link</div>
              <img src="new_window.svg" className="imageicon mr-3 my-2 " style={{ marginTop: '4px', marginRight: '20px', cursor: 'pointer' }} on alt="NA" />
            </div>
            <div className=" d-flex flex-row justify-content-between ">
              <div className='py-2' >Condition for backlink</div>
              <img src="new_window.svg" className="imageicon mr-3 my-2" style={{ marginTop: '4px', marginRight: '20px', cursor: 'pointer' }} on alt="NA" />
            </div>
            <div className=" d-flex flex-row justify-content-between ">
              <div className='py-2' >Content Guidelines</div>
              <a href={`https://${acceptedlink.Content_Guidelines}`} rel="noopener noreferrer" target="_blank">

              <img src="new_window.svg"  className="imageicon mr-3 my-2" style={{ marginTop: '4px', marginRight: '20px', cursor: 'pointer' }} on alt="NA" />
              </a>
            </div>
          </div>
          <div className="container my-3 d-flex flex-column">
            <div className=' font-weight-bold mt-2'>Next Step</div>
            <div className='mt-3'>{acceptedlink.next_steps} </div>

          </div>
          <div className="container my-3 d-flex flex-column justify-content-between ">
            <button type="button" class=" mt-3 rounded-lg btn btn-primary font-weight-bold" style={{ backgroundColor: '#4b2ca9', height: ' 3.5rem' }}>Submit Here</button>
            <div>
              <div className='  ' >Current Status</div>
              <div class="btn-group  " style={{ width: '-webkit-fill-available' }} role="group">
                <button id="btnGroupDrop1" type="button" class="one btn btn-secondary dropdown-toggle" style={{ backgroundColor: '#e6f0f3', color: 'black' }} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Status
                </button>
                <div class=" px-3 dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <Link class="dropdown-item" to="/">Accepted</Link>
                  <Link class="dropdown-item" to="/">Pending</Link>
                </div>
              </div>
            </div>

            <div style={{ marginLeft: 'auto', cursor: 'pointer' }}><u>Feedback</u></div>
          </div>

        </div>
      </div>

    </>
  )
}

export default AcceptedLinks

