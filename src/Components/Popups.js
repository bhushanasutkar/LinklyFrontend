
import React from "react";

const Feedbackpopup = props => {
  return (
    <div className="popup-box">
      <div className="boxx">
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
            <div class="btn-group px-3 my-1" style={{ width: '-webkit-fill-available' }} role="group">
              <button id="btnGroupDrop1" type="button" class="one btn py-2 btn-secondary text-muted dropdown-toggle" style={{ backgroundColor: 'white', color: 'black' }} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Registration Link is broken
              </button>
              <div class=" px-3 dropdown-menu" aria-labelledby="btnGroupDrop1">
                {/* <Link class="dropdown-item" to="/">Accepted</Link>
                  <Link class="dropdown-item" to="/">Pending</Link> */}
              </div>
            </div>
          </div>
          <div className="px-5 my-4">
            <div class=" px-3 form-group ">
              <label className="" htmlFor="exampleFormControlInput1">More Details</label>
              <input style={{ height: '5rem' }} type="email" class="form-control border border-secondary pb-5" id="exampleFormControlInput1" placeholder="If you would want to tell about any more details" />
            </div>
          </div>
          <div className="px-5 my-4">
            <button type="button" class=" mt-3 mx-3 rounded-lg btn btn-primary " style={{ backgroundColor: '#4b2ca9', fontWeight: '500', height: ' 3rem', width: '-webkit-fill-available', fontSize: 'larger' }}>Send Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};
const Metadatapopup = props => {
  return (
    <div className="popup-box">
      <div className="boxx">
        <div className="container d-flex flex-row justify-content-between pr-3" style={{ backgroundColor: '#363740', fontSize: 'xx-large' }}>
          <div className="text-light my-3">Feedback on {props.acceptedlinkname}</div>
          <span className="text-muted px-2 " style={{ fontSize: 'xxx-large' }} onClick={props.handleClose}>x</span>
        </div>
        <div className="container d-flex flex-row justify-content-between my-3">
          <div className="conatiner d-flex flex-column " style={{ width: ' -webkit-fill-available' }}>
            <div className="container d-flex flex-row justify-content-between my-2 ">
              <div>DA</div>
              <div className="pr-4">233</div>
            </div>
            <div className="container d-flex flex-row justify-content-between my-2 ">
              <div>Spam%</div>
              <div className="pr-4">233</div>
            </div>
            <div className="container d-flex flex-row justify-content-between my-2 ">
              <div>Ahrefs DR:</div>
              <div className="pr-4">233</div>
            </div>
            <div className="container d-flex flex-row justify-content-between my-2 ">
              <div>Organic Keywords:</div>
              <div className="pr-4">233</div>
            </div>
            <div className="container d-flex flex-row justify-content-between my-2 ">
              <div>No. of Backlinks:</div>
              <div className="pr-4">233</div>
            </div>
            <div className="container d-flex flex-row justify-content-between my-2 ">
              <div>Linking Domains:</div>
              <div className="pr-4">233</div>
            </div>
          </div>
          <div className="conatiner d-flex flex-column " style={{ width: ' -webkit-fill-available' }}>
            <div className="container d-flex flex-row justify-content-between my-2 ">
              <div>Alexa Rank</div>
              <div className="pr-5">233</div>
            </div>
            <div className="container d-flex flex-row justify-content-between my-2 ">
              <div>Self-Publish</div>
              <div className="pr-5">233</div>
            </div>
            <div className="container d-flex flex-row justify-content-between my-2 ">
              <div>Pageviews:</div>
              <div className="pr-5">233</div>
            </div>
            <div className="container d-flex flex-row justify-content-between my-2 ">
              <div>Organic:</div>
              <div>233</div>
              <div className="ml-2">Detail:</div>
              <div>233</div>
            </div>
            <div className="container d-flex flex-row justify-content-between my-2 ">
              <div>Do they link to pirated or adult sites ? </div>
              <div>233</div>
            </div>
            <div className="container d-flex flex-row justify-content-between  ">
            </div>
          </div>
        </div>
        <div className="container d-flex flex-column">
          <div className="container d-flex flex-row  my-1 ">
            <div>Description:  Create a profile page on Microsoft community and get a link to the home page</div>
          </div>
          <div className="container d-flex flex-row  my-1 ">
            <div>Language: English</div>
          </div>
          <div className="container d-flex flex-row  my-1 ">
            <div>Primary Category:  Category 1</div>
          </div>
          <div className="container d-flex flex-row  my-1 ">
            <div>Categories: Category 1, Category 2, Category 3, Categeory 4 ,  Category 1, Category 2, Category 3, Categeory 4</div>
          </div>
          <div className="container d-flex flex-row  my-1 ">
            <div>Self-Publish Probability: High</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Linkexhangepopup = props => {
  return (
    <div className="popup-box">
      <div className="boxx">
        <div className="container d-flex flex-row justify-content-between" style={{ backgroundColor: '#363740', fontSize: '1.6rem' }}>
          <div className="text-light my-4">Request for Link Exchange</div>
          <span className="text-muted px-3 pb-2 " style={{ fontSize: 'xxx-large' }} onClick={props.handleClose}>x</span>
        </div>
        <div className=" mb-5 mt-4 container" style={{ fontWeight: '500' }}>
          <div className="px-2 text-center">Something isn’t right with the information we have shown ? </div>
          <div className="px-2 text-center">Let us know and we will fix it in 24 hours.</div>
        </div>
        <div className="container" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
          <div className="px-5  ">
            <div class=" px-3 form-group ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">Your blog URL</label>
              <input style={{ height: '3rem', fontSize: 'smaller' }} type="email" class="form-control  border border-secondary " id="exampleFormControlInput1" placeholder="https://www.blog.yourwebsite.com......" />
              <div className=" text-muted px-2 " style={{ fontSize: '0.75rem' }}>So that the other person can view the list of blogs you publish</div>
            </div>
          </div>
          <div className="px-5 ">
            <div class=" px-3 form-group ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">List of 3 topics</label>
              {/* <input style={{ height: '5rem', fontSize: 'small' }} type="email" class="form-control border border-secondary " id="exampleFormControlInput1" placeholder="Please list the 3 topics that would be an overlap between yours and their niche." /> */}
              <textarea style={{ height: '4rem', fontSize: 'smaller' }} type="email" class="form-control border border-secondary " id="exampleFormControlInput1" placeholder="Please list the 3 topics that would be an overlap between yours and their niche."></textarea>
            </div>
          </div>
          <div className="px-5 ">
            <button type="button" class=" mt-2 mx-3 rounded-lg btn btn-primary text-light " style={{ backgroundColor: '#4b2ca9', fontWeight: '500', height: ' 3rem', width: '-webkit-fill-available', fontSize: 'larger' }}>Send Link Exchange Request</button>
            <div style={{ fontSize: '0.75rem' }} className="mx-4 mt-2  text-muted">We will automatically add your meta info like traffic & DA when sending the link exchange request.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Guestblogpopup = props => {
  return (
    <div className="popup-box">
      <div className="boxx">
        <div className="container d-flex flex-row justify-content-between" style={{ backgroundColor: '#363740', fontSize: '1.6rem' }}>
          <div className="text-light my-4">Submit Your Guest Blog</div>
          <span className="text-muted px-3 pb-2 " style={{ fontSize: 'xxx-large' }} onClick={props.handleClose}>x</span>
        </div>
        <div className=" mb-5 mt-4 container" style={{ fontWeight: '500' }}>
          <div className="px-2 my-1 text-center text-muted">Submit your guest blog to be posted on </div>
          <div className="px-2 text-center">{`<Website to be posted on>`}</div>
        </div>
        <div className="container" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
          <div className="px-5  ">
            <div class=" px-3 form-group ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">Get Doc URL</label>
              <input style={{ height: '3rem', fontSize: 'smaller' }} type="email" class="form-control  border border-secondary " id="exampleFormControlInput1" placeholder="https://docs.google.com/document/d/.............." />
              <div className=" text-muted pl-3 pr-5 mt-1 " style={{ fontSize: '0.75rem' }}>Please make sure to keep the sharing settings on Google Drive as <strong>'Anyone who has the link can comment’</strong> (Not edit) DropBox link from sharing settings.</div>
            </div>
          </div>
          <div className="px-5 ">
            <div class=" px-3 form-group ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">Target Link</label>
              <textarea style={{ height: '4rem', fontSize: 'smaller' }} type="email" class="form-control border border-secondary " id="exampleFormControlInput1" placeholder="Your site’s link on which you want a backlink"></textarea>
              <div className=" text-muted pl-3 pr-5 mt-1" style={{ fontSize: '0.75rem' }}>Mention the link in your document as well as here. This helps in monitoring the link in ‘Link Monitor’ module.</div>
            </div>
          </div>
          <div className="px-5 ">
            <button type="button" class=" mt-2 mx-3 rounded-lg btn btn-primary text-light " style={{ backgroundColor: '#4b2ca9', fontWeight: '500', height: ' 3rem', width: '-webkit-fill-available', fontSize: 'larger' }}>Send Guest Blog</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Linkinsertionpopup = props => {
  return (
    <div className="popup-box">
      <div className="boxx">
        <div className="container d-flex flex-row justify-content-between" style={{ backgroundColor: '#363740', fontSize: '1.6rem' }}>
          <div className="text-light my-4">Link Insertion Content</div>
          <span className="text-muted px-3 pb-2 " style={{ fontSize: 'xxx-large' }} onClick={props.handleClose}>x</span>
        </div>
        <div className=" mb-5 mt-4 container" style={{ fontWeight: '500' }}>
          <div className="px-2 my-1 text-center text-muted">Submit your guest blog to be posted on </div>
          <div className="px-2 text-center">{`<Website to be posted on>`}</div>
        </div>
        <div className="container" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
          <div className="px-5  ">
            <div class=" px-3 form-group ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">Get Doc URL</label>
              <input style={{ height: '3rem', fontSize: 'smaller' }} type="email" class="form-control  border border-secondary " id="exampleFormControlInput1" placeholder="https://docs.google.com/document/d/.............." />
              <div className=" text-muted pl-3 pr-5 mt-1 " style={{ fontSize: '0.75rem' }}>Please make sure to keep the sharing settings on Google Drive as <strong>'Anyone who has the link can comment’</strong> (Not edit) DropBox link from sharing settings.</div>
            </div>
          </div>
          <div className="px-5 ">
            <div class=" px-3 form-group ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">Target Link</label>
              {/* <input style={{ height: '5rem', fontSize: 'small' }} type="email" class="form-control border border-secondary " id="exampleFormControlInput1" placeholder="Please list the 3 topics that would be an overlap between yours and their niche." /> */}
              <textarea style={{ height: '4rem', fontSize: 'smaller' }} type="email" class="form-control border border-secondary " id="exampleFormControlInput1" placeholder="Your site’s link on which you want a backlink"></textarea>
              <div className=" text-muted pl-3 pr-5 mt-1" style={{ fontSize: '0.75rem' }}>Mention the link in your document as well as here. This helps in monitoring the link in ‘Link Monitor’ module.</div>
            </div>
          </div>
          <div className="px-5 ">
            <button type="button" class=" mt-2 mx-3 rounded-lg btn btn-primary text-light " style={{ backgroundColor: '#4b2ca9', fontWeight: '500', height: ' 3rem', width: '-webkit-fill-available', fontSize: 'larger' }}>Send Link Insertion Content</button>
          </div>
        </div>
      </div>
    </div>
  );
};
const Savelogindetailpopup = props => {
  return (
    <div className="popup-box">
      <div className="boxx">
        <div className="container d-flex flex-row justify-content-between" style={{ backgroundColor: '#363740', fontSize: '1.6rem' }}>
          <div className="text-light my-4 px-2">Save Login Detail</div>
          <span className="text-muted px-3 pb-2 " style={{ fontSize: 'xxx-large' }} onClick={props.handleClose}>x</span>
        </div>
        <div className=" mb-2 mt-4 container" style={{ fontWeight: '500' }}>
          <div className="px-4 my-1 text-center text-muted">For sites where you have to login to create your link, save your login credentials & proof of work at one place. You can view them from the Order Dashboard later. </div>
          <div className="px-4 my-3 text-center">{`Login information for logging on - <Registration Link>`}</div>
        </div>
        <div className="container" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
          <div className="px-5  ">
            <div class=" px-3 form-group ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">Username</label>
              <input style={{ height: '3rem', fontSize: 'smaller' }} type="email" class="form-control  border border-secondary " id="exampleFormControlInput1" placeholder="Username" />
              <div className=" text-muted pl-3 pr-5 mt-1 " style={{ fontSize: '0.75rem' }}>The username or email that you used to login</div>
            </div>
          </div>
          <div className="px-5  ">
            <div class=" px-3 form-group ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">Password</label>
              <input style={{ height: '3rem', fontSize: 'smaller' }} type="email" class="form-control  border border-secondary " id="exampleFormControlInput1" placeholder="Status" />
              <div className=" text-muted pl-3 pr-5 mt-1 " style={{ fontSize: '0.75rem' }}>Password for logging in.</div>
            </div>
          </div>
          <div className="px-5  ">
            <div class=" px-3 form-group ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">Proof of Work</label>
              <input style={{ height: '3rem', fontSize: 'smaller', width: 'inherit' }} type="email" class="form-control  border border-secondary " id="exampleFormControlInput1" placeholder="Upload Image" />
              <img src="Vector.png" className="imageicon " style={{
                marginTop: '5px', height: ' 6.3855719566345215px',
                width: '13.998404502868652px',
                borderRadius: '0px'
              }} on alt="NA" />
              <div className=" text-muted pl-3 pr-5 mt-1 " style={{ fontSize: '0.75rem' }}>Upload your proof of work</div>
            </div>
          </div>
          <div className="px-5 ">
            <div class=" px-3 form-group ">
              <label className="mb-1" htmlFor="exampleFormControlInput1">Notes</label>
              <textarea style={{ height: '4rem', fontSize: 'smaller' }} type="email" class="form-control border border-secondary " id="exampleFormControlInput1" placeholder="For saving any other information to help log-in, or other notes for creating the link."></textarea>
            </div>
          </div>
          <div className="px-5 ">
            <button type="button" class=" mt-2 mx-3 mb-5 rounded-lg btn btn-primary text-light " style={{ backgroundColor: '#4b2ca9', fontWeight: '500', height: ' 3rem', width: '-webkit-fill-available', fontSize: 'larger' }}>Save Login Detail</button>
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
  Savelogindetailpopup,
}