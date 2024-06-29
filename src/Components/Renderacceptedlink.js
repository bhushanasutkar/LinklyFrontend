import React from "react";
import { useContext,useMemo,useRef} from "react";
import Linkcontext from "../contextApi/Linkcontext";
import { useEffect } from "react";
import AcceptedLinks from "./AcceptedLinks";
const Renderacceptedlink = () => {
  const { acceptsize, setacceptsize, acceptedLinks, getallacceptedLinks, setuserid } = useContext(Linkcontext);
  useEffect(() => {
    setuserid();
    getallacceptedLinks();

    // eslint-disable-next-line
  }, [acceptsize]);
  function getsize() {
    // console.log(acceptsize);
    // alert('reached');
    // alert(acceptsize);
    setacceptsize(acceptsize + 5);
  }
  
  // const useMemoRef = useRef(0);

  // const incrementUseMemoRef = () => useMemoRef.current++;

  // const memoizedValue = useMemo(() => incrementUseMemoRef(), [acceptsize]);

  window.onscroll = function (ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      // alert("reacged")
      getsize();

    }
  };
  return (
    <>
   

    <div style={{backgroundColor:'#f7f8ff'}}>
      {acceptedLinks.map((element) => {
        return <AcceptedLinks key={element.Link_Id} acceptedlink={element}  />;
      })}
    </div>
    </>
  );
};

export default Renderacceptedlink;
