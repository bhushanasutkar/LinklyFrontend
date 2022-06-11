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
        <div className="container   my-5">
          <div className="d-flex flex-row ">
            <div className=" text-center " style={{ width: "140px" }}>
              SITE NAME
            </div>
            <div className=" text-center " style={{ width: "188px" }}>
              LINK TYPE
            </div>
            <div className=" text-center col-sm ml-2">Content Req.</div>
            <div className=" text-center col-sm">DA</div>
            <div className=" text-center col-sm">SPAM</div>
            <div className=" text-center col-sm">Category</div>
            <div className=" text-center col-sm pr-1">Work Required</div>
            <div className="text-center col-sm pl-4 pr-0  ">COST</div>
            <div className="text-center col-sm"></div>
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
