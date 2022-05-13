import React from 'react'
import Details from './Details';
import { useContext, useState } from 'react';
import Linkcontext from '../contextApi/Linkcontext';

const Linkcomponent = (props) => {

  const { Link, getallLinks } = useContext(Linkcontext);
  const { link } = props;
  const [value, setvalue] = useState(false)
  const viewdetails = () => {
    console.log(value);
    if (value === true) {
      setvalue(false);
    }
    else {
      setvalue(true);
    }
  }
  return (
    <>

      <div class="container-fluid mx-10 my-5">
        <div class="row  ">
          <div class="col-sm container-md  justify-content-center align-items-top   d-flex flex-row">
            <img src="microsoft.png" class="imageicon " style={{ marginTop: '6px' }} alt=""></img>
            <div className='px-2'>{link.Name}</div>
            <img src="new_window.svg" class="imageicon " style={{ marginTop: '6px' }} on alt="NA" />
          </div>
          <div class=" container d-flex flex-row text-center col-sm">
            <div>{link.Rel_Attribute}</div>
            <img src={(link.Self_Publish === 'YES') ? 'instant_publish.svg ' : 'not_instant_publish.svg'} className='px-1' style={{ marginTop: '2px', height: 'fit-content' }} alt="NA" />
            <img src={(link.Link_Type === 'Image') ? 'image_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
            <img src={(link.Link_Type === 'Comment') ? 'comment_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
            <img src={(link.Link_Type === 'Content') ? 'content_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
            <img src={(link.Link_Type === 'Profile') ? 'profile_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
            <img src={(link.Link_Type === 'Reference') ? 'reference_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
            <img src={(link.Google_Indexed === 'YES') ? 'indexed.svg ' : 'noindexed.svg'} className='px-1' style={{ marginTop: '2px', height: 'fit-content' }} alt="NA" />
          </div>
          <div class="text-center col-sm">
            #{link.Ahrefs_Rating}
          </div>
          <div class="text-center col-sm">
            {link.Domain_Authority}
          </div>
          <div class=" text-center col-sm">
            {link.Spam_Rating}%

          </div>
          <div class="text-center col-sm">
            {link.Category}
          </div>
          <div class="text-center col-sm">
            <div className='border text-center'>{link.Work_Required}</div>
          </div>
          <div class="text-center col-sm">
            <p className='text-center'>{link.Cost_usd}$</p>
          </div>
          <div class="text-center " style={{ width: '130px' }}>
            <button type="button" onClick={viewdetails} class="btn btn-info">View Detail </button>
          </div>
          {/* <div class="col-sm">
            <button type="button" onClick={getallLinks} class="btn btn-info">Get all Links</button>
          </div> */}
        </div>

        {/* here dropsown starts */}
        <div className="" style={{ backgroundColor: '#e6f0f3' }} >
          {value && <Details link={link} />}

        </div>
        <hr></hr>
      </div>
    </>

  )
}

export default Linkcomponent