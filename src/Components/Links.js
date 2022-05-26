import React from "react";

import Linkcomponent from "./Linkcomponent";
import { useContext } from "react";
import Linkcontext from "../contextApi/Linkcontext";

import { useEffect } from "react";

const Links = () => {
  
  const { Link, getallLinks } = useContext(Linkcontext);

  useEffect(() => {
    getallLinks();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="mx-5">
        <div className="container mx-10 my-5">
          <div className="d-flex flex-row">
            <div className=" text-center " style={{ width: "106px" }}>
              SITE NAME
            </div>
            <div className=" text-center " style={{ width: "166px" }}>
              LINK TYPE
            </div>
            <div className=" text-center col-sm ml-2">Content Req.</div>
            <div className=" text-center col-sm">DA</div>
            <div className=" text-center col-sm">SPAM</div>
            <div className=" text-center col-sm">Category</div>
            <div className=" text-center col-sm">Work Required</div>
            <div className="text-center col-sm">COST</div>
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
