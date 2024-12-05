import React from 'react'

function SlackMsg() {
  return (

    <>
      <div className='d-flex  align-items-center justify-content-center gap-3 mt-4'>
        <button className='m-2 p-2 rounded'>Send Slack Message</button>
        <button className='m-2 p-2 rounded'>Slack  Templates</button>
        <button className='m-2 p-2 rounded'>Slack  Activity</button>
      </div>


      {/* --------------------------------------------------------------------------------------------------------------------------------------------- */}


      <div className=' w-full  justify-content-center align-items-center border border-primary  border-4 rounded-1 mt-3' style={{ height: "410px", width: "850px", marginLeft: "55px" }}>
        {/* div for align in row */}
        <div className='d-flex ' style={{ zIndex: "2", position: "relative" }}>

          {/* LINE */}
          <hr
            className="border-success border border-2 position-absolute" // Position absolute for the hr
            style={{ top: "10%", left: "0", right: "0", margin: "0", zIndex: "1" }} // Centered horizontally and spans full width
          />


          {/* FIRST COLUMN */}
          <div className=' border border-warning mx-3 border-3 mt-1 my-3' style={{ height: "395px", width: "200px" }} >
            {/* <hr className="border-success" /> */}
          </div>


          {/* second COLUMN */}

          <div className=' border border-warning mx-3 border-3 mt-1' style={{ height: "395px", width: "200px" }} >
            {/* <hr className="border-success" /> */}
          </div>



          {/* third COLUMN */}

          <div className=' border border-warning mx-3 border-3 mt-1' style={{ height: "395px", width: "200px" }} >
            {/* <hr className="border-success" /> */}
          </div>


          {/* 4th COLUMN */}

          <div className=' border border-warning mx-3 border-3 mt-1' style={{ height: "395px", width: "200px" }} >
            {/* <hr className="border-success  border border-2" /> */}
          </div>



        </div>
      </div>


    </>

  )
}

export default SlackMsg
