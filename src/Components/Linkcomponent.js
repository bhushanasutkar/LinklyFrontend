import React from 'react'
import IosShareIcon from '@mui/icons-material/IosShare';
import Details from './Details';
import { useContext, useState } from 'react';
import Linkcontext from '../contextApi/Linkcontext';

const Linkcomponent = (props) => {

  const { Link,getallLinks } = useContext(Linkcontext);
  const{link}=props;
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

      <div class="container-md mx-10 my-5">
        <div class="row">
          <div class="col-sm container-md d-flex flex-row">
            <img src="microsoft.png" class="imageicon my-1" alt=""></img>
            {/* Link.name */}
            <div>{link.Name}</div>
            <IosShareIcon></IosShareIcon>
          </div>
          <div class="col-sm">
            <div>{link.Rel_Attribute}</div>

          </div>
          <div class="col-sm">
            #{link.Ahrefs_Rating}
          </div>
          <div class="col-sm">
            {link.Domain_Authority}
          </div>
          <div class="col-sm">
            {link.Spam_Rating}%
          </div>
          <div class="col-sm">
            {link.Category}
          </div>
          <div class="col-sm">
            <div className='border text-center'>{link.Work_Required}</div>
          </div>
          <div class="col-sm">
            <p className=''>{link.Cost}</p>
          </div>
          <div class="col-sm">
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