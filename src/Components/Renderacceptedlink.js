import React from "react";
import { useContext } from "react";
import Linkcontext from "../contextApi/Linkcontext";
import { useEffect } from "react";
import AcceptedLinks from "./AcceptedLinks";
const Renderacceptedlink = () => {
  const { acceptedLinks, getallacceptedLinks } = useContext(Linkcontext);
  useEffect(() => {
    getallacceptedLinks();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {acceptedLinks.map((element) => {
        return <AcceptedLinks key={element.Cost_usd} acceptedlink={element} />;
      })}
    </div>
  );
};

export default Renderacceptedlink;
