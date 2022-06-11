import React from 'react'
import Accountsection from '../Accountsection'
import Rendeorderedlinks from '../Rendeorderedlinks'
const Orderdashboard = () => {
  return (
    <>
      <Accountsection heading={'Order Dashboard'} />
      <div className="container my-1">
        <div className="container border border-secondary" style={{ borderRadius: '10px' }}>
          <div className="container d-flex flex-row justify-content-end my-3 ">
            <h5 style={{ width: 'inherit', marginLeft: '30px' }}><strong>Here is a list of all the links created through Linkly</strong></h5>
            {/* <div className="container  d-flex flex-row justify-content-end " style={{ marginRight: '80px' }}>
              <img className="imageicon " style={{ marginTop: '4px', cursor: 'pointer' }} src="sort_icon.svg" alt="" />
              <div className='ml-1'><strong>Sort</strong></div>
              <img className="imageicon ml-4 " style={{ marginTop: '4px', cursor: 'pointer' }} src="filter_icon.svg" alt="" />
              <div className='ml-1'><strong>Filter</strong></div>
            </div> */}
          </div>
          <div className="container mx-10 my-5">
            <div className="d-flex flex-row ">
              <div className=" text-center " style={{ width: '9rem' }}>Order ID</div>
              <div className=" text-center " style={{ width: '9rem' }}>Link Created On</div>
              <div className=" text-center " style={{ width: '18rem' }}>Source Link</div>
              <div className=" text-center " style={{ width: '18rem' }}>Target Link</div>
              <div className=" text-center " style={{ width: '9rem' }}></div>
              <div className="text-center " style={{ width: '9rem' }}></div>
            </div>
            <hr />
            <Rendeorderedlinks/>
            <hr />
          </div>
        </div>

      </div>

    </>
  )
}

export default Orderdashboard