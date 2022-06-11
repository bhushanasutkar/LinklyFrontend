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
     <div className="container d-flex flex-row mt-3 justify-content-end ">
          <h5 className='pt-2' style={{    width: 'inherit',marginLeft: '40px'}}><strong>Grab your backlinks now !</strong></h5>
        </div>
     <Links></Links>  
    </div>
  )
  
}

export default Backlinkvault