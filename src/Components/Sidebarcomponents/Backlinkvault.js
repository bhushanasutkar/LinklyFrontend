import React from 'react'
import Accountsection from '../Accountsection';

import Links from '../Links';
const Backlinkvault = () => {
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

  return (
    <div>
     <Accountsection heading={'Backlink Vault'}/>
     <Links></Links>  
    </div>
  )
  
}

export default Backlinkvault