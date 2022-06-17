import React from "react";
import { useState } from "react";
import { Addlinktomonitorpopup } from "./Popups";
import Linkmonitor from "./Linkmonitor";
import { useContext } from "react";
import Linkcontext from "../contextApi/Linkcontext";
import { useEffect } from "react";
const Monitorlink = () => {
  const UserId = localStorage.getItem('userid');
  const { Orderidlist, setOrderidlist } = useContext(Linkcontext);
  const [present, setpresent] = useState();
  const [absent, setabsent] = useState()
  const [notchecked, setnotchecked] = useState()
  // const host = "http://localhost:8000";
  // const host = "https://linkly-backend-stg.herokuapp.com";
  const host = process.env.React_App_host

  const [isOpenAcceplink, setIsOpenAcceplink] = useState(false);
  const toggleAddlink = async () => {
    setIsOpenAcceplink(!isOpenAcceplink);
    const response = await fetch(`${host}/v1/userlink/orderids`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: 'Bearer ' + localStorage.getItem("token"),
      },
      body: JSON.stringify({ UserId }),
    });
    // console.log(response);
    const json = await response.json();
   
    console.log("Inside handlecldfgfick")

    // console.log(json.Orderids);
    setOrderidlist(json.Orderids);
    console.log(Orderidlist);
    Orderidlist.forEach(element => {
      // console.log(element.order_id);
    });
  };

  const getcount = async () => {


    const response = await fetch(`${host}/v1/userlink/getcountstatus`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: 'Bearer ' + localStorage.getItem("token"),
      },
      body: JSON.stringify({ UserId }),
    });
    const json = await response.json();
    console.log(json.response[0].total)
    setpresent(json.response[0].total)
    setabsent(json.response[1].total)
    setnotchecked(json.response[2].total)

  };
  const { Monitooredlink, getallmonitoredlink, setuserid } = useContext(Linkcontext);


  useEffect(() => {
    setuserid();
    getallmonitoredlink();
    getcount();



    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <div className="container">
        <div
          className="  container border border-secondary d-flex flex-row"
          style={{ borderRadius: "10px" }}
        >
          <div className="container my-2">
            <div className=" container d-flex flex-column">
              <h4> Why use Backlink Monitor?</h4>
              <div className="mx-3" style={{ width: "50rem" }}>
                Use backlink monitor to keep checking that the backlinks you
                created are not removed. After all, you paid for them with
                money,Linkly credits or your time and effort.
              </div>
              <div className="mx-3">
                Whenever you get a backlink, add it to Backlink Monitor to get
                notified if it is removed or edited and take necessary action
                proactively.
              </div>
            </div>
          </div>
          <div className="container d-flex justify-content-center align-items-center">
            <button
              type="button"
              class=" mt-3 rounded-lg btn btn-primary font-weight-bold"
              onClick={toggleAddlink}
              style={{
                backgroundColor: "#4b2ca9",
                height: " 3rem",
                width: "inherit",
              }}
            >
              {" "}
              Add Link to Monitor
            </button>
          </div>
        </div>
      </div>
      <div className="container ">
        <h4 className="mx-5 px-3 my-2">Current Status</h4>
      </div>
      <div className="container">
        <div className="container d-flex flex-row justify-content-around">
          <div
            className="card customcard my-2 "
            style={{ width: "10rem", height: "9rem" }}
          >
            <span
              class="dot px-1 py-1"
              style={{
                marginLeft: "auto",
                marginTop: "2px",
                marginRight: "2px",
              }}
            ></span>
            <div className="card-body">
              <h4 className="card-title text-muted text-center">Total Links</h4>
              <h1 className="text-center mt-3">{Monitooredlink.length}</h1>
            </div>
          </div>
          <div
            className="card customcard my-2"
            style={{ width: "10rem", height: "9rem" }}
          >
            <div className="card-body" style={{ marginTop: "inherit" }}>
              <h4 className=" py-1 my-1 card-title text-muted text-center">
                Success
              </h4>
              <h1 className="text-center mt-3">{present}</h1>
            </div>
          </div>
          <div
            className="card customcard my-2"
            style={{ width: "10rem", height: "9rem" }}
          >
            <div className="card-body" style={{ }}>
              <h4 className="  card-title text-muted text-center">
                Not Checked
              </h4>
              <h1 className="text-center ">{notchecked}</h1>
            </div>
          </div>
          <div
            className="card customcard my-2"
            style={{ width: "10rem", height: "9rem" }}
          >
            <div className="card-body" style={{ marginTop: "inherit" }}>
              <h4 className="card-title py-1 my-1 text-muted text-center">
                Failure
              </h4>
              <h1 className="text-center mt-3">{absent}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-1">
        <div
          className="container border border-secondary"
          style={{ borderRadius: "10px" }}
        >
          <div className="container d-flex flex-row justify-content-end my-3 ">
            <h5 style={{ width: "inherit", marginLeft: "60px" }}>
              <strong>Grab your backlinks now!</strong>
            </h5>
            <div
              className="container  d-flex flex-row justify-content-end "
              style={{ marginRight: "80px" }}
            >
              <img
                className="imageicon "
                style={{ marginTop: "4px", cursor: "pointer" }}
                src="sort_icon.svg"
                alt=""
              />
              <div className="ml-1">
                <strong>Sort</strong>
              </div>
              <img
                className="imageicon ml-4 "
                style={{ marginTop: "4px", cursor: "pointer" }}
                src="filter_icon.svg"
                alt=""
              />
              <div className="ml-1">
                <strong>Filter</strong>
              </div>
            </div>
          </div>
          <div className="container mx-10 my-5">
            <div className="d-flex flex-row ">
              <div className=" text-center " style={{ width: "9rem" }}>
                Order ID
              </div>
              <div className=" text-center " style={{ width: "9rem" }}>
                Added On
              </div>
              <div className=" text-center " style={{ width: "18rem" }}>
                Source Link
              </div>
              <div className=" text-center " style={{ width: "18rem" }}>
                Target Link
              </div>
              <div className=" text-center " style={{ width: "9rem" }}>
                Last Checked
              </div>
              <div className="text-center " style={{ width: "9rem" }}>
                Status
              </div>
            </div>
            <hr />
            {Monitooredlink.map((element) => {
              return <Linkmonitor key={element.Id} monitorlink={element} />;
            })}
            <hr />
          </div>
        </div>

        {isOpenAcceplink && (
          <Addlinktomonitorpopup handleClose={toggleAddlink} />
        )}
      </div>


    </div>

  )
};

export default Monitorlink;
