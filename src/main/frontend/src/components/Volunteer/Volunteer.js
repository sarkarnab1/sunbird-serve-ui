import React from 'react'
import './Volunteer.css'

function Volunteer() {
  return (
    <div>
        <div className="filterNeeds">
            <input type="search" placeholder="Search"/>
            <input type="date" placeholder="Select Date" onfocus="this.type='date'" onblur="this.type='text'"></input>
            <select className="selectNeedType" >
                <option value="" disabled selected>Need Type</option>
            </select>
        </div>
        
    </div>
  )
}

export default Volunteer