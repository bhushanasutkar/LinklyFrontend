import { useState } from "react";
import LinkContext from "./Linkcontext";
import React from "react";
import { useLocation } from "react-router-dom";

const Linkstate = (props) => {
  // let lation = useLocation();
  // const host = "https://linkly-backend-stg.herokuapp.com";
  // const host = "http://localhost:8000";
  const host= process.env.React_App_host
  var userid;
 
  console.log("Printing id");
  console.log(userid);
  const [Link, setLink] = useState([]);
  const [acceptedLinks, setacceptedLinks] = useState([]);
  const [LinkID, setLinkID] = useState();
  const [flag, setflag] = useState(true);
  const [acceptsize, setacceptsize] = useState(5);
  const [size, setsize] = useState(10);
  const [Linkgiverlinks, setLinkgiverlinks] = useState([])
  const [Orderedlinks, setOrderedlinks] = useState([])
  const [Monitooredlink, setMonitooredlink] = useState([])
  const [Orderidlist, setOrderidlist] = useState([])
  console.log(Link);
  // if (lation.pathname === '/' || lation.pathname === '/signup') {
  //   // setLink(Link.splice(0,Link.length));
  // }
  // if(localStorage.getItem('userid')==null){

  // }
  //  if( !window.localStorage )
  // {
  //   setLink(Link.splice(0,Link.length));
   
   
  // }
  const setuserid=()=>{
    console.log("Set userid");
    userid= localStorage.getItem('userid');
  }
  
  const getallLinks = async () => {
    setuserid();
    // console.log(size);
    const firebaseUserIdToken = localStorage.getItem("token")
    const response = await fetch(`${host}/v1/userlink`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",

        authorization:  "Bearer " + firebaseUserIdToken,

      },
      body: JSON.stringify({ userid,size }),
    });
    const json = await response.json();
    setLink(Link.concat( json.Links));
    // setLink(json.Links);

  };

  const getalloredredlinks = async () => {
    console.log("Inside getallorder");
    const firebaseUserIdToken = localStorage.getItem("token")
    const response = await fetch(`${host}/v1/userlink/orderedlinks`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",

        authorization:  "Bearer " + firebaseUserIdToken,

      },
      body: JSON.stringify({userid }),
    });
    const json = await response.json();
    console.log(json);
    setOrderedlinks(json.Orderlinks);

  };

  const getallmonitoredlink = async () => {
    console.log("Inside monitor");
    const firebaseUserIdToken = localStorage.getItem("token")
    const response = await fetch(`${host}/v1/userlink/monitorlink`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",

        authorization:  "Bearer " + firebaseUserIdToken,

      },
      body: JSON.stringify({userid }),
    });
    const json = await response.json();
    console.log(json);
    setMonitooredlink(json.Monitorlinks);

  };
  const getallLinkgiverlinks= async ()=>{
  
    const response = await fetch(`${host}/v1/userlink/linkgiver`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({userid}),
    });
    const json = await response.json();
    setLinkgiverlinks(json.Linkgiverlinks);
    // console.log(Linkgiverlinks);
  }
  const getallacceptedLinks = async () => {
    
    const response = await fetch(`${host}/v1/userlink/accepted`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",

        authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({ userid,acceptsize }),
    });
    const data = await response.json();
    setacceptedLinks(data.AcceptedLinks);

  };
 
  return (
    <LinkContext.Provider
      value={{ Orderidlist, acceptsize, setflag,setacceptsize,setOrderidlist ,setLink,size,setsize,acceptedLinks,Monitooredlink, getallacceptedLinks, getallmonitoredlink,Link,Orderedlinks, getalloredredlinks,getallLinks,setuserid, LinkID ,Linkgiverlinks, getallLinkgiverlinks }}
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