import { useState } from "react";
import LinkContext from "./Linkcontext";
import React from 'react'
import AcceptedLinks from "../Components/AcceptedLinks";

const Linkstate = (props) => {
  const host = "http://localhost:8000";
  const id = 1;
  const [Link, setLink] = useState([]);
  const [acceptedLinks, setacceptedLinks] = useState([]);
  const getallLinks = async () => {
    const response = await fetch(`${host}/v1/sample/userlinks/${id}`, {
      method: 'GET',

      headers: {
        'Content-Type': 'application/json',

        'authorization': localStorage.getItem('token')
      }

    });
    const json = await response.json();
    setLink(json);
    // console.log("Printing Links");
    // console.log(Link);
    Link.forEach(element => {
      console.log(element.Name);
    });

  }
  const getallacceptedLinks = async () => {
    const response = await fetch(`${host}/v1/sample/userlinks/accepted/${id}`, {
      method: 'GET',

      headers: {
        'Content-Type': 'application/json',

        'authorization': localStorage.getItem('token')
      }

    });
    const json = await response.json();
    console.log("1");
    console.log(json);
    console.log("2");
    setacceptedLinks(json);
    console.log("Printing Accepted Links");
   
    console.log(acceptedLinks);
    // acceptedLinks.forEach(element => {
    //    console.log(element);
    // });

  }

  return (
    <LinkContext.Provider value={{ acceptedLinks, getallacceptedLinks, Link, getallLinks }}>
      {props.children}
    </LinkContext.Provider>
  )
};

export default Linkstate