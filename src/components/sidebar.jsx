import React from 'react'

function sidebar() {
  return <>
  
  <ul className="navbar-nav bg-white sidebar sidebar-dark accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
   <div>
    <h3 className="sidebar-brand-text">Medico Sales</h3>
    </div>


<li className="nav-item active">
     <img src="./src/Icons/Dashicon.svg"/>
     <span className="dash">Dashboard</span>
</li>


<li className="nav-item">
    <img src="./src/Icons/lab icon.svg"/>
    <span>Lab Test</span>
</li>


<li className="nav-item">
     <img src="./src/Icons/appointment icon.svg"/>
     <span>Appointment</span>
</li>


<li> 
    <img src="./src/Icons/medicine icon.svg"/>
    <span>Medicine Order</span>
</li>


<li className="nav-item">
        <img src="./src/Icons/message icon.svg"/>
        <span>Message</span>
</li>

<li className="nav-item">
        <img src="./src/Icons/payment icon.svg"/>
        <span>Payment</span>
</li>


<li className="nav-item">
    <img src="./src/Icons/setting icon.svg"/>
     <span>Settings</span>
</li>
<br/><br/><br/><br/><br/><br/><br/><br/><br/>
<li>
   <img src="./src/Icons/Question.svg"/>
   <span>Help</span>
   </li>
</ul>


 </>
    
  
}

export default sidebar