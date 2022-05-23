import React from 'react'
import Accountsection from '../Accountsection';
// import Linkmonitor from '../Linkmonitor';

const Backlinkmonitor = () => {
  return (
    <>
      <Accountsection heading={'Backlink Monitor'} />
      <div className="container">
        <div className="  container border border-secondary d-flex flex-row" style={{ borderRadius: '10px' }}>
          <div className="container my-2">
            <div className=" container d-flex flex-column">
              <h4> Why use Backlink Monitor?</h4>
              <div className='mx-3' style={{ width: '50rem' }} >Use backlink monitor to keep checking that the backlinks you created are not removed. After all, you paid for them with money,Linkly credits or your time and effort.</div>
              <div className='mx-3'>Whenever you get a backlink, add it to Backlink Monitor to get notified if it is removed or edited and take necessary action proactively.</div>
            </div>
          </div>
          <div className="container d-flex justify-content-center align-items-center">
            <button type="button" class=" mt-3 rounded-lg btn btn-primary font-weight-bold" style={{ backgroundColor: '#4b2ca9', height: ' 3rem', width: 'inherit' }}> Add Link to Monitor</button>
          </div>
        </div>
      </div>
      <div className="container ">
        <h4 className='mx-5 px-3 my-2'>Current Status</h4>
      </div>
      <div className="container ">
        <div className="container d-flex flex-row justify-content-around">
          <div className="card customcard my-2 " style={{ width: '10rem', height: '9rem' }}>
            <span class="dot px-1 py-1" style={{ marginLeft: 'auto', marginTop: '2px', marginRight: '2px' }}></span>
            <div className="card-body">
              <h4 className="card-title text-muted text-center">Total Links</h4>
              <h1 className='text-center mt-3'>64</h1>
            </div>
          </div>
          <div className="card customcard my-2" style={{ width: '10rem', height: '9rem' }}>
            <div className="card-body" style={{ marginTop: 'inherit' }}>
              <h4 className=" py-1 my-1 card-title text-muted text-center">Success</h4>
              <h1 className='text-center mt-3'>64</h1>
            </div>
          </div>
          <div className="card customcard my-2" style={{ width: '10rem', height: '9rem' }}>
            <div className="card-body" style={{ marginTop: 'inherit' }}>
              <h4 className="card-title py-1 my-1 text-muted text-center">Failure</h4>
              <h1 className='text-center mt-3'>64</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-1">
        <div className="container border border-secondary" style={{ borderRadius: '10px' }}>
          <div className="container d-flex flex-row justify-content-end my-3 ">
            <h5 style={{ width: 'inherit', marginLeft: '60px' }}><strong>Grab your backlinks now!</strong></h5>
            <div className="container  d-flex flex-row justify-content-end " style={{ marginRight: '80px' }}>
              <img className="imageicon " style={{ marginTop: '4px', cursor: 'pointer' }} src="sort_icon.svg" alt="" />
              <div className='ml-1'><strong>Sort</strong></div>
              <img className="imageicon ml-4 " style={{ marginTop: '4px', cursor: 'pointer' }} src="filter_icon.svg" alt="" />
              <div className='ml-1'><strong>Filter</strong></div>
            </div>
          </div>
          <div className="container mx-10 my-5">
            <div className="d-flex flex-row ">
              <div className=" text-center "  style={{width:'9rem'}}>Order ID</div>
              <div className=" text-center " style={{width:'9rem'}}>Added On</div>
              <div className=" text-center " style={{width:'18rem'}}>Source Link</div>
              <div className=" text-center " style={{width:'18rem'}}>Target Link</div>
              <div className=" text-center " style={{width:'9rem'}}>Last Checked</div>
              <div className="text-center " style={{width:'9rem'}}>Status</div>
            </div>
            <hr />
            <div className="d-flex flex-row ">
                <div className=" text-center  " style={{width:'9rem'}}># 34,457</div>
                <div className=" text-center"  style={{width:'9rem'}}><strong>May 25, 2019</strong></div>
                <div className=" text-center "  style={{width:'18rem'}}><strong>https://www.sporthero.com/bla-bla-bloom.com</strong></div>
                <div className=" text-center "  style={{width:'18rem'}}><strong>https://www.sporthero.com/bla-bla-bloom.com</strong></div>
                <div className=" text-center "  style={{width:'9rem'}}><strong>May 25, 2019</strong></div>
                <div className="text-center text-light border rounded-pill " style={{height: 'fit-content',width:'9rem',backgroundColor:'rgb(41, 204, 151)'}}><strong>PRESENT</strong></div>
            </div>
            <hr />
          </div>
        </div>

      </div>
    </>

  )
}

export default Backlinkmonitor