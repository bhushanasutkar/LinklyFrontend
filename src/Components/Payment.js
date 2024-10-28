import React from 'react'

const Payment = async () => {
    const host= process.env.React_App_host

    const handleclick =async()=>{
        const response = await fetch(`${host}/v1/userlink/getpaymentstatus`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization:  "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify({ }),
          });
          console.log(response); 
    }
   
    

  return (
    <>
    <button type="button" onClick={handleclick} class=" mt-3 rounded-lg btn btn-primary font-weight-bold" style={{ backgroundColor: 'rgb(253 252 0)', height: ' 3rem', width: '13rem' ,color:'black', borderBlockColor: 'inherit'}}>{`Buy Now`}</button>
    </>
   
  )
}

export default Payment