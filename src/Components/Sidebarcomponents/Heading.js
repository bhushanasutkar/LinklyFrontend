import React from 'react'

const Heading = () => {
  return (
    <div >
        <div className="container bg-dark">
          <div className="container d-flex  flex-row justify-content-between align-items-center ">
            <img src="images.jfif"  className="img-rounded imagesize my-2 mr-2" alt="Cinque Terre"></img>
            <h1 className="text-light text-center px-2 py-1">LINKLY</h1>
          </div>
          <div style={{fontStyle: 'oblique',width: 'max-content'}} className="text-secondary text-center py-2">THE BACKLINK MARKETPLACE</div>
        </div>
    </div>
  )
}

export default Heading