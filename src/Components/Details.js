import React from "react";
// import { useUserAuth } from "../contextApi/useAuthContext";
import Linkcontext from "../contextApi/Linkcontext";
import { useContext } from "react";
import { userdetailid } from "./Login";
const auth = require("../firebase");
const Details = (props) => {
  const { link } = props;
  const linkid = link.Link_Id;
  const { Userid, setUserid } = useContext(Linkcontext);
  // const { userid } = useUserAuth();
  // console.log("Inside details")
  // console.log(userdetailid);
  // console.log(Userid);
  const UserId = localStorage.getItem("userid");
  // const UserId = userdetailid;
  // console.log(UserId);
  const email = "bhushanasutkar0002@gmail.com";
  const host = "https://linkly-backend-stg.herokuapp.com";
  // const host = "http://localhost:8000";
  const handlehide = async (e) => {
    e.preventDefault();

    const Archive = 0;
    const response = await fetch(`${host}/v1/userlink/link_status`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ linkid, UserId, Archive }),
    });
    var x = document.getElementById(linkid);
    x.style.display = "none";
    if (!response) {
      alert("ERROR OCCURED");
    }
    if (!response) {
      alert("ERROR OCCURED");
    }
  };
  const handleaccept = async (e) => {
    e.preventDefault();
    const Archive = 1;
    const response = await fetch(`${host}/v1/userlink/link_status`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ linkid, UserId, Archive }),
    });
    var x = document.getElementById(linkid);
    x.style.display = "none";
    if (!response) {
      alert("ERROR OCCURED");
    }
  };

  return (
    <>
      <hr
        style={{
          width: "700px",
          height: "3px",
          marginLeft: "118px",
          marginTop: "20px",
        }}
      />
      <div>
        <div className=" py-1  d-flex flex-row ">
          <div
            className="container  d-flex flex-row"
            style={{ width: "810px" }}
          >
            <div className="container d-flex flex-column">
              { link.Description && <div className='tooltip-wrap-desc'>
                <p >
                  <strong> Description: </strong> {(link.Description.length > 95) ? link.Description.substring(0, 95) + "..." : link.Description}

                </p>
                {(link.Description.length > 95) && <div className='tooltip-content-desc' >{link.Description}</div>}
              </div>}
              <p>
                <strong> Language: </strong> {link.Main_Language}
              </p>
              {link.primary_category && <p>
                <strong>Categories :</strong> {link.primary_category}
              </p>}
            </div>
            <div
              className="container mx-0  d-flex flex-column  "
              style={{ width: "610px" }}
            >
              {link.Ahrefs_Rating && (
                <p style={{ marginLeft: "20px" }}>
                  Ahrefs DR:<strong> {link.Ahrefs_Rating}</strong>{" "}
                </p>
              )}
              { link.organic_keyword && <p style={{ marginLeft: "20px" }}>
                Organic Keywords :<strong>{link.organic_keyword}</strong>
              </p>}
              {link.no_of_backlinks && <p style={{ marginLeft: "20px" }}>
                No of backlins :<strong>{link.no_of_backlinks}</strong>
              </p>}
              {link.linking_domain && <p style={{ marginLeft: "20px" }}>
                Linking Domain :<strong>{link.linking_domain}</strong>
              </p>}
              {link.Alexa_Rank > 0 && (
                <p style={{ marginLeft: "20px" }}>
                  Alexa Rank :
                  <strong className="px-1">{link.Alexa_Rank}</strong>
                </p>
              )}
            </div>
            <div
              className="container mx-0 d-flex flex-column"
              style={{ width: "525 px" }}
            >
              {link.Average_Pageviews > 0 && (
                <p>
                  Pageviews: <strong>{link.Average_Pageviews}</strong>/mo
                </p>
              )}
              {link.TS_Organic > 0 && (
                <p>
                  Organic: <strong>&nbsp;{link.TS_Organic}</strong>%
                </p>
              )}
              {link.TS_Social > 0 && (
                <p>
                  Direct:{" "}
                  <strong> &nbsp;&nbsp;&nbsp;&nbsp;{link.TS_Social}</strong>%
                </p>
              )}
              {link.TS_Referral > 0 && (
                <p>
                  Referral: <strong>&nbsp;&nbsp;{link.TS_Referral}</strong>%
                </p>
              )}
              <div className=" mb-2 d-flex flex-row ">
                <div>
                  Self-Publish:
                </div>
                <div className="pl-4">
                  <strong>{link.Self_Publish}</strong>
                </div>
              </div>
              <div>
                Do they link to pirated or adult sites?
                <strong className="pl-2">{link.Is_Pyrated}</strong>{" "}
              </div>
            </div>
          </div>
          <div style={{ borderLeft: "3px solid black", height: "inherit" }}></div>
          <div className="container  d-flex flex-row">
            <div className="container d-flex flex-column justify-content-center ">
              {link.Link_category === 'PAID' &&
                <div className="">
                  <div className=" d-flex flex-row my-2 ">
                    <div class="" style={{ width: '120px' }} >
                      Guest Blog:
                    </div>
                    <div style={{ width: '40px', fontWeight: '700' }}>
                      ${link.Price_gb_usd}
                    </div>
                    <input class=" mx-2" style={{ marginTop: '6px' }} type="checkbox" value="" id="flexCheckDefault" />
                  </div>
                  <div className=" d-flex flex-row my-1  ">
                    <div class="" style={{ width: '120px' }}>
                      Guest Post<p style={{ fontSize: 'x-small' }} >(CBD & Gambling sites)</p>
                    </div>
                    <div style={{ width: '40px', fontWeight: '700' }}>
                      ${link.Price_gbcbd_usd}
                    </div>
                    <input class=" mx-2" style={{ marginTop: '6px' }} type="checkbox" value="" id="flexCheckDefault" />
                  </div>
                  <div className=" d-flex flex-row  my-1 ">
                    <div class="" style={{ width: '120px' }}>
                      Link Insertion:
                    </div>
                    <div className="" style={{ width: '40px', fontWeight: '700' }}>
                      ${link.Price_LinkInsertion_usd}
                    </div>
                    <input class=" mx-2" style={{ marginTop: '6px' }} type="checkbox" value="" id="flexCheckDefault" />
                  </div>
                  <div className=" d-flex flex-row my-1  ">
                    <div class="" style={{ width: '120px' }} >
                      Link Insertion<p style={{ fontSize: 'x-small' }} >(CBD & Gambling sites)</p>
                    </div>
                    <div style={{ width: '40px', fontWeight: '700' }}>
                      ${link.Price_LinkInsertioncbd_usd}
                    </div>
                    <input class="mx-2" style={{ marginTop: '6px' }} type="checkbox" value="" id="flexCheckDefault" />
                  </div>

                </div>

              }
              {link.Self_Publish === "YES" && link.Link_category === 'FREE' && (
                <div>
                  {link.SPM_Probability === "LOW" && (
                    <p style={{ width: '186px' }}>
                      Self Publish Probability : <strong>Low</strong>
                    </p>
                  )}
                  {link.SPM_Probability === "MEDIUM" && (
                    <p style={{ width: '186px' }}>
                      Self Publish Probability:<strong>Medium</strong>
                    </p>
                  )}
                  {link.SPM_Probability === "HIGH" && (
                    <p style={{ width: '186px' }}>
                      Self Publish Probability : <strong>High</strong>
                    </p>
                  )}
                  <p>
                    Condition for self publish:
                    <a href={`https://${link.Condition}`} rel="noopener noreferrer" target="_blank">
                      <img
                        src="new_window.svg"
                        class="imageicon "
                        style={{ marginTop: "-2px", marginLeft: "9px", cursor: 'pointer' }}
                        on
                        alt="NA"
                      />
                    </a>
                  </p>
                </div>
              )}
              {link.Link_category === "EXCHANGE" && (
                <div>
                  <p className="pl-3" style={{ width: '186px' }}>
                    Condition for link exchange
                    <a href={`https://${link.Condition}`} rel="noopener noreferrer" target="_blank">
                      <img
                        src="new_window.svg"
                        class="imageicon "
                        style={{ marginTop: "-2px", marginLeft: "9px", cursor: 'pointer' }}
                        on
                        alt="NA"
                      />
                    </a>
                    {" "}
                  </p>
                </div>
              )}
            </div>
            <div className="container d-flex flex-column justify-content-center align-items-center">
              <button
                onClick={handleaccept}
                type="button"
                className="btn btn-success my-2 "
                style={{ width: "inherit", backgroundColor: '#29CC97', borderRadius: '20px', border: '0px' }}
              >
                <strong> ACCEPT</strong>
              </button>
              <button
                onClick={handlehide}
                type="button"
                className="btn btn-outline-danger my-2"
                style={{ width: "inherit", borderRadius: '20px' }}
              >
                Hide
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
