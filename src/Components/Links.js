import React from "react";

import Linkcomponent from "./Linkcomponent";
import { useContext } from "react";
import Linkcontext from "../contextApi/Linkcontext";

import { useEffect } from "react";

const Links = () => {
  
  const { size,setsize,Link, getallLinks,setuserid } = useContext(Linkcontext);

  useEffect(() => {
    setuserid();
    getallLinks();
    // eslint-disable-next-line
  }, [size]);
   function getsize(){
    setsize(size+10);    
   }


  window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      getsize();

    }
};


  return (
    <>
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
