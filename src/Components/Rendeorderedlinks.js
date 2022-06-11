import React from 'react'
import { useContext } from "react";
import { useEffect } from 'react';
import Linkcontext from "../contextApi/Linkcontext";
import Orderedlink from './Orderedlink';
const Rendeorderedlinks = () => {
    const {Orderedlinks, setuserid ,getalloredredlinks} = useContext(Linkcontext);
    useEffect(() => {
        setuserid();
        getalloredredlinks();
        // eslint-disable-next-line
      }, []);

  return (
    <div style={{backgoundColor:'#f7f8fc'}}>
    {Orderedlinks.map((element) => {
      return <Orderedlink key={element.Id} orderedlink={element} />;
    })}
  
    </div>
   
  )
}

export default Rendeorderedlinks