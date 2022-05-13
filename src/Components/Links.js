import React from 'react'
import Accountsection from './Accountsection'
import Linkcomponent from './Linkcomponent'
import { useContext } from 'react';
import Linkcontext from '../contextApi/Linkcontext';
import { useUserAuth } from "../contextApi/useAuthContext";
import { useEffect } from 'react';

const Links = () => {
  const { Link, getallLinks, getallacceptedLinks } = useContext(Linkcontext);
  // const { user } = useUserAuth();

  useEffect(() => {
    getallacceptedLinks();
    getallLinks();


// eslint-disable-next-line
}, [])
// const handlesubmit = async (e) => {
//   e.preventDefault();

//   const response = await fetch("http://localhost:5000/xyz", {
//       method:'GET',
//       headers: {
//           'Content-Type': 'application/json',
//           'authorization': localStorage.getItem('token'),
//           // 'userlevel':'1'
//       }
     
//   });
//   if(!response){
//     console.log("VERIFICATION ERROR OCCURED");
//   }
 
// }
return (
  <>
    
    
    <div className='mx-5'>
      <div class="container mx-10 my-5">
        <div class="d-flex flex-row">
          <div class=" text-center " style={{width:'106px'}}>
            SITE NAME
          </div>
          <div class=" text-center "  style={{width:'166px'}}>
            LINK TYPE
          </div>
          <div class=" text-center col-sm">
            Ahref#
          </div>
          <div class=" text-center col-sm">
            DA
          </div>
          <div class=" text-center col-sm">
            SPAM
          </div>
          <div class=" text-center col-sm">
            Category
          </div>
          <div class=" text-center col-sm">
            Work Required
          </div>
          <div class="text-center col-sm">
            COST
          </div>
          <div class="text-center col-sm" >

          </div>
        </div>
        <hr />
      </div>
      {Link.map((link) => {
        return <Linkcomponent key={link.Link_Id} link={link} />
      })}
    </div>

  </>
)
}

export default Links