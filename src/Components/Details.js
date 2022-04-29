import React from 'react'

const Details = (props) => {
  const{link}=props;
  return (
      <>
    <hr style={{ width: '700px',height:'3px', marginLeft: '118px', marginTop:'2px' }} />
    <div>
    
         <div className=" py-2 container d-flex flex-row " >
            <div className="container  d-flex flex-row" style={{ width: '800px' }}>
              <div className="container d-flex flex-column" >
                <p><strong> Description: </strong> {link.Description}</p>
                <p><strong> Language: </strong> {link.Main_Language}</p>
                <p><strong>Categories :</strong> Category1, Category2, Category3, Category4</p>
              </div>
              <div className="container mx-0  d-flex flex-column  "style={{ width: '610px' }} >
                
                { link.Ahrefs_Rating && <p style={{ marginLeft: '20px' }}>Ahrefs DR:<strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{link.Ahrefs_Rating}</strong> </p>}
                <p style={{ marginLeft: '20px' }}>Organic Keywords :<strong>&nbsp;1900</strong></p>
                <p style={{ marginLeft: '20px' }}>No of backlins :<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1900</strong></p>
                <p style={{ marginLeft: '20px' }}>Linking Domain :<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1900</strong></p>
              </div>
              <div className="container mx-0 d-flex flex-column" style={{ width: '525 px' }} >
               {link.Average_Pageviews && <p>Pageviews: <strong>{link.Average_Pageviews}</strong>/mo</p>}
                { link.TS_Organic &&  <p>Organic: <strong>&nbsp;{link.TS_Organic}</strong>%</p>}
                { link.TS_Social && <p>Direct: <strong> &nbsp;&nbsp;&nbsp;&nbsp;{link.TS_Social}</strong>%</p>}
                { link.TS_Referral && <p>Referral: <strong>&nbsp;&nbsp;{link.TS_Referral}</strong>%</p>}
              </div>
            </div>
          <div style={{borderLeft: '3px solid black',height: '200px'}} ></div>
          <div className="container  d-flex flex-row">
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <p>Self Publish Probability : <strong>High</strong></p>
                <p>Condition for self publish</p>
            </div>
            <div className="container d-flex flex-column justify-content-center align-items-center">
            <button type="button" class="btn btn-success my-2" style={{width: 'inherit'}}>Accept</button>
            <button type="button" class="btn btn-outline-danger my-2" style={{width: 'inherit'}}>Hide</button>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Details