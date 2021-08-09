import React, { useState } from "react" ;
 import Nav from './Nav';
import {UnorderedListOutlined , AlignRightOutlined} from '@ant-design/icons';


function Base() {
    const[displayNav , setDisplayNav] = useState(true) ;
    const[displayNavMobile , setDisplayNavMobile] = useState(false) ;

    const changeDisplayNav=()=>{
        if(displayNav){
            setDisplayNav(false)
        }else{
            setDisplayNav(true)
        }
    }

    const changeDisplayMobileNav=()=>{
        if(displayNavMobile){
            setDisplayNavMobile(false)
        }else{
            setDisplayNavMobile(true)
        }
    }

    return (
        <div className="main">
            <Nav drower={displayNav} drowerMobile={displayNavMobile} />
            <div className={`cont ${!displayNav ? 'contWidth' : null }`}>
                <div className="cont-head">
                    <div className="cont-head-left">
                        <AlignRightOutlined className="cont-head-left-icon" onClick={changeDisplayNav}/>
                    </div>
                    <div className="cont-head-right">
                        <UnorderedListOutlined className="cont-head-right-icon" onClick={changeDisplayMobileNav} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Base;