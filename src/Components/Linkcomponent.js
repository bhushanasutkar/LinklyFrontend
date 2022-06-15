import React, { useEffect } from 'react'
import Details from './Details';
import { useState } from 'react';


const Linkcomponent = (props) => {


  const { link } = props;
  const linkid = link.Link_Id;
  const [value, setvalue] = useState(false)
  const [icon, seticon] = useState('');
  const host = process.env.React_App_host;

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
      `${host}/v1/userlink/icondatabase`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({ imagename }),
      }
    );
    const data = await response.json();
    if (data.response[0].Icon != null) {
      console.log(data.response[0].Icon );
      seticon(data.response[0].Icon );
    }
    else {
      const clearbitimageurl = `https://logo.clearbit.com/${imagename}.com`
      fetch(clearbitimageurl).then(async function (ress) {
        const imageurl = ress.url
        const uploadedimageurl = await fetch(
          `${host}/v1/userlink/iconurl`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: 'Bearer ' + localStorage.getItem("token"),
            },
            body: JSON.stringify({ imageurl, imagename }),
          }
        );
        const finalurl = await uploadedimageurl.json();
        // console.log(finalurl.url);
        seticon(finalurl.url);
        const inserturl = finalurl.url
        const inserticon = await fetch(
          `${host}/v1/userlink/inserticon`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: 'Bearer ' + localStorage.getItem("token"),
            },
            body: JSON.stringify({ inserturl, imagename }),
          }
        );
        

      }).catch(async function () {
        console.log("Inside ritekit");
        const imageurl = `https://api.ritekit.com/v2/company-insights/logo?client_id=60c077eee8768fcc581ebbb780d3aee62acbaa2903e4&domain=${imagename}.com&generateFallbackLogo=0&squareLogoSize=256&squareLogoBackground=original`;
        fetch(imageurl).then(async function (ress) {
          const tempurl=ress.url;
          const uploadedimageurl = await fetch(
            `${host}/v1/userlink/iconurl`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                authorization: 'Bearer ' + localStorage.getItem("token"),
              },
              body: JSON.stringify({ tempurl, imagename }),
            }
          );
          const finalurl = await uploadedimageurl.json();
          // console.log(finalurl.url);
          seticon(finalurl.url);
        });
       
      });;






    }

  };
  useEffect(() => {
    geticon();
  }, [])

  return (
    <>

      <div id={linkid} className=" my-4">
        <div className="row mx-0 px-2" style={{ marginBottom: '0px' }}>
          <div className="col-sm container  justify-content-center align-items-center   d-flex flex-row">
            <img className='mr-2 imageicon' src={(icon) ? icon : "image_link.svg"} alt="NA" />
            <div className='pr-1' style={{ width: '113px' }}>{link.Name}</div>
            <a href={`https://${link.Url}`} rel="noopener noreferrer" target="_blank">
              <img src="new_window.svg" className="imageicon " style={{ marginTop: '0px' }} on alt="" />
            </a>
          </div>
          <div className=" container d-flex flex-row text-center col-sm align-items-center mr-2">
            <div className='tooltip-wrap'>
              <div style={{ fontWeight: '500', fontSize: '0.9rem' }}>{link.Rel_Attribute.toUpperCase()}</div>
              <div className='tooltip-content' >{(link.Rel_Attribute === 'dofollow') ? 'This link will pass link juice to your site.' : 'Doesn’t pass link juice to your site, good for getting your site discovered.'}</div>
            </div>
            <div className='tooltip-wrap'>
              <img src={(link.SPM_Instantapproval === 'YES') ? 'instant_publish.svg ' : 'not_instant_publish.svg'} className='px-1' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
              <div className='tooltip-content' >{(link.SPM_Instantapproval === 'YES') ? 'For self-publish sites, your blog will be posted instantly. ' : ' Your blog will be reviewed & then published by the author.'}</div>
            </div>
            <div className='tooltip-wrap'>
              <img src={(link.Link_Type === 'Comment') ? 'comment_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
              <div className='tooltip-content' >Backlink from comments on QnAs or blogs.</div>
            </div>
            <div className='tooltip-wrap'>
              <img src={(link.Link_Type === 'Image') ? 'image_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
              <div className='tooltip-content' >Backlink from image, with an alt-text.</div>
            </div>
            <div className='tooltip-wrap'>
              <img src={(link.Link_Type === 'Author Bio') ? 'author_bio_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
              <div className='tooltip-content' > Backlink from Author byline, might be on blog page, or separate author page
              </div>
            </div>
            <div className='tooltip-wrap'>
              <img src={(link.Link_Type === 'Content') ? 'content_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
              <div className='tooltip-content' >Most wanted form of backlink, from the content, preferably at the top.</div>
            </div>
            {link.Link_Type === null && <div className='tooltip-wrap'>
              <img src={(link.Link_Type === null) ? 'info.svg' : ''} className='' style={{ marginTop: '2px', width:'20px', height: 'fit-content' }} alt="" />
              <div className='tooltip-content' >Read more in ‘Content Guidelines’ & ‘How to get link’ doc to know details.</div>
            </div>}
            <div className='tooltip-wrap'>
              <img src={(link.Link_Type === 'Profile') ? 'profile_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
              <div className='tooltip-content' >Backlink from user profile page, like facebook profile.
              </div>
            </div>
            <div className='tooltip-wrap'>
              <img src={(link.Link_Type === 'Reference') ? 'reference_link.svg ' : ''} className='' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
              <div className='tooltip-content' > Backlink at the bottom of the blog, in references/bibliography section</div>
            </div>

            <div className='tooltip-wrap'>
              <img id='indexed' src={(link.Google_Indexed === 'YES') ? 'indexed.svg ' : 'noindexed.svg'} className='px-1' style={{ marginTop: '2px', height: 'fit-content' }} alt="" />
              <div className='tooltip-content' >{(link.Google_Indexed === 'YES') ? ' Search engines will index this page.' : 'This link will not be indexed by search engines.'}</div>
            </div>

          </div>
          <div style={{ color: '#828282' }} className="text-center col-sm container d-flex justify-content-center  align-items-center">
            {link.content_type}
          </div>
          <div style={{ color: '#828282' }} className="text-center col-sm container d-flex justify-content-center  align-items-center">
            {link.Domain_Authority}
          </div>
          <div style={{ color: '#828282' }} className=" text-center col-sm container d-flex justify-content-center  align-items-center">
            {link.Spam_Rating}%

          </div>
          <div style={{ color: '#828282' }} className="text-center col-sm container d-flex justify-content-center  align-items-center">
            {link.Category}
          </div>
          <div style={{ color: '#828282', fontFamily: 'Mulish' }} className="text-center col-sm d-flex justify-content-center  align-items-center"  >
            <div style={{ width: 'inherit' }} className='boorder  border-secondary text-center' >{link.Work_Required}</div>
          </div>
          {link.Link_category === "PAID" &&
            <div className="text-center col-sm d-flex justify-content-center  align-items-center">
              <p className='mb-0'> <strong>${Math.max.apply(null, [link.Price_gb_usd, link.Price_gbcbd_usd, link.Price_LinkInsertion_usd, link.Price_LinkInsertioncbd_usd])}</strong></p>
            </div>}
          {link.Link_category === "FREE" &&
            <div className="text-center col-sm d-flex justify-content-center  align-items-center">
              <div className='rounded-pill border ' style={{ backgroundColor: '#29CC97', color: 'white', width: 'inherit' }}><strong>FREE</strong></div>
            </div>}
          {link.Link_category === "EXCHANGE" &&
            <div className="text-center col-sm text-center container col-sm d-flex justify-content-center  align-items-center">
              <div className='' style={{}}><strong>Link Exchange</strong> </div>
            </div>}
          <div onClick={viewdetails} className="text-center container d-flex flex-row  align-items-center justify-content-between" style={{ width: '130px', color: '#5541D7', cursor: 'pointer' }}>
            <div type="" className="">View Detail</div>
            {!value && <img className='imageicon  pt-1 ' src="icons8-chevron-down-30.png" alt="NA" />}
            {value && <img className='imageicon pt-1  ' src="icons8-chevron-up-30.png" alt="NA" />}

          </div>
        </div>

        {/* here dropsown starts */}
        <div className="" style={{ backgroundColor: '#F7F8FF' }} >
          {value && <Details link={link} />}

        </div>
      </div>
      <hr style={{ marginBottom: '1px', marginTop: '0px' }}></hr>
    </>

  )
}

export default Linkcomponent

