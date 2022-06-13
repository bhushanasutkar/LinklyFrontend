
import React from "react";
import { useContext } from "react";
import Linkcontext from "../contextApi/Linkcontext";
import { useState } from "react";
// const host = "https://linkly-backend-stg.herokuapp.com";
const host= process.env.React_App_host
const Feedbackpopup = props => {
  const UserId = localStorage.getItem('userid');
  const Linkid= props.linkid
  // const Linkid=1;
  const handleclick= async ()=>{
    console.log("Inside handleclick")
    const input1 = document.getElementById("exampleFormControlInput1").value
    const input2 = document.getElementById("feedbackstatus").value; 
    const response = await fetch(`${host}/v1/userlink/update_feedback`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization:  "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({Linkid,UserId, input1, input2 }),
    });
    console.log(response);


  }
  return (
    <div className="popup-box">
      <div style={{width: '33%', height: '35rem',marginLeft: '40rem', marginTop: 'calc(100vh - 90vh - 0px)'}} className="boxx" >
        <div className="container d-flex flex-row justify-content-between" style={{ backgroundColor: '#363740', fontSize: 'xx-large' }}>
          <div className="text-light my-3">Feedback on {props.acceptedlinkname}</div>
          <span className="text-muted px-2 " style={{ fontSize: 'xxx-large' }} onClick={props.handleClose}>x</span>
        </div>
        <div className=" mb-5 mt-4 container" style={{ fontWeight: '500' }}>
          <div className="px-2 text-center">Something isn’t right with the information we have shown ? </div>
          <div className="px-2 text-center">Let us know and we will fix it in 24 hours.</div>
        </div>
        <div className="container ">
          <div className="px-5 my-4">
            <div className="px-3">Feedback Type</div>
            <select id="feedbackstatus" className=""  style={{
              height: '2.5rem',
              width: '-webkit-fill-available',
              borderRadius: '9px', marginTop: '3px', cursor: 'pointer',marginRight: '15px',marginLeft: '15px'
            }}>
              <option  value="Registration Link is broken">Registration Link is broken</option>
              <option value="Site does not accept submissions anymore">Site does not accept submissions anymore</option>
              <option value="Category is wrong">Category is wrong</option>
              <option value="Language is wrong">Language is wrong</option>
              <option value="Instructions given are not correc,t/understandable">Instructions given are not correc,t/understandable</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="px-5 my-4">
            <div class=" px-3 form-group ">
              <label className="" htmlFor="exampleFormControlInput1">More Details</label>
              <input style={{ height: '5rem',borderRadius: '9px' }} type="text"    class="form-control border border-secondary pb-5" id="exampleFormControlInput1" placeholder="If you would want to tell about any more details" />
            </div>
          </div>
          <div className="px-5 my-4">
            <button type="button" class=" mt-3 mx-3 rounded-lg btn btn-primary " onClick={handleclick} style={{ backgroundColor: '#4b2ca9', fontWeight: '500', height: ' 3rem', width: '-webkit-fill-available', fontSize: 'larger' }}>Send Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};
const Metadatapopup = props => {
  const {acceptedlink}=props;
  return (
    <div className="popup-box">
      <div className="boxx" style={{width: '33%', height: '38rem',marginLeft: '43rem', marginTop: 'calc(100vh - 90vh - 0px)'}} >
        <div className="container d-flex flex-row justify-content-between pr-3" style={{ backgroundColor: '#363740', fontSize: 'xx-large' }}>
          <div className="text-light my-3">{props.acceptedlinkname}- All Meta Info</div>
          <span className="text-muted px-2 " style={{ fontSize: 'xxx-large' }} onClick={props.handleMetainfo}>x</span>
        </div>
        <div className="container d-flex flex-row justify-content-between my-3">
          <div className="conatiner d-flex flex-column " style={{ width: ' -webkit-fill-available' }}>
            <div className="container d-flex flex-row justify-content-start my-2 ">
              <div className="text-muted" style={{width:'9rem'}}>DA</div>
              <div className="pr-4"> <strong>{acceptedlink.Domain_Authority}</strong></div>
            </div>
            <div className="container d-flex flex-row justify-content-start my-2 ">
              <div  className="text-muted" style={{width:'9rem'}}>Spam%</div>
              <div className="pr-4"><strong>{acceptedlink.Spam_Rating}</strong></div>
            </div>
            {acceptedlink.Ahrefs_Rating && <div className="container d-flex flex-row justify-content-start my-2 ">
              <div  className="text-muted" style={{width:'9rem'}}>Ahrefs DR:</div>
              <div className="pr-4"><strong>{acceptedlink.Ahrefs_Rating}</strong></div>
            </div>}
           {acceptedlink.organic_keyword && <div className="container d-flex flex-row justify-content-start my-2 ">
              <div  className="text-muted" style={{width:'9rem'}}>Organic Keywords:</div>
              <div className="pr-4"><strong>{acceptedlink.organic_keyword}</strong></div>
            </div>}
            {acceptedlink.no_of_backlinks && <div className="container d-flex flex-row justify-content-start my-2 ">
              <div  className="text-muted" style={{width:'9rem'}}>No of Backlinks:</div>
              <div className="pr-4"><strong>{acceptedlink.no_of_backlinks}</strong></div>
            </div>}
            {acceptedlink.linking_domain && <div className="container d-flex flex-row justify-content-start my-2 ">
              <div  className="text-muted" style={{width:'9rem'}}>Linking Domains:</div>
              <div className="pr-4"><strong>{acceptedlink.linking_domain}</strong></div>
            </div>}
          </div>
          <div className="conatiner d-flex flex-column " style={{ width: ' -webkit-fill-available' }}>
            <div className="container d-flex flex-row justify-content-start my-2 ">
              <div className="text-muted pr-4">Alexa Rank</div>
              <div className="pr-5"><strong>#{acceptedlink.Alexa_Rank}</strong></div>
            </div>
            <div className="container d-flex flex-row justify-content-start my-2 ">
              <div className="text-muted pr-3">Self-Publish</div>
              <div className="pr-5"><strong>{acceptedlink.Self_Publish}</strong></div>
            </div>
           {acceptedlink.Average_Pageviews &&  <div className="container d-flex flex-row justify-content-start my-2 ">
              <div className="text-muted pr-1">Pageviews:</div>
              <div className="pr-2"><strong>{acceptedlink.Average_Pageviews}</strong> <span style={{fontSize:'small'}}>/mo</span></div>
            </div>}
            {acceptedlink.TS_Organic && <div className="container d-flex flex-row justify-content-Start my-2 ">
              <div className="text-muted pr-1">Organic:</div>
              <div><strong>{acceptedlink.TS_Organic}</strong></div>
              <div className="ml-4 text-muted">Detail:</div>
              <div className="pl-1" ><strong> {acceptedlink.TS_Referral}</strong></div>
            </div>}
            <div className="container d-flex flex-row justify-content-between my-2 ">
              <div className="text-muted">Do they link to pirated or adult sites? </div>
              <div className="mt-3"><strong>{acceptedlink.Is_Pyrated}</strong></div>
            </div>
            <div className="container d-flex flex-row justify-content-between  ">
            </div>
          </div>
        </div>
        <div className="container d-flex flex-column">
          <div className="container d-flex flex-row  my-1 ">
            <div className="text-muted">Description: {acceptedlink.Description}</div>
          </div>
          <div className="container d-flex flex-row  my-1 ">
            <div className="text-muted">Language: {acceptedlink.Main_Language}</div>
          </div>
          <div className="container d-flex flex-row  my-1 ">
            <div className="text-muted">Primary Category:  {acceptedlink.Category} </div>
          </div>
          <div className="container d-flex flex-row  my-1 ">
            <div className="text-muted">Categories:{acceptedlink.primary_category}</div>
          </div>
          <div className="container d-flex flex-row  my-1 ">
            <div className="text-muted">Self-Publish Probability: High</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Linkexhangepopup = props => {

  const UserId = localStorage.getItem('userid');
  // const Linkid= props.Linkid
  const Linkid= props.linkid
  const handleclick= async ()=>{
    console.log("Inside handleclick")
    const input1 = document.getElementById("exampleFormControlInput2").value
    const input2 = document.getElementById("exampleFormControlInput3").value; 
    console.log(input1,input2);
    const response = await fetch(`${host}/v1/userlink/exchange_request`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({Linkid,UserId, input1, input2 }),
    });
    console.log(response);


  }

  return (
    <div className="popup-box">
      <div className="boxx" style={{width: '37%', height: '43rem',marginLeft: '40rem', marginTop: 'calc(100vh - 97vh - 0px)'}}>
        <div className="container d-flex flex-row justify-content-between" style={{ backgroundColor: '#363740', fontSize: '1.6rem' }}>
          <div className="text-light my-4">Request for Link Exchange</div>
          <span className="text-muted px-3 pb-2 " style={{ fontSize: 'xxx-large' }} onClick={props.handleClose}>x</span>
        </div>
        <div className=" mb-5 mt-4 container" style={{ fontWeight: '500' }}>
          <div className="px-2 text-center">Fill the following details to send request for a link exchange.
2-way link exchange means. You link to Site A from Page A1, Site A links to you from Page P1
3-way link exchange means. You Link to Site A, Site B links to you </div>
          {/* <div className="px-2 text-center">Let us know and we will fix it in 24 hours.</div> */}
        </div>
        <div className="container" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
          <div className="px-5  ">
            <div class=" px-3 form-group ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">Your blog URL</label>
              <input type="url" style={{ height: '3rem', fontSize: 'smaller' }}  class="form-control  border border-secondary " id="exampleFormControlInput2" placeholder="https://www.blog.yourwebsite.com......" />
              <div className=" text-muted px-2 " style={{ fontSize: '0.75rem' }}>So that the other person can view the list of blogs you publish</div>
            </div>
          </div>
          <div className="px-5 ">
            <div class=" px-3 form-group ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">List of 3 topics</label>
              {/* <input style={{ height: '5rem', fontSize: 'small' }} type="email" class="form-control border border-secondary " id="exampleFormControlInput1" placeholder="Please list the 3 topics that would be an overlap between yours and their niche." /> */}
              <textarea style={{ height: '4rem', fontSize: 'smaller' }} type="email" class="form-control border border-secondary " id="exampleFormControlInput3" placeholder="Please list the 3 topics that would be an overlap between yours and their niche."></textarea>
            </div>
          </div>
          <div className="px-5 ">
            <button type="button" class=" mt-2 mx-3 rounded-lg btn btn-primary text-light " onClick={handleclick} style={{ backgroundColor: '#4b2ca9', fontWeight: '500', height: ' 3rem', width: '-webkit-fill-available',  fontSize: 'larger' }}>Send Link Exchange Request</button>
            <div style={{ fontSize: '0.75rem' }} className="mx-4 mt-2  text-muted">We will automatically add your meta info like traffic & DA when sending the link exchange request.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Guestblogpopup = props => {
   const {acceptedlink}=props;
   const UserId = localStorage.getItem('userid');
   // const Linkid= props.Linkid
   const Linkid= props.linkid
   const handleclick= async ()=>{
     console.log("Inside handleclick")
     const input1 = document.getElementById("exampleFormControlInput4").value
     const input2 = document.getElementById("exampleFormControlInput5").value; 
     console.log(input1,input2);
     const email=acceptedlink.Email;
     const getemail = await fetch(`${host}/v1/userlink/email`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         authorization:  "Bearer " + localStorage.getItem("token"),
       },
       body: JSON.stringify({email}),
     });
     const parseddata = await getemail.json();
     const Linkgiverid = parseddata.userdetail;
     console.log(Linkgiverid);
     const response = await fetch(`${host}/v1/userlink/send_blog`, {
       method: "PUT",
       headers: {
         "Content-Type": "application/json",
         authorization:  "Bearer " + localStorage.getItem("token"),
       },
       body: JSON.stringify({Linkid,UserId, input1, input2 }),
     });
     console.log(response);
     props.handleguestblogClose();
   }
  return (
    <div className="popup-box">
      <div style={{width: '40%', height: '40rem',marginLeft: '38rem', marginTop: 'calc(100vh - 93vh - 0px)'}} className="boxx">
        <div className="container d-flex flex-row justify-content-between" style={{ backgroundColor: '#363740', fontSize: '1.6rem' }}>
          <div className="text-light my-4">Submit Your Guest Blog</div>
          <span className="text-muted px-3 pb-2 " style={{ fontSize: 'xxx-large' }} onClick={props.handleguestblogClose}>x</span>
        </div>
        <div className=" mb-5 mt-4 container" style={{ fontWeight: '500' }}>
          <div className="px-2 my-1 text-center text-muted">Submit your guest blog to be posted on </div>
          <div className="px-2 text-center">{acceptedlink.Name}</div>
        </div>
        <div className="container" style={{ paddingLeft: '70px', paddingRight: '70px' }}>
          <div className="px-5  ">
            <div class=" px-3 form-group ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">Get Doc URL</label>
              <input style={{ height: '3rem', fontSize: 'smaller' }} type="url" class="form-control  border border-secondary " id="exampleFormControlInput4" placeholder="https://docs.google.com/document/d/.............." />
              <div className=" text-muted pl-1 pr-1 mt-1 " style={{ fontSize: '0.75rem' }}>Please make sure to keep the sharing settings on Google Drive as <strong>'Anyone who has the link can comment’</strong> (Not edit) DropBox link from sharing settings.</div>
            </div>
          </div>
          <div className="px-5 ">
            <div class=" px-3 form-group ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">Target Link</label>
              <textarea style={{ height: '4rem', fontSize: 'smaller' }} type="email" class="form-control border border-secondary " id="exampleFormControlInput5" placeholder="Your site’s link on which you want a backlink"></textarea>
              <div className=" text-muted pl-1 pr-1 mt-1" style={{ fontSize: '0.75rem' }}>Mention the link in your document as well as here. This helps in monitoring the link in ‘Link Monitor’ module.</div>
            </div>
          </div>
          <div className="px-5 ">
            <button type="button" class=" mt-2 mx-3 rounded-lg btn btn-primary text-light " onClick={handleclick} style={{ backgroundColor: '#4b2ca9', fontWeight: '500', height: ' 3rem', width: '-webkit-fill-available', fontSize: 'larger' }}>Send Guest Blog</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Linkinsertionpopup = props => {
  const {acceptedlink}=props;
   const UserId = localStorage.getItem('userid');
   // const Linkid= props.Linkid
   const Linkid=1;
   const handleclick= async ()=>{
     console.log("Inside handleclick")
     const input1 = document.getElementById("exampleFormControlInput6").value
     const input2 = document.getElementById("exampleFormControlInput7").value; 
     console.log(input1,input2);
     const response = await fetch(`${host}/v1/userlink/link_insertion`, {
       method: "PUT",
       headers: {
         "Content-Type": "application/json",
         authorization:  "Bearer " + localStorage.getItem("token"),
       },
       body: JSON.stringify({Linkid,UserId, input1, input2 }),
     });
     console.log(response);
 
 
   }
  return (
    <div className="popup-box">
      <div className="boxx" style={{width: '40%', height: '38rem',marginLeft: '38rem', marginTop: 'calc(100vh - 90vh - 0px)'}}>
        <div className="container d-flex flex-row justify-content-between" style={{ backgroundColor: '#363740', fontSize: '1.6rem' }}>
          <div className="text-light my-4">Link Insertion Content</div>
          <span className="text-muted px-3 pb-2 " style={{ fontSize: 'xxx-large',cursor:'pointer' }} onClick={props.handleClose}>x</span>
        </div>
        <div className=" mb-5 mt-4 container" style={{ fontWeight: '500' }}>
          <div className="px-2 my-1 text-center text-muted">Submit your guest blog to be posted on </div>
          <div className="px-2 text-center">{acceptedlink.Name}</div>
        </div>
        <div className="container" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
          <div className="px-5  ">
            <div class=" px-3 form-group ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">Get Doc URL</label>
              <input style={{ height: '3rem', fontSize: 'smaller' }} type="email" class="form-control  border border-secondary " id="exampleFormControlInput6" placeholder="https://docs.google.com/document/d/.............." />
              <div className=" text-muted pl-3 pr-5 mt-1 " style={{ fontSize: '0.75rem' }}>Please make sure to keep the sharing settings on Google Drive as <strong>'Anyone who has the link can comment’</strong> (Not edit) DropBox link from sharing settings.</div>
            </div>
          </div>
          <div className="px-5 ">
            <div class=" px-3 form-group ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">Target Link</label>
              {/* <input style={{ height: '5rem', fontSize: 'small' }} type="email" class="form-control border border-secondary " id="exampleFormControlInput1" placeholder="Please list the 3 topics that would be an overlap between yours and their niche." /> */}
              <textarea style={{ height: '4rem', fontSize: 'smaller' }} type="email" class="form-control border border-secondary " id="exampleFormControlInput7" placeholder="Your site’s link on which you want a backlink"></textarea>
              <div className=" text-muted pl-3 pr-5 mt-1" style={{ fontSize: '0.75rem' }}>Mention the link in your document as well as here. This helps in monitoring the link in ‘Link Monitor’ module.</div>
            </div>
          </div>
          <div className="px-5 ">
            <button type="button" class=" mt-2 mx-3 rounded-lg btn btn-primary text-light" onClick={handleclick} style={{ backgroundColor: '#4b2ca9', fontWeight: '500', height: ' 3rem', width: '-webkit-fill-available', fontSize: 'larger'}}>Send Link Insertion Content</button>
          </div>
        </div>
      </div>
    </div>
  );
};
const Addlinktomonitorpopup = props => {
 
const {Orderidlist} = useContext(Linkcontext);
console.log(Orderidlist);
const obj={order_id:"Select OrderID"}
console.log(Orderidlist);
if( Orderidlist!=null && Orderidlist.length>0 &&  Orderidlist[0].order_id!=="Select OrderID"){
Orderidlist.unshift(obj);
}

   const UserId = localStorage.getItem('userid');
   // const Linkid= props.Linkid
   const Linkid= props.linkid
   const toggleselect= async ()=>{
   
    const orderid = document.getElementById("monitorstatus").value;
    const response = await fetch(`${host}/v1/userlink/getslandtl`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization:  "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({UserId,orderid }),
    });
    const json = await response.json();
    console.log(json.Orderids[0].target_link);
    document.getElementById("exampleFormControlInput8").value=json.Orderids[0].source_link;
    document.getElementById("exampleFormControlInput9").value=json.Orderids[0].target_link;
    if(json.Orderids[0].source_link===null){
      json.Orderids[0].source_link="";
    }
    if(json.Orderids[0].target_link===null){
      json.Orderids[0].target_link="";
    }
    document.getElementById("exampleFormControlInput8").placeholder=json.Orderids[0].source_link;
    document.getElementById("exampleFormControlInput9").placeholder=json.Orderids[0].target_link;
   }
   const handleclick= async ()=>{

     const souurcelink = document.getElementById("exampleFormControlInput8").value
     const orderid = document.getElementById("monitorstatus").value; 
     const reltag = document.getElementById("reltag").value; 
     const targetlink = document.getElementById("exampleFormControlInput9").value; 
     console.log(orderid,souurcelink,targetlink,reltag,Linkid);
     const response = await fetch(`${host}/v1/userlink/addlinkmonitor`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         authorization:  "Bearer " + localStorage.getItem("token"),
       },
       body: JSON.stringify({Linkid,UserId, orderid,souurcelink,targetlink,reltag}),
     });
     console.log(response);
     props.handleClose();
     window.location.reload(true);
 
 
   }
  return (
    <div className="popup-box">
      <div className="boxx" style={{width: '45%', height: '43rem',marginLeft: '38rem', marginTop: 'calc(100vh - 98vh - 0px)'}}>
        <div className="container d-flex flex-row justify-content-between" style={{ backgroundColor: '#363740', fontSize: '1.6rem' }}>
          <div className="text-light my-4">Add Link To Backlink Monitor</div>
          <span className="text-muted px-3 pb-2 " style={{ fontSize: 'xxx-large',cursor:'pointer' }} onClick={props.handleClose}>x</span>
        </div>
        <div className=" mb-3 mt-2 container" style={{ fontWeight: '400' }}>
          <div className="px-2 my-1 text-center text-muted" style={{fontSize: 'small'}}>Fill the Source & Target Links to constantly monitor if any of your older links are removed or edited.
We check every week to make sure the ‘Source URLs’ have your ‘Target URL’.</div>
          <div className="px-2 text-center my-1" style={{fontSize: 'small'}}>{`Fill the following information to start monitoring your backlinks in link monitor`}</div>
        </div>
        <div className="container" style={{ paddingLeft: '50px', paddingRight: '50px' }}>
          <div className="px-5  ">
            <div class=" px-3 form-group ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">Order ID</label>
              <select placeholder="Select" onChange={toggleselect} id="monitorstatus" className="text-muted px-2"  style={{
              height: '2.5rem',
              width: '-webkit-fill-available',
              fontSize:'smaller',
              borderRadius: '9px', marginTop: '3px', cursor: 'pointer',marginRight: '',marginLeft: ''
            }}>
      
              {Orderidlist.map((element) => (
                <option  value={`${element.order_id}`}>{element.order_id}</option>
              ))}
           
            </select>
              <div className=" text-muted pl-3 pr-5 mt-1 " style={{ fontSize: '0.75rem' }}>You can only attach one link to each order id.</div>
            </div>
          </div>
          <div className="px-5 ">
            <div class=" px-3  ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">Source Link</label>
              <input style={{ height: '3rem', fontSize: 'smaller',borderRadius: '9px' }} type="email" class="form-control  border border-secondary " id="exampleFormControlInput8" placeholder="Select Order ID" />
              <div className=" text-muted pl-3 pr-5 mt-1" style={{ fontSize: '0.75rem' }}>Enter the URL of the page where your ‘Target Link’ is present. Before entering, please make sure that the Target Link is present in ‘View Source’ (Ctrl/Cmd + U), otherwise the module will give an error.</div>
            </div>
          </div>
          <div className="px-5 ">
            <div class=" px-3  ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">Target Link</label>
              <input style={{ height: '3rem', fontSize: 'smaller' ,borderRadius: '9px'}} type="email" class="form-control  border border-secondary " id="exampleFormControlInput9" placeholder='Select Order ID' />
              <div className=" text-muted pl-3 pr-5 mt-1" style={{ fontSize: '0.75rem' }}>Link to your site. Please only enter link to your verified domain.</div>
            </div>
          </div>
          <div className="px-5  ">
            <div class=" px-3 form-group ">
              <label className="mb-1" htmlFor="exampleFormControlInput1"> Rel Tag</label>
              <select id="reltag" className="text-muted px-2"  style={{
              height: '2.5rem',
              fontSize:'smaller',
              width: '-webkit-fill-available',
              borderRadius: '9px', marginTop: '3px', cursor: 'pointer',marginRight: '',marginLeft: ''
            }}>
              <option  value="Nofollow">Nofollow</option>
              <option value="Dofollow">Dofollow</option>           
              <option value="Other">Other</option>
            </select>
            </div>
          </div>
          <div className="px-5 mb-2">
            <button type="button" class=" mt-2 mx-3 rounded-lg btn btn-primary text-light" onClick={handleclick} style={{ backgroundColor: '#4b2ca9', fontWeight: '500', height: ' 3rem', width: '-webkit-fill-available', fontSize: 'larger'}}>Submit Link</button>
          </div>
        </div>
      </div>
    </div>
  );
};
const Publishlinkpopup = props => {
   const UserId = localStorage.getItem('userid');
   // const Linkid= props.Linkid
   const Linkid= props.linkid
   const handleclick= async ()=>{
     console.log("Inside handleclick")
     const input1 = document.getElementById("exampleFormControlInput10").value
    //  const input2 = document.getElementById("exampleFormControlInput7").value; 
     console.log(input1);
     const response = await fetch(`${host}/v1/userlink/publishlink`, {
       method: "PUT",
       headers: {
         "Content-Type": "application/json",
         authorization:  "Bearer " + localStorage.getItem("token"),
       },
       body: JSON.stringify({Linkid,UserId, input1 }),
     });
     console.log(response);
 
 
   }
  return (
    <div className="popup-box">
      <div className="boxx" style={{width: '50%', height: '53rem',marginLeft: '34rem', marginTop: 'calc(100vh - 98vh - 0px)'}}>
        <div className="container d-flex flex-row justify-content-between" style={{ backgroundColor: '#363740', fontSize: '1.5rem' }}>
          <div className="text-light my-4">Publish Your Link</div>
          <span className="text-muted px-3 pb-2 " style={{ fontSize: 'xxx-large' ,cursor:'pointer'}} onClick={props.handleClose}>x</span>
        </div>
        <div className=" mb-3 mt-2 container" style={{ fontWeight: '400' }}>
          <div className="px-2 my-1 text-center text-muted" style={{fontSize: 'small'}}>Once you have made the backlink live, please submit the info below so that we can notify the Link Taker.
Fill the Source & Target Links as per the instructions & we will constantly monitor if the links exist.
We check every week to make sure your ‘Source URLs’ have the ‘Target URL’.</div>
          <div className=" text-center my-1" style={{fontSize: 'small'}}>{`Fill the following information to get paid in Paypal or Linkly Credits as applicable`}</div>
        </div>
        <div className="container " style={{ paddingLeft: '50px', paddingRight: '50px' }}>
          <div className="px-5  ">
            <div class=" px-3  ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">Order ID</label>
              <input style={{ height: '3rem', fontSize: 'smaller',borderRadius: '9px',backgroundColor:'#DFE0EB' }} type="email" class="form-control  " id="exampleFormControlInput6" placeholder="34566754" />
              <div className=" text-muted pl-3 pr-5 mt-1 " style={{ fontSize: '0.75rem' }}>The order ID is automatically fetched from the corresponding order.</div>
            </div>
          </div>
          <div className="px-5 ">
            <div class=" px-3  ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">Source Link</label>
              <input style={{ height: '3rem', fontSize: 'smaller',borderRadius: '9px' }} type="email" class="form-control  border border-secondary " id="exampleFormControlInput10" placeholder="Status" />
              <div className=" text-muted pl-3 pr-5 mt-1" style={{ fontSize: '0.75rem' }}>Enter the URL of your site the ‘Target Link’ is present. Before entering, please make sure that the Target Link is present in ‘View Source’ (Ctrl/Cmd + U), otherwise the module will give an error.</div>
            </div>
          </div>
          <div className="px-5 ">
            <div class=" px-3  ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">Target Link</label>
              <input style={{ height: '3rem', fontSize: 'smaller' ,borderRadius: '9px',backgroundColor:'#DFE0EB' }} type="email" class="form-control " id="exampleFormControlInput6" placeholder="Status" />
              <div className=" text-muted pl-3 pr-5 mt-1" style={{ fontSize: '0.75rem' }}>The target link is automatically fetched for the corresponding order.</div>
            </div>
          </div>
          <div className="px-5  ">
            <div class=" px-3 form-group ">
              <label className="mb-1" htmlFor="exampleFormControlInput1"> Rel Tag</label>
              <input style={{ height: '3rem', fontSize: 'smaller' ,borderRadius: '9px',backgroundColor:'#DFE0EB' }} type="email" class="form-control " id="exampleFormControlInput6" placeholder="Do follow" />
            </div>
          </div>
          <div className="px-5 mb-2">
            <button type="button" class=" mt-2 mx-3 rounded-lg btn btn-primary text-light" onClick={handleclick} style={{ backgroundColor: '#4b2ca9', fontWeight: '500', height: ' 3rem', width: '-webkit-fill-available', fontSize: 'larger'}}>Submit Link</button>
            <div className=" text-muted pl-4 pr-4 mt-1" style={{ fontSize: '0.75rem' }}>If the target link is present on your source link, we will automatically transfer the money or the Linkly credits, as applicable.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Requestreworkpopup = props => {
   const UserId = localStorage.getItem('userid');
   // const Linkid= props.Linkid
   const Linkid= props.linkid
   const handleclick= async ()=>{
     console.log("Inside handleclick")
     const input1 = document.getElementById("requestoption").value
     const input2 = document.getElementById("exampleFormControlInput11").value; 
     console.log(input1,input2);
     const response = await fetch(`${host}/v1/userlink/requestrework`, {
       method: "PUT",
       headers: {
         "Content-Type": "application/json",
         authorization:  "Bearer " + localStorage.getItem("token"),
       },
       body: JSON.stringify({Linkid,UserId, input1, input2 }),
     });
     console.log(response);
 
 
   }
  return (
    <div className="popup-box">
      <div className="boxx" style={{width: '45%', height: '43rem',marginLeft: '38rem', marginTop: 'calc(100vh - 98vh - 0px)'}}>
        <div className="container d-flex flex-row justify-content-between" style={{ backgroundColor: '#363740', fontSize: '1.5rem' }}>
          <div className="text-light my-4">Request Re-work from Author </div>
          <span className="text-muted px-3 pb-2 " style={{ fontSize: 'xxx-large',cursor:'pointer' }} onClick={props.handleClose}>x</span>
        </div>
        <div className=" mb-3 mt-2 container" style={{ fontWeight: '400' }}>
          <div className="px-5 my-1 mx-2 text-center text-muted" style={{fontSize: 'small'}}>Even the author would have given their best, it might still not meet your expectations. In that case, you can request for one re-work from the author.
However, for everyone’s benefit, we would suggest to do small changes at your end. </div>
        </div>
        <div className="container " style={{ paddingLeft: '70px', paddingRight: '70px' }}>
          <div className="px-5  ">
            <div class=" px-3  ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">Order ID</label>
              <input style={{ height: '3rem', fontSize: 'smaller',borderRadius: '9px',backgroundColor:'#DFE0EB' }} type="email" class="form-control  " id="exampleFormControlInput6" placeholder="34566754" />
              <div className=" text-muted pl-3 pr-5 mt-1 " style={{ fontSize: '0.75rem' }}>The order ID is automatically fetched from the corresponding order.</div>
            </div>
          </div>
          <div className="px-5 my-2 ">
            <div class=" px-3  ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">Request for re-work</label>
              <select id="requestoption" className="text-muted px-2"  style={{
              height: '2.5rem',
              width: '-webkit-fill-available',
              fontSize:'smaller',
              borderRadius: '9px', marginTop: '3px', cursor: 'pointer',marginRight: '',marginLeft: ''
            }}>
              <option  value="Registration Link is broken">Quality not good</option>
              <option value="Site does not accept submissions anymore">Site does not accept submissions anymore</option>
              <option value="Category is wrong">Category is wrong</option>
              <option value="Language is wrong">Language is wrong</option>
              <option value="Instructions given are not correc,t/understandable">Instructions given are not correc,t/understandable</option>
              <option value="Other">Other</option>
            </select>
            </div>
          </div>
          <div className="px-5 ">
            <div class=" px-3  ">
              <label className="mb-1" htmlFor="exampleFormControlInput">Notes</label>
              <textarea style={{ height: '4.75rem', fontSize: 'smaller' }} type="email" class="form-control border border-secondary " id="exampleFormControlInput11" placeholder="What would you want the author to edit in the document. If using Google docs or dropbox, it is best to select the appropriate paragraph and comment there"></textarea>
            </div>
          </div>
          <div className="px-5 my-2 ">
            <div class=" px-3 form-group ">
              <label className="mb-1" htmlFor="exampleFormControlInput1"> Target Link</label>
              <input style={{ height: '3rem', fontSize: 'smaller' ,borderRadius: '9px',backgroundColor:'#DFE0EB' }} type="email" class="form-control " id="exampleFormControlInput12" placeholder="" />
              <div className=" text-muted pl-3 pr-5 mt-1 " style={{ fontSize: '0.75rem' }}> The target link is automatically fetched for the corresponding order.</div>
            </div>
          </div>
          <div className="px-5 mb-2">
            <button type="button" class=" mt-2 mx-3 rounded-lg btn btn-primary text-light" onClick={handleclick} style={{ backgroundColor: '#4b2ca9', fontWeight: '500', height: ' 3rem', width: '-webkit-fill-available', fontSize: 'larger'}}>Send for Re-work</button>
       
           
          </div>
        </div>
      </div>
    </div>
  );
};
const Rejectguestblogpopup = props => {
   const UserId = localStorage.getItem('userid');
   // const Linkid= props.Linkid
   const Linkid= props.linkid
   const handleclick= async ()=>{
     console.log("Inside handleclick")
     const input1 = document.getElementById("reworkoption").value
     const input2 = document.getElementById("exampleFormControlInput13").value; 
     console.log(input1,input2);
     const response = await fetch(`${host}/v1/userlink/reject`, {
       method: "PUT",
       headers: {
         "Content-Type": "application/json",
         authorization:  "Bearer " + localStorage.getItem("token"),
       },
       body: JSON.stringify({Linkid,UserId, input1, input2 }),
     });
     console.log(response);
 
 
   }
  return (
    <div className="popup-box">
      <div className="boxx" style={{width: '45%', height: '43rem',marginLeft: '38rem', marginTop: 'calc(100vh - 98vh - 0px)'}}>
        <div className="container d-flex flex-row justify-content-between" style={{ backgroundColor: '#363740', fontSize: '1.5rem' }}>
          <div className="text-light my-4">Rejecting the Guest Blog !</div>
          <span className="text-muted px-3 pb-2" style={{ fontSize: 'xxx-large',cursor:'pointer' }} onClick={props.handleClose}>x</span>
        </div>
        <div className="container my-2 ">
        <div className=" mb-2 py-2  container" style={{ fontWeight: '400', backgroundColor:'rgb(243 222 218)',width:'33rem' }}>
          <div className="px-1 my-1 mx-2 text-center " style={{fontSize: 'small',color:'rgb(249 93 61)'}}>It’s sad that it had to come down to this. The author put the soul & time into writing this blog post which would be discarded now. </div>
<div className=" text-center mt-2 mb-1" style={{fontSize: 'small' ,color:'rgb(51 30 116)'}}>{`Would you rather consider asking for a rework instead ?`}</div>
        </div>
        </div>
        <div className="container " style={{ paddingLeft: '70px', paddingRight: '70px' }}>
          <div className="px-5  ">
            <div class=" px-3  ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">Order ID</label>
              <input style={{ height: '3rem', fontSize: 'smaller',borderRadius: '9px',backgroundColor:'#DFE0EB' }} type="email" class="form-control  " id="exampleFormControlInput6" placeholder="34566754" />
              <div className=" text-muted pl-3 pr-5 mt-1 " style={{ fontSize: '0.75rem' }}>The order ID is automatically fetched from the corresponding order.</div>
            </div>
          </div>
          <div className="px-5 my-2 ">
            <div class=" px-3  ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">Request for re-work</label>
              <select id="reworkoption" className="text-muted px-2"  style={{
              height: '2.5rem',
              width: '-webkit-fill-available',
              fontSize:'smaller',
              borderRadius: '9px', marginTop: '3px', cursor: 'pointer',marginRight: '',marginLeft: ''
            }}>
              <option  value="Registration Link is broken">Quality not good</option>
              <option value="Site does not accept submissions anymore">Site does not accept submissions anymore</option>
              <option value="Category is wrong">Category is wrong</option>
              <option value="Language is wrong">Language is wrong</option>
              <option value="Instructions given are not correc,t/understandable">Instructions given are not correc,t/understandable</option>
              <option value="Other">Other</option>
            </select>
            </div>
          </div>
          <div className="px-5 ">
            <div class=" px-3  ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">Detailed reason</label>
              <textarea style={{ height: '4rem', fontSize: 'smaller',borderRadius: '9px', }} type="email" class="form-control border border-secondary " id="exampleFormControlInput13" placeholder="What went wrong, what should be changed here so that it doesn’t have to come to this."></textarea>
              <div className="  text-muted pl-1 pr-5 mt-1" style={{ fontSize: '0.75rem' }}>Please be respectful.</div>
            </div>
          </div>
          <div className="px-5 my-1 ">
            <div class=" px-3  ">
              <label className="mb-1" htmlFor="exampleFormControlInput1"> Target Link</label>
              <input style={{ height: '3rem', fontSize: 'smaller' ,borderRadius: '9px',backgroundColor:'#DFE0EB' }} type="email" class="form-control " id="exampleFormControlInput6" placeholder="" />
            <div className="  text-muted pl-3 pr-3 " style={{ fontSize: '0.75rem' }}>The target link is automatically fetched for the corresponding order.</div>
            </div>
          </div>
          <div className="px-5 mb-2">
            <button type="button" class=" mt-1 mx-3 rounded-lg btn btn-primary text-light" onClick={handleclick} style={{ backgroundColor: '#4b2ca9', fontWeight: '500', height: ' 3rem', width: '-webkit-fill-available', fontSize: 'larger'}}>Send for Re-work</button>
            <div className="text-muted pl-4 pr-4" style={{ fontSize: '0.75rem' }}> We will be manually reviewing this request to check what went wrong.</div>          
          </div>
        </div>
      </div>
    </div>
  );
};
const Acceptlinkexchangepopup = props => {
  const UserId = localStorage.getItem('userid');
  // const Linkid= props.Linkid
  const Linkid= props.linkid
  const handleclick= async ()=>{
    console.log("Inside handleclick")
    const input1 = document.getElementById("exampleFormControlInput14").value
    // const input2 = document.getElementById("exampleFormControlInput3").value; 
    console.log(input1);
    const response = await fetch(`${host}/v1/userlink/exchange_request`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization:  "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({Linkid,UserId, input1 }),
    });
    console.log(response);


  }

  return (
    <div className="popup-box">
      <div className="boxx" style={{width: '37%', height: '30rem',marginLeft: '40rem', marginTop: 'calc(100vh - 90vh - 0px)'}}>
        <div className="container d-flex flex-row justify-content-between" style={{ backgroundColor: '#363740', fontSize: '1.6rem' }}>
          <div className="text-light my-4">Accept Link Exchange</div>
          <span className="text-muted px-3 pb-2 " style={{ fontSize: 'xxx-large' ,cursor:'pointer'}} onClick={props.handleClose}>x</span>
        </div>
        <div className=" mb-4 mt-4 container" style={{ fontWeight: '500' }}>
          <div className="px-2 text-center">Something isn’t right with the information we have shown ? </div>
          <div className="px-2 text-center">Let us know and we will fix it in 24 hours.</div>
        </div>
        <div className="container" style={{ paddingLeft: '70px', paddingRight: '70px' }}>
          <div className="px-5 ">
            <div class=" px-3 form-group ">
              <label className="mb-1 ml-1" htmlFor="exampleFormControlInput1">List of 3 topics</label>
              <textarea style={{ height: '5rem', fontSize: 'smaller',borderRadius:'9px' }} type="email" class="form-control border border-secondary " id="exampleFormControlInput14" placeholder="Please list the 3 topics that would be an overlap between yours and their niche."></textarea>
            </div>
          </div>
          <div className="px-5 ">
            <button type="button" class=" mt-2 mx-3 rounded-lg btn btn-primary text-light " onClick={handleclick} style={{ backgroundColor: '#4b2ca9', fontWeight: '500', height: ' 3rem', width: '-webkit-fill-available',  fontSize: 'larger' }}>Confirm Link Exchange Request</button>
            <div style={{ fontSize: '0.75rem' }} className="mx-4 mt-2 px-2 text-muted">We will automatically add your meta info like traffic & DA when sending the link exchange request.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Savelogindetailpopup = props => {

  const {acceptedlink} = props;
  const [fileimg, setFileimg] = useState();
  var loadFile = function(event) {
    var image = document.getElementById('image-input');
    const url=URL.createObjectURL(event.target.files[0])
     setFileimg(url);
  };


   const UserId = localStorage.getItem('userid');
   // const Linkid= props.Linkid
   const Linkid= props.linkid
   const handleclick= async ()=>{
     console.log("Inside handleclick")
     const username = document.getElementById("exampleFormControlInput20").value;
     const password = document.getElementById("exampleFormControlInput21").value; 
     const notes = document.getElementById("exampleFormControlInput22").value; 
     console.log(username,password,notes,fileimg);
     const response = await fetch(`${host}/v1/userlink/credentials`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         authorization:  "Bearer " + localStorage.getItem("token"),
       },
       body: JSON.stringify({Linkid,UserId, username,password,notes,fileimg }),
     });
     console.log(response); 
   }
    return (
    <div className="popup-box">
      <div className="boxx">
        <div className="container d-flex flex-row justify-content-between" style={{ backgroundColor: '#363740', fontSize: '1.6rem' }}>
          <div className="text-light my-3 px-2">Save Login Detail</div>
          <span className="text-muted px-3 pb-2 mt-2 " style={{ fontSize: 'xx-large' }} onClick={props.handleClose}>x</span>
        </div>
        <div className=" mb-2  container" style={{ fontWeight: '500' }}>
          <div className="px-5 my-2  text-center text-muted">For sites where you have to login to create your link, save your login credentials & proof of work at one place. You can view them from the Order Dashboard later. </div>
          <div className="px-5   mt-2 mx-3 text-center">{`Login information for logging on-`}</div>
          <div className="px-5   mx-3 text-center">{acceptedlink.registration_link}</div>
        </div>
        <div className="container" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
          <div className="px-5  ">
            <div class=" px-3  ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">Username</label>
              <input style={{ height: '3rem', fontSize: 'smaller' }} type="email" class="form-control  border border-secondary " id="exampleFormControlInput20" placeholder="Username" />
              <div className=" text-muted pl-3 pr-5 mt-1 " style={{ fontSize: '0.75rem' }}>The username or email that you used to login</div>
            </div>
          </div>
          <div className="px-5  ">
            <div class=" px-3  ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">Password</label>
              <input style={{ height: '3rem', fontSize: 'smaller' }} type="email" class="form-control  border border-secondary " id="exampleFormControlInput21" placeholder="Status" />
              <div className=" text-muted pl-3 pr-5 mt-1 " style={{ fontSize: '0.75rem' }}>Password for logging in.</div>
            </div>
          </div>
          <div className="px-5  ">
            <div class=" px-3  ">
              <label className="mb-1" >Proof of Work</label>
              {/* <input style={{ height: '3rem', fontSize: 'smaller', width: 'inherit' }} type="email" class="form-control  border border-secondary " id="exampleFormControlInput1" placeholder="Upload Image" /> */}
              <div>
              <input  className="border border-secondary" style={{paddingTop: '8px',paddingLeft: '7px',height: '50px',width: '-webkit-fill-available',borderRadius: '4px',borderColor: '#a3a9ae'}} type="file" id="image-input" accept="image/jpeg, image/png, image/jpg" onChange={loadFile}></input>           
              {/* <img className="Icon" src={fileimg} alt="NA" /> */}
              <div className=" text-muted pl-3 pr-5 mt-1 " style={{ fontSize: '0.75rem' }}>Upload your proof of work</div>
              </div>
            </div>
          </div>
          <div className="px-5 ">
            <div class=" px-3 form-group ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">Notes</label>
              <textarea style={{ height: '4rem', fontSize: 'smaller' }} type="email" class="form-control border border-secondary " id="exampleFormControlInput22" placeholder="For saving any other information to help log-in, or other notes for creating the link."></textarea>
            </div>
          </div>
          <div className="px-5 ">
            <button type="button" onClick={handleclick} class=" mt-2 mx-3 mb-1 rounded-lg btn btn-primary text-light " style={{ backgroundColor: '#4b2ca9', fontWeight: '500', height: ' 3rem', width: '-webkit-fill-available', fontSize: 'larger' }}>Save Login Detail</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export {
  Feedbackpopup,
  Linkexhangepopup,
  Metadatapopup,
  Guestblogpopup,
  Linkinsertionpopup,
  Addlinktomonitorpopup,
  Publishlinkpopup,
  Requestreworkpopup,
  Rejectguestblogpopup,
  Acceptlinkexchangepopup,
  Savelogindetailpopup,
}

 // const getselectedValues = () => {
  //   var statusvalue = document.getElementById("status").value;
  //   console.log(statusvalue);
  // }
  // const getinput=()=>{
  //   var input = document.getElementById("exampleFormControlInput1").value 
  //   console.log(input);
  // }