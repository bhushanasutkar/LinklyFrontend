import React from 'react'

const Accountsection = (props) => {
  

  return (
    <>
      <div className="container d-flex justify-content-between" style={{ backgroundColor: '' }}>
        <h1 style={{ width: 'inherit' }}>{props.heading}</h1>
        <div className="container d-flex justify-content-end" style={{ height: '100px' }}>
          <div className="container ">
            <p className='text-end font-weight-bold' style={{ margin: '0', fontWeight: 700 }}>User</p>
            <p className='text-end'>flickzee.com</p>
          </div>

          <img src="images.jfif" className="img-rounded imagesize mx-2" alt="Cinque Terre"></img>
        </div>
      </div>

    </>
  )
}

export default Accountsection