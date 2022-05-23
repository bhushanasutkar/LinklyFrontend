import { useState } from "react";
import LinkContext from "./Linkcontext";
import React from 'react'

const Linkstate = (props) => {
  const host = "https://linkly-backend-stg.herokuapp.com";
  // const id = 1;
  const [Link, setLink] = useState([]);
  const [acceptedLinks, setacceptedLinks] = useState([]);
  const getallLinks = async () => {
    const response = await fetch(`${host}/v1/userlink/1`, {
      method: 'GET',

      headers: {
        'Content-Type': 'application/json',

        'authorization': localStorage.getItem('token')
      }

    });
    const json = await response.json();
    setLink(json.Links);
  
  }
  const getallacceptedLinks = async () => {
    const response = await fetch(`${host}/v1/userlink/accepted/1`, {
      method: 'GET',

      headers: {
        'Content-Type': 'application/json',

        'authorization': localStorage.getItem('token')
      }

    });
    const data = await response.json();
    setacceptedLinks(data.AcceptedLinks);

  }

  return (
    <LinkContext.Provider value={{ acceptedLinks, getallacceptedLinks, Link, getallLinks }}>
      {props.children}
    </LinkContext.Provider>
  )
};

export default Linkstate