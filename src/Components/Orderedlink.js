import React from 'react'

const Orderedlink = (props) => {
    const {orderedlink}= props;
    console.log(orderedlink);
    return (

        <>
            <div className="d-flex flex-row my-3 ">
            
                <div className=" text-center text-muted " style={{ width: '9rem' }}>{`#${orderedlink.order_id}`}</div>
                <div className=" text-center" style={{ width: '9rem' }}><strong>{`${orderedlink.link_added_on}`}</strong></div>
                <div className=" mx-1 px-1" style={{ width: '18rem',textAlign: 'center', wordWrap:' break-word' }}><strong>{orderedlink.source_link}</strong></div>
                <div className=" mx-1  px-1" style={{ width: '18rem',textAlign: 'center', wordWrap:' break-word' }}><strong>{orderedlink.target_link}</strong></div>
                <div className="">
                    <div className=" container d-flex flex-row justify-content-between  ">
                        <div className='mr-2' >Link Cost</div>
                        <div className='mr-4'><strong>{`${orderedlink.Link_category}`}</strong></div>
                    </div>
                    <div className="container  d-flex justify-content-between flex-row  ">
                        <div className='' style={{ width: ' ' }}>Amount Paid</div>
                        <div className='   text-center' style={{ width: '6rem', height: '1.5rem', color: '#29CC97' }}><strong>{(orderedlink.amout_paid)?orderedlink.amout_paid:0}</strong></div>
                    </div>
                    <div className="container  d-flex justify-content-between flex-row" style={{ marginTop: '1px' }}>
                        <div className='' style={{ width: ' ' }}>Linkly Credits</div>
                        <div className='    text-center' style={{ width: '6rem', height: '1.5rem', color: '#5541D7' }}><strong>{(orderedlink.linkly_credits)?orderedlink.linkly_credits:0}</strong></div>
                    </div>
                </div>
                <div className='    text-center' style={{ width: '4rem', height: '1.75rem', color: '#5541D7', cursor: 'pointer' }}><strong>View Login Detail</strong></div>
            <hr />
            </div>
        </>

    )
}

export default Orderedlink