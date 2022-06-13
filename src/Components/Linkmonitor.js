import React from 'react'

const Linkmonitor = (props) => {
    const {monitorlink}=props
    return (
        <>
             <div className="d-flex flex-row ">
                <div className=" text-center  " style={{width:'9rem'}}>#{monitorlink.OrderId}</div>
                <div className=" text-center"  style={{width:'9rem'}}><strong>{monitorlink.link_added_on}</strong></div>
                <div className=" text-center "  style={{width:'18rem'}}><strong>{monitorlink.source_link}</strong></div>
                <div className=" text-center "  style={{width:'18rem'}}><strong>{monitorlink.target_link}</strong></div>
                <div className=" text-center "  style={{width:'9rem'}}><strong>{monitorlink.checked_on}</strong></div>
                <div className="text-center text-light border rounded-pill " style={{height: 'fit-content',marginLeft: '10px',width:'9rem',backgroundColor:'rgb(41, 204, 151)'}}><strong>{monitorlink.status.toUpperCase()}</strong></div>
            </div>
            <hr />
        </>
    )
}

export default Linkmonitor