import React from 'react'

const Accountsection = (props) => {
  

  return (
    <>
      <div className="container d-flex justify-content-between" style={{ backgroundColor: 'rgb(247, 248, 255)' }}>
        <h1 className='py-4 pl-3' style={{ width: 'inherit', fontSize:'24px' }}>{props.heading}</h1>
        <div className=" py-4 pr-3 container d-flex justify-content-end" style={{ height: '100px' }}>
          <div className="container ">
            <p className='text-end font-weight-bold' style={{ margin: '0', fontWeight: 700 }}>{localStorage.getItem('name')}</p>
            <p className='text-end'>{localStorage.getItem('email')}</p>
          </div>

          <img src={localStorage.getItem('imgurl')} className="img-rounded imagesizeuser mx-2 " alt="Cinque Terre"></img>
        </div>
      </div>

    </>
  )
}

export default Accountsection