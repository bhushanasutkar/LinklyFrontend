import React from "react";

import Linkcomponent from "./Linkcomponent";
import { useContext  } from "react";
import Linkcontext from "../contextApi/Linkcontext";

import { useEffect } from "react";

const Links = () => {
 
  const { setLink,Link,getallLinks,setuserid } = useContext(Linkcontext);
  const setsorted=()=>{
    
    console.log("hey")
    // console.log(Link);
    
    var sdelect = document.getElementById('sortlinkvalut').value;
    console.log(sdelect);
    setuserid();
    setLink(Link.splice(0,Link.length));
    console.log(Link)
    console.log(sdelect);
    getallLinks(sdelect);
    console.log("Hi")
    console.log(Link)
  }
  // const setfilter=()=>{
  //   var sdelect = document.getElementById('sortlinkvaludgft').value;
  //   console.log(sdelect);
  //   setuserid();
  //     getallLinks(sdelect);
  // }
  useEffect(() => {
    setuserid();
    getallLinks("Link_Id");
    // console.log(size);
    
    // eslint-disable-next-line
  }, []);
  //  function getsize(){
  //   setsize(size+10);    
  //  }


//   window.onscroll = function(ev) {
//     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//       getsize();

//     }
// };


  return (
    <>
    <div className="container d-flex flex-row justify-content-end pt-3" style={{ backgroundColor: '#f7f8ff', height: '60px' }}>
          <h5 style={{ width: 'inherit', marginLeft: '40px' }}><strong>Grab your backlinks now!</strong></h5>
          <div className="container  d-flex flex-row justify-content-end " style={{ marginRight: '80px', backgoundColor: '' }}>
            <img className="imageicon " style={{ marginTop: '4px', cursor: 'pointer' }} src="sort_icon.svg" alt="" />
            <select  style={{
                height: '1.5rem',
                width: '8rem',
                border: 'aliceblue',
                backgroundColor: '#f7f8ff',
                borderRadius: '0px', marginTop: '0px', cursor: 'pointer'
              }} onChange={setsorted} id='sortlinkvalut'>
                <option value="Link_Id"><strong>Sort(Default)</strong> </option>
                <option value="Domain_Authority desc" >Increasing Domain Authority</option>
                <option value="Domain_Authority asc" >Decreasing Domain Authority</option>
                <option value="Ahrefs_Rating desc">Increasing Ahrefs Rating </option>
                <option value="Ahrefs_Rating asc">Decreasing Ahrefs Rating </option>
                <option value="GREATEST(Price_gb_usd,Price_gbcbd_usd,Price_LinkInsertion_usd,Price_LinkInsertioncbd_usd) desc"> Increasing Price</option>
                <option value="GREATEST(Price_gb_usd,Price_gbcbd_usd,Price_LinkInsertion_usd,Price_LinkInsertioncbd_usd) asc"> Decreasing Price</option>
              </select>
            {/* <img className="imageicon ml-4 " style={{ marginTop: '4px', cursor: 'pointer' }} src="filter_icon.svg" alt="" />
            <select  style={{
                height: '1.5rem',
                width: '4rem',
                border: 'aliceblue',
                backgroundColor: '#f7f8ff',
                borderRadius: '0px', marginTop: '0px', cursor: 'pointer'
              }}  id='sortlinkvalutgilter'>
                <option value="Link_Id"><strong>Filter</strong> </option>
                <option value="Domain_Authority desc" >Increasing Domain Authority</option>
                <option value="Domain_Authority asc" >Decreasing Domain Authority</option>
                <option value="Ahrefs_Rating desc">Increasing Ahrefs Rating </option>
                <option value="Ahrefs_Rating asc">Decreasing Ahrefs Rating </option>
                <option value="GREATEST(Price_gb_usd,Price_gbcbd_usd,Price_LinkInsertion_usd,Price_LinkInsertioncbd_usd) desc"> Increasing Price</option>
                <option value="GREATEST(Price_gb_usd,Price_gbcbd_usd,Price_LinkInsertion_usd,Price_LinkInsertioncbd_usd) asc"> Decreasing Price</option>
              </select> */}
          </div>
        </div>

      <div className="">
        <div className="container   mt-5">
          <div className="d-flex flex-row ">
            <div className=" text-center " style={{ width: "185px" }}>
              SITE NAME
            </div>
            <div className=" text-center " style={{ width: "150px" }}>
              LINK TYPE
            </div>
            <div className=" text-center  "  style={{ width: "188px" }}>Content Required</div>
            <div className=" text-center  "  style={{ width: "54px" }}>DA</div>
            <div className=" text-center  "  style={{ width: "186px" }}>SPAM</div>
            <div className=" text-center  "  style={{ width: "65px" }}>Category</div>
            <div className=" text-center  "  style={{ width: "181px" }}>Work Required</div>
            <div className="text-center   "  style={{ width: "64px" }}>COST</div>
            <div className="text-center "></div>
          </div>
          <hr />
        </div>
        {Link.map((link) => {
          return <Linkcomponent key={link.Link_Id} link={link} />;
        })}
      </div>
    </>
  );
};

export default Links;
