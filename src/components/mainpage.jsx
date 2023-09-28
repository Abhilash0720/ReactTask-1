import React from 'react'
function mainpage() {
  return <> 
  <div className="container-fluid">
     <input className="section" type="text" placeholder='Search'/>  
     <b><h3 className="headsection">Sales Information</h3></b>

      <div className="inputlabel">
        <h5>Customer</h5>
        <h5>Invoice ID</h5>
        <h5>Start Date</h5>
        <h5>End Date</h5>
      </div>
  <div className="inputtype">
  
  <input  type="text" id="name" placeholder="Enter Customer Name"/><br/>
   
  <input  type="text" id="name2" placeholder="Enter Invoice Id"/><br/>
  
  <input  type="text" id="name3" placeholder="Enter Start Date"/><br/>
  
  <input  type="text" id="name4" placeholder="Enter End Date"/>
  </div>
  
  <div className="row">
    <table className="tablerow">
      <thead >
        <tr>
          <input type="checkbox"/>
            <th>Invoice ID</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Payable Amount</th>
            <th>Paid Amount</th>
            <th>Due</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <input type="checkbox"/>
          <td className="tdcolor">#AHGA68</td>
          <td>23/09/2022</td>
          <td>Jacob Marcus</td>
          <td>$100</td>
          <td>$000</td>
          <td>$000</td>
        </tr>
        <tr>
        <input type="checkbox"/>
        <td className="tdcolor">#AHGA68</td>
          <td>23/09/2022</td>
          <td>Jacob Marcus</td>
          <td>$100</td>
          <td>$000</td>
          <td>$000</td>
        </tr>
        <tr>
        <input type="checkbox"/>
        <td className="tdcolor">#AHGA68</td>
          <td>23/09/2022</td>
          <td>Jacob Marcus</td>
          <td>$100</td>
          <td>$000</td>
          <td>$000</td>
        </tr>
        <tr>
        <input type="checkbox"/>
        <td className="tdcolor">#AHGA68</td>
          <td>23/09/2022</td>
          <td>Jacob Marcus</td>
          <td>$100</td>
          <td>$000</td>
          <td>$000</td>
        </tr>
        <tr>
        <input type="checkbox"/>
        <td className="tdcolor">#AHGA68</td>
          <td>23/09/2022</td>
          <td>Jacob Marcus</td>
          <td>$100</td>
          <td>$000</td>
          <td>$000</td>
        </tr>
        <tr>
        <input type="checkbox"/>
        <td className="tdcolor">#AHGA68</td>
          <td>23/09/2022</td>
          <td>Jacob Marcus</td>
          <td>$100</td>
          <td>$000</td>
          <td>$000</td>
        </tr>
        <tr>
        <input type="checkbox"/>
        <td className="tdcolor">#AHGA68</td>
          <td>23/09/2022</td>
          <td>Jacob Marcus</td>
          <td>$100</td>
          <td>$000</td>
          <td>$000</td>
        </tr>
        <tr>
        <input type="checkbox"/>
        <td  className="tdcolor">#AHGA68</td>
          <td>23/09/2022</td>
          <td>Jacob Marcus</td>
          <td>$100</td>
          <td>$000</td>
          <td>$000</td>
        </tr>
        <tr>
        <input type="checkbox"/>
        <td className="tdcolor">#AHGA68</td>
          <td>23/09/2022</td>
          <td>Jacob Marcus</td>
          <td>$100</td>
          <td>$000</td>
          <td>$000</td>
        </tr>
      </tbody>
      </table>
  </div>
 </div>

  </>
}

export default mainpage