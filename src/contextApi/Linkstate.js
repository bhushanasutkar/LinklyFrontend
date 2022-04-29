import { useState } from "react";
import LinkContext from "./Linkcontext";
import React from 'react'

const Linkstate = (props) => {
  const host = "http://localhost:8000";
  const id=1;
   const [Link, setLink] = useState([]);
   const getallLinks = async() => {
    const response = await fetch(`${host}/v1/sample/userlinks/${id}`, {
        method: 'GET', 

        headers: {
            'Content-Type': 'application/json',
            
            // 'auth-token': localStorage.getItem('token')
        }
        
    });
    const json= await response.json();
    setLink(json);
    console.log("Printing Links");
    console.log(Link);
    Link.forEach(element => {
       console.log(element.Name);
    });
    
}

  return (
    <LinkContext.Provider value={{Link,getallLinks}}>
    {props.children}
    </LinkContext.Provider>
  )
};

export default Linkstate