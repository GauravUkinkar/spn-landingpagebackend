import React from 'react';
import "../style/Sidebar.scss"
import {Link} from "react-router-dom"

function Sidebar(props) {
  return (
    <>
       <div className="sidebar">
<h2>SPN</h2>

      <div className="links">
      <Link to="/">
          Dashboard
      </Link>
      <Link to="/contacts">
         Contacts
      </Link>
      </div>

      <div className="logout-btn">
      <button className='btn log-btn' onClick={props.logout}>Logout</button>
      </div>
       </div> 
    </>
  )
}

export default Sidebar
