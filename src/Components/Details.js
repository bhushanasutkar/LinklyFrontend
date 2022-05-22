import React from 'react'
let firstaccept = true;
let firsthide = true;
const Details = (props) => {
  const { link } = props;

  const linkid = 1;
  const UserId = 1;
  const price = link.Link_category;
  const handlehide = async (e) => {
    e.preventDefault();
    console.log('Running Handlehide ');
    console.log(firsthide);
    if (firsthide) {
      const Archive = 0;
      const response = await fetch("https://linkly-backend-stg.herokuapp.com/v1/sample/link-vault/link_status", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem('token'),

        },
        body: JSON.stringify({ linkid,UserId, Archive })


      });
      if (!response) {
        console.log("VERIFICATION ERROR OCCURED");
      }
      else {
        firsthide = false;
      }
    }

    else {
      const response = await fetch("https://linkly-backend-stg.herokuapp.com/v1/sample/link-vault/linkstatushide", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem('token'),

        },
        body: JSON.stringify({ linkid })


      });
      if (!response) {
        console.log("VERIFICATION ERROR OCCURED");
      }
    }

  }
  const handleaccept = async (e) => {
    e.preventDefault();
    console.log('Running Handleaccept ');
    console.log(firstaccept);
    if (firstaccept) {
      const Archive = 1;
      const response = await fetch("https://linkly-backend-stg.herokuapp.com/v1/sample/link-vault/link_status", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem('token'),

        },
        body: JSON.stringify({ linkid, Archive, UserId })


      });
      if (!response) {
        console.log("VERIFICATION ERROR OCCURED");
      }
      else {
        firstaccept = false;
      }
    }
    else {
      const response = await fetch("https://linkly-backend-stg.herokuapp.com/v1/sample/link-vault/linkstatusaccept", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem('token'),

        },
        body: JSON.stringify({ linkid, price })

      });
      if (!response) {
        console.log("VERIFICATION ERROR OCCURED");
      }
    }

  }
  return (
    <>
      <hr style={{ width: '700px', height: '3px', marginLeft: '118px', marginTop: '2px' }} />
      <div>

        <div className=" py-2 container d-flex flex-row " >
          <div className="container  d-flex flex-row" style={{ width: '800px' }}>
            <div className="container d-flex flex-column" >
              <p><strong> Description: </strong> {link.Description}</p>
              <p><strong> Language: </strong> {link.Main_Language}</p>
              <p><strong>Categories :</strong> Category1, Category2, Category3, Category4</p>
            </div>
            <div className="container mx-0  d-flex flex-column  " style={{ width: '610px' }} >

              {link.Ahrefs_Rating && <p style={{ marginLeft: '20px' }}>Ahrefs DR:<strong> {link.Ahrefs_Rating}</strong> </p>}
              <p style={{ marginLeft: '20px' }}>Organic Keywords :<strong>1900</strong></p>
              <p style={{ marginLeft: '20px' }}>No of backlins :<strong>1900</strong></p>
              <p style={{ marginLeft: '20px' }}>Linking Domain :<strong>1900</strong></p>
            </div>
            <div className="container mx-0 d-flex flex-column" style={{ width: '525 px' }} >
              {link.Average_Pageviews && <p>Pageviews: <strong>{link.Average_Pageviews}</strong>/mo</p>}
              {link.TS_Organic && <p>Organic: <strong>&nbsp;{link.TS_Organic}</strong>%</p>}
              {link.TS_Social && <p>Direct: <strong> &nbsp;&nbsp;&nbsp;&nbsp;{link.TS_Social}</strong>%</p>}
              {link.TS_Referral && <p>Referral: <strong>&nbsp;&nbsp;{link.TS_Referral}</strong>%</p>}
              <div>Do they link to pirated or adult sites ? <strong>{link.Is_Pyrated}</strong> </div>

            </div>
          </div>
          <div style={{ borderLeft: '3px solid black', height: '200px' }} ></div>
          <div className="container  d-flex flex-row">
            <div className="container d-flex flex-column justify-content-center align-items-center">
              <p>Self Publish Probability : <strong>High</strong></p>
              <p>Condition for self publish  <img src="new_window.svg" class="imageicon " style={{ marginTop: '-2px', marginLeft: '4px' }} on alt="NA" /> </p>
            </div>
            <div className="container d-flex flex-column justify-content-center align-items-center">
              <button onClick={handleaccept} type="button" class="btn btn-success my-2" style={{ width: 'inherit' }}>Accept</button>
              <button onClick={handlehide} type="button" class="btn btn-outline-danger my-2" style={{ width: 'inherit' }}>Hide</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details