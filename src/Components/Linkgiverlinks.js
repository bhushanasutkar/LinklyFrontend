import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Linkcontext from "../contextApi/Linkcontext";
import Linkgivercomponent from "./Linkgivercomponent";
const Linkgiverlinks = () => {
  // const host = "https://linkly-backend-stg.herokuapp.com";
  const { Linkgiverlinks, getallLinkgiverlinks,setuserid } = useContext(Linkcontext);


  useEffect(() => {
    setuserid();
    getallLinkgiverlinks();
    console.log("linkgiver ")
    console.log(Linkgiverlinks);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {Linkgiverlinks.map((link) => {
        return <Linkgivercomponent key={link.Link_Id} linkgiverlink={link} />;
      })}
    </>
  );
};

export default Linkgiverlinks;
