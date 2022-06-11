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
    if (data[0].Icon != null) {
      seticon(data[0].Icon);
    } else {
      const clearbitimageurl = `https://logo.clearbit.com/${imagename}.com`
      const clearbitresponse = await fetch(clearbitimageurl);
      if (clearbitresponse) {
        const imageurl = clearbitresponse
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
      else {
        const imageurl = `https://api.ritekit.com/v2/company-insights/logo?client_id=60c077eee8768fcc581ebbb780d3aee62acbaa2903e4&domain=${imagename}.com&generateFallbackLogo=0&squareLogoSize=256&squareLogoBackground=original`
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

      <div id={linkid} className=" my-5">
        <div className="row mx-0 px-2" style={{marginBottom: '13px'}}>
          <div className="col-sm container-  justify-content-center align-items-top   d-flex flex-row">
            <div className='pr-1' style={{ width: '113px' }}>{link.Name}</div>
            <a href={`https://${link.Url}`} rel="noopener noreferrer" target="_blank">
              <img src="new_window.svg" className="imageicon " style={{ marginTop: '5px' }} on alt="" />
            </a>
          </div>
          <div className=" container d-flex flex-row text-center col-sm">
            <div style={{ fontWeight: '500', fontSize: 'revert' }}>{link.Rel_Attribute.toUpperCase()}</div>
            <div className='tooltip-wrap'>
              <img src={(link.SPM_Instantapproval === 'YES') ? 'instant_publish.svg ' : 'not_instant_publish.svg'} className='px-1' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
              <div className='tooltip-content' >{(link.SPM_Instantapproval === 'YES') ? 'Instant publish Yes' : 'Instant publish Review'}</div>
            </div>
            <div className='tooltip-wrap'>
              <img src={(link.Link_Type === 'Comment') ? 'comment_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
              <div className='tooltip-content' >Link types comment link</div>
            </div>
            <div className='tooltip-wrap'>
              <img src={(link.Link_Type === 'Image') ? 'image_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
              <div className='tooltip-content' >Link types image link</div>
            </div>
            <div className='tooltip-wrap'>
              <img src={(link.Link_Type === 'Author Bio') ? 'author_bio_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
              <div className='tooltip-content' >Link types author bio link</div>
            </div>
            <div className='tooltip-wrap'>
              <img src={(link.Link_Type === 'Content') ? 'content_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
              <div className='tooltip-content' >Link types content link</div>
            </div>
            <div className='tooltip-wrap'>
              <img src={(link.Link_Type === null) ? 'info.svg' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
              <div className='tooltip-content' >Link types fallback</div>
            </div>
            <div className='tooltip-wrap'>
              <img src={(link.Link_Type === 'Profile') ? 'profile_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
              <div className='tooltip-content' >Link types profile link</div>
            </div>
            <div className='tooltip-wrap'>
              <img src={(link.Link_Type === 'Reference') ? 'reference_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
              <div className='tooltip-content' >Link types reference link</div>
            </div>

            <div className='tooltip-wrap'>
              <img id='indexed' src={(link.Google_Indexed === 'YES') ? 'indexed.svg ' : 'noindexed.svg'} className='px-1' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
              <div className='tooltip-content' >{(link.Google_Indexed === 'YES') ? 'This link will be indexed by search engines.' : 'This link will not be indexed by search engines.'}</div>
            </div>

          </div>
          <div style={{ color: '#828282' }} className="text-center col-sm">
            {link.content_type}
          </div>
          <div style={{ color: '#828282' }} className="text-center col-sm">
            {link.Domain_Authority}
          </div>
          <div style={{ color: '#828282' }} className=" text-center col-sm">
            {link.Spam_Rating}%

          </div>
          <div style={{ color: '#828282' }} className="text-center col-sm">
            {link.Category}
          </div>
          <div style={{ color: '#828282' ,fontFamily: 'Mulish'}} className="text-center col-sm">
            <div className='boorder  border-secondary text-center' >{link.Work_Required}</div>
          </div>
          {link.Link_category === "PAID" &&
            <div className="text-center col-sm">
              <p className='text-center'> <strong>${Math.max.apply(null, [link.Price_gb_usd, link.Price_gbcbd_usd, link.Price_LinkInsertion_usd, link.Price_LinkInsertioncbd_usd])}</strong></p>
            </div>}
          {link.Link_category === "FREE" &&
            <div className="text-center col-sm">
              <div className='rounded-pill border ' style={{ backgroundColor: '#29CC97', color: 'white' }}><strong>FREE</strong></div>
            </div>}
          {link.Link_category === "EXCHANGE" &&
            <div className="text-center col-sm">
              <div className='' style={{}}><strong>Link Exchange</strong> </div>
            </div>}
          <div onClick={viewdetails} className="text-center container d-flex flex-row justify-content-between" style={{ width: '130px', color: '#5541D7', cursor: 'pointer' }}>
            <div type="" className="">View Detail</div>
            {!value && <img className='imageicon  pt-1 ' src="icons8-chevron-down-30.png" alt="NA" />}
            {value && <img className='imageicon pt-1  ' src="icons8-chevron-up-30.png" alt="NA" />}

          </div>
        </div>

        {/* here dropsown starts */}
        <div className="" style={{ backgroundColor: '#F7F8FF' }} >
          {value && <Details link={link} />}

        </div>
        <hr style={{marginBottom:'1px', marginTop:'0px'}}></hr>
      </div>
    </>

  )
}

export default Linkcomponent

