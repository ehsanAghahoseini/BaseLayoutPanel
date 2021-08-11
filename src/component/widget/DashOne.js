import React, { useEffect, useState }  from "react" ;
import {UserOutlined } from '@ant-design/icons'

function DashOne() {
  


    return (
        <div className="dash-section">
            <div className="dash-one-item">
                <div className="dash-one-item-inner">
                    <div className="dash-one-item-inner-left">
                        <span>1500</span>
                        <span>معلم</span>
                    </div>
                    <div className="dash-one-item-inner-right"><UserOutlined/></div>
                </div>
            </div>
            <div className="dash-one-item">
                <div className="dash-one-item-inner">
                    <div className="dash-one-item-inner-left">
                        <span>3200</span>
                        <span>دانش اموزش</span>
                    </div>
                    <div className="dash-one-item-inner-right"><UserOutlined/></div>
                </div>
            </div>
            <div className="dash-one-item">
                <div className="dash-one-item-inner">
                    <div className="dash-one-item-inner-left">
                        <span>740</span>
                        <span>رشته</span>
                    </div>
                    <div className="dash-one-item-inner-right"><UserOutlined/></div>
                </div>
            </div>
            <div className="dash-one-item">
                <div className="dash-one-item-inner">
                    <div className="dash-one-item-inner-left">
                        <span>985</span>
                        <span>کلاس</span>
                    </div>
                    <div className="dash-one-item-inner-right"><UserOutlined/></div>
                </div>
            </div>
        </div>
    )
}

export default DashOne;