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
  // const userid =  localStorage.getItem('userid');
   var userid;
 
  console.log("Printing id");
  console.log(userid);
  const [Link, setLink] = useState([]);
  const [acceptedLinks, setacceptedLinks] = useState([]);
  const [LinkID, setLinkID] = useState();
  const [acceptsize, setacceptsize] = useState(5);
  const [size, setsize] = useState(10);
  const [Linkgiverlinks, setLinkgiverlinks] = useState([])
  const [Orderedlinks, setOrderedlinks] = useState([])
  const [Monitooredlink, setMonitooredlink] = useState([])
  const [Orderidlist, setOrderidlist] = useState([])
  const setuserid=()=>{
    userid= localStorage.getItem('userid');
    
    // setLinkID(id);
  }
  const getallLinks = async () => {
    console.log(size);
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
    setLink(json.Links);

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
        authorization: localStorage.getItem("token"),
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

        authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ userid,acceptsize }),
    });
    const data = await response.json();
    setacceptedLinks(data.AcceptedLinks);

  };
 
  return (
    <LinkContext.Provider
      value={{ Orderidlist, acceptsize, setacceptsize,setOrderidlist ,size,setsize,acceptedLinks,Monitooredlink, getallacceptedLinks, getallmonitoredlink,Link,Orderedlinks, getalloredredlinks,getallLinks,setuserid, LinkID ,Linkgiverlinks, getallLinkgiverlinks }}
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