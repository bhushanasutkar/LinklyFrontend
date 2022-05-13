import React from 'react'


import { useContext } from 'react';
import Linkcontext from '../contextApi/Linkcontext';
import { useUserAuth } from "../contextApi/useAuthContext";
import { useEffect } from 'react';


const AcceptedLinks = () => {
    const { acceptedLinks, getallacceptedLinks } = useContext(Linkcontext);
    useEffect(() => {
        getallacceptedLinks();

    // eslint-disable-next-line
    }, [])

    return (
        <div>AcceptedLinks</div>
    )
}

export default AcceptedLinks