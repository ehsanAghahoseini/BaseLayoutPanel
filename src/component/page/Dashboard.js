import React, { useState } from "react" ;
import {UserOutlined } from '@ant-design/icons';
import DashOne from '../widget/DashOne';
import DashTwo from '../widget/DashTwo';
import DashThree from '../widget/DashThree';



function Dashboard(props) {
   


    return (
        <div className="dashboard">
            <DashTwo/>
            <DashOne/>
            <DashThree/>
        </div>
    )
}

export default Dashboard;