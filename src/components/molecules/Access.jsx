import React from "react";
import { UserCircle, DotsThreeVertical } from "@phosphor-icons/react";

const Access = () => {
  return (
    <div className="access--container">
      <div className="access--profile-case">
        <UserCircle size={38} />

        <div className="access--profile-details">
          <p className="access--profile-name">Kevin Carter</p>
          <p className="access--profile-job-title">Supervisor</p>
        </div>

        <div className="access--three-dot-case">
          <DotsThreeVertical className="access--three-dots" size={28} />
        </div>
      </div>


      <div className="access--week-trends-case">
        <h4 className="access--heading">Quick Access</h4>

        <div className="access--week-to-date-case">
          <div className="access--detail-case">
            <p className="access--detail-title">Previous Week:</p>
            <p>3200</p> 
            <span className="access--detail-precentage green">+12.9%</span>
          </div>

          <div className="access--detail-case">
            <p className="access--detail-title">Customer Demand:</p>
            <p>1435</p> 
          </div>

          <div className="access--detail-case">
            <p className="access--detail-title">Soft Total:</p>
            <p>843</p> 
          </div>

          <div className="access--detail-case">
            <p className="access--detail-title">Balance:</p> 
            <p>592</p>
            <span className="access--detail-precentage red">58.7%</span>
          </div>

          <div className="access--detail-case">
            <p className="access--detail-title">Projected Total:</p> 
            <p>1678</p>
            <span className="access--detail-precentage green">+16.9%</span>
          </div>
        </div>
      </div>

      <div className="access--alerts-case">

      </div>

      <div className="access--popular-inventory">

      </div>
    </div>
  )
}

export default Access
