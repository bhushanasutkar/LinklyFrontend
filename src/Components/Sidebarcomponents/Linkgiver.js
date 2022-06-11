import React from 'react'
import Accountsection from '../Accountsection';
import Linkgiverlinks from '../Linkgiverlinks';
const Linkgiver = () => {
  return (
    <div>  
        <Accountsection heading={'Link Giver Admin'} />
        <div className="container d-flex flex-row justify-content-end ">
          <h5 style={{    width: 'inherit',marginLeft: '60px'}}><strong>Publish & notify the links you have received</strong></h5>
        </div>
        <Linkgiverlinks/>
    </div>
  )
}

export default Linkgiver