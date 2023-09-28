import React from 'react'

function sidebar() {
  return <>
  
  <ul className="navbar-nav bg-white sidebar sidebar-dark accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
   <div>
    <h3 className="sidebar-brand-text">Medico Sales</h3>
    </div>


<li className="nav-item active">
     <span className="dash">Dashboard</span>
</li>


<li className="nav-item">
    <span className="lab">Lab Test</span>
</li>


<li className="nav-item">
     <span className="appointment">Appointment</span>
</li>


<li> 
    <span className="medicine">Medicine Order</span>
</li>


<li className="nav-item">
         <span className="message">Message</span>
</li>

<li className="nav-item">
       <span className="payment">Payment</span>
</li>


<li className="nav-item">
    <span className="setting">Settings</span>
</li>
<br/><br/><br/><br/><br/><br/><br/><br/><br/>
<li>
   <span className="help">Help</span>
   </li>
</ul>


 </>
    
  
}

export default sidebar