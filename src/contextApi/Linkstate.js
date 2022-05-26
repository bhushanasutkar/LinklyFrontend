import { useState } from "react";
import LinkContext from "./Linkcontext";
import React from "react";



const Linkstate = (props) => {
  // const host = "https://linkly-backend-stg.herokuapp.com";
  const host = "http://localhost:8000";
  // let x = document.cookie;
  // const userid = x;
  // console.log("Printing Coookie");
  // console.log(x);
  const userid =  localStorage.getItem('userid');
 
  console.log("Printing id");
  console.log(userid);
  const [Link, setLink] = useState([]);
  const [acceptedLinks, setacceptedLinks] = useState([]);
  const getallLinks = async () => {
  
    const response = await fetch(`${host}/v1/userlink`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",

        authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ userid }),
    });
    const json = await response.json();
    setLink(json.Links);

  };
  const getallacceptedLinks = async () => {
    
    const response = await fetch(`${host}/v1/userlink/accepted`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",

        authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ userid }),
    });
    const data = await response.json();
    setacceptedLinks(data.AcceptedLinks);

  };
 
  return (
    <LinkContext.Provider
      value={{ acceptedLinks, getallacceptedLinks, Link, getallLinks }}
    >
      {props.children}
    </LinkContext.Provider>
  );
  
};

export default Linkstate;
// if( window.localStorage )
// {
//   //check if reloaded once already 
//   if( !localStorage.getItem('firstLoad') )
//   {
//    //if not reloaded once, then set firstload to true
//     localStorage['firstLoad'] = true;
//     //reload the webpage using reload() method
//     window.location.reload();
//   }  
//   else 
//     localStorage.removeItem('firstLoad');
// }
 // localStorage['firstLoad'] = true;
  // if(localStorage.getItem('firstLoad')){

  // }