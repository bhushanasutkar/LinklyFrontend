import React from 'react'
import Details from './Details';
import { useState } from 'react';


const Linkcomponent = (props) => {


  const { link } = props;
  const linkid = link.Link_Id;
  const [value, setvalue] = useState(false)
  const [icon, seticon] = useState('');


  const viewdetails = () => {
    // console.log(value);
    if (value === true) {
      setvalue(false);
    }
    else {
      setvalue(true);
    }
  }
  const geticon = async () => {
    const imagename = link.Name;
    const response = await fetch(
      "http://localhost:8000/v1/sample/linkly/icon/database",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({ imagename }),
      }
    );
    const data = await response.json();
    if (data[0].Icon!=null) {
      seticon(data[0].Icon);
    } else {
      const clearbitimageurl = `https://logo.clearbit.com/${imagename}.com`
      const clearbitresponse = await fetch(clearbitimageurl);
      if (clearbitresponse) {
        const imageurl=clearbitresponse
        const uploadedimageurl = await fetch(
          "http://localhost:8000/v1/sample/linkly/icon",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: localStorage.getItem("token"),
            },
            body: JSON.stringify({ imageurl, imagename }),
          }
        );
        seticon(uploadedimageurl);
      }
      else{
         const imageurl=`https://api.ritekit.com/v2/company-insights/logo?client_id=60c077eee8768fcc581ebbb780d3aee62acbaa2903e4&domain=${imagename}.com&generateFallbackLogo=0&squareLogoSize=256&squareLogoBackground=original`
         const uploadedimageurl = await fetch(
          "http://localhost:8000/v1/sample/linkly/icon",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: localStorage.getItem("token"),
            },
            body: JSON.stringify({ imageurl, imagename }),
          }
        );
        seticon(uploadedimageurl);
      }
      
    }

  };
  return (
    <>

      <div id={linkid} className="container-fluid mx-10 my-5">
        <div className="row  ">
          <div className="col-sm container-  justify-content-center align-items-top   d-flex flex-row">
            <div className='' style={{ width: '73px' }}>{link.Name}</div>
            <img src="new_window.svg" className="imageicon " style={{ marginTop: '5px' }} on alt="NA" />
          </div>
          <div className=" container d-flex flex-row text-center col-sm">
            <div>{link.Rel_Attribute}</div>
            <img src={(link.Self_Publish === 'YES') ? 'instant_publish.svg ' : 'not_instant_publish.svg'} className='px-1' style={{ marginTop: '2px', height: 'fit-content' }} alt="NA" />
            <img src={(link.Link_Type === 'Image') ? 'image_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
            <img src={(link.Link_Type === 'Comment') ? 'comment_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
            <img src={(link.Link_Type === 'Content') ? 'content_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
            <img src={(link.Link_Type === 'Profile') ? 'profile_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
            <img src={(link.Link_Type === 'Reference') ? 'reference_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
            <img src={(link.Google_Indexed === 'YES') ? 'indexed.svg ' : 'noindexed.svg'} className='px-1' style={{ marginTop: '2px', height: 'fit-content' }} alt="NA" />
          </div>
          <div className="text-center col-sm">
            {link.content_type}
          </div>
          <div className="text-center col-sm">
            {link.Domain_Authority}
          </div>
          <div className=" text-center col-sm">
            {link.Spam_Rating}%

          </div>
          <div className="text-center col-sm">
            {link.Category}
          </div>
          <div className="text-center col-sm">
            <div className='boorder text-center'>{link.Work_Required}</div>
          </div>
          <div className="text-center col-sm">
            <p className='text-center'>{link.Cost_usd}$</p>
          </div>
          <div className="text-center " style={{ width: '130px' }}>
            <button type="button" onClick={viewdetails} className="btn btn-info">View Detail </button>
          </div>
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

