import React from 'react'
import Accountsection from './Accountsection'
import Linkcomponent from './Linkcomponent'
import { useContext, useState } from 'react';
import Linkcontext from '../contextApi/Linkcontext';
import { useEffect } from 'react';

const Links = () => {
  const { Link, getallLinks } = useContext(Linkcontext);

  useEffect(() => {

    getallLinks();


// eslint-disable-next-line
}, [])
return (
  <>
    <Accountsection></Accountsection>
    <div className='mx-5'>
      <div class="container mx-10 my-5">
        <div class="row">
          <div class="col-sm ">
            SITE NAME
          </div>
          <div class="col-sm">
            LINK TYPE
          </div>
          <div class="col-sm">
            Ahref#
          </div>
          <div class="col-sm">
            DA
          </div>
          <div class="col-sm">
            SPAM
          </div>
          <div class="col-sm">
            Category
          </div>
          <div class="col-sm">
            Work Required
          </div>
          <div class="col-sm">
            COST
          </div>
          <div class="col-sm">

          </div>
        </div>
        <hr />
      </div>
      {Link.map((link) => {
        console.log("Print 1");
        return <Linkcomponent key={link.WebsiteID} link={link} />
      })}
    </div>

  </>
)
}

export default Links