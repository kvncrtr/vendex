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
        <h4 className="access--alert-heading">Alerts</h4>
        
        <div className="access--alert-feed">
          <div className="access--alert">
            <p className="access--alert-type">Inventory Alert</p>

            <p className="access--time-and-date">Now</p>

            <div className="access--content-case">
              <p className="access--alert-details">
                <span className="access--alert-title">Part:</span>
                0705372 updated to MRB
              </p>

              <p className="access--alert-note">
                <span className="access--alert-note-title">Note:</span> 
                pkg1470001 boxes are out of stock pkg1470001 boxes are out of stock pkg1470001 boxes are out of stock pkg1470001 boxes are out of stock pkg1470001 boxes are out of stock
              </p>
            </div>
          </div>

          <div className="access--alert">
            <p className="access--alert-type">Process Alert</p>

            <p className="access--time-and-date">Now</p>

            <div className="access--content-case">
              <p className="access--alert-details">
                <span className="access--alert-title">PFM:</span>
                All rear screens must be removed prior to TOR
              </p>

              <p className="access--alert-note">
                <span className="access--alert-note-title">Note:</span> 
                TOR assembly requires the rear screen to be removed. Please do not assemble the TOR machine shelf on the workstation.
              </p>
            </div>
          </div>

          <div className="access--alert">
            <p className="access--alert-type">Quality Alert</p>

            <p className="access--time-and-date">1hr ago</p>

            <div className="access--content-case">
              <p className="access--alert-details">
                <span className="access--alert-title">Part:</span>
                10005565 has corrupt manufactures
              </p>

              <p className="access--alert-note">
                <span className="access--alert-note-title">Note:</span> 
                Asset Tags dating from 2018 week 20 to 2022 week 43 has doors and frames that are not meeting customers expectations
              </p>
            </div>
          </div>

          <div className="access--alert">
            <p className="access--alert-type">Inventory Alert</p>

            <p className="access--time-and-date">2d ago</p>

            <div className="access--content-case">
              <p className="access--alert-details">
                <span className="access--alert-title">Part:</span>
                0705372 updated to MRB
              </p>

              <p className="access--alert-note">
                <span className="access--alert-note-title">Note:</span> 
                pkg1470001 boxes are out of stock pkg1470001 boxes are out of stock pkg1470001 boxes are out of stock pkg1470001 boxes are out of stock pkg1470001 boxes are out of stock
              </p>
            </div>
          </div>

          <div className="access--alert">
            <p className="access--alert-type">Inventory Alert</p>

            <p className="access--time-and-date">Now</p>

            <div className="access--content-case">
              <p className="access--alert-details">
                <span className="access--alert-title">Part:</span>
                0705372 updated to MRB
              </p>

              <p className="access--alert-note">
                <span className="access--alert-note-title">Note:</span> 
                pkg1470001 boxes are out of stock pkg1470001 boxes are out of stock pkg1470001 boxes are out of stock pkg1470001 boxes are out of stock pkg1470001 boxes are out of stock
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Access
