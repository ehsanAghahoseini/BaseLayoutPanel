import React, { useEffect, useState }  from "react" ;
import {
    UnorderedListOutlined ,
    AlignRightOutlined ,
    BellOutlined ,
    MailOutlined ,
    CloseOutlined  ,
    CheckOutlined 
} from '@ant-design/icons';
import Logo from '../../static/img/logo2.png';
import profile from '../../static/img/1.jpg';

function ContHead(props) {
    const[displaySubMenu , setDisplaySubMenu] = useState(false) ;
    const[dayState , setDayState] = useState(false) ;



    const changeDisplaySubMenu=()=>{
        let ele = document.getElementById('cont-head-sub') ;
        if(displaySubMenu){
            setDisplaySubMenu(false);
            ele.style.height = "0px";
        }
        else{
            setDisplaySubMenu(true);
            ele.style.height = "70px";
        }
    }

    const changeDayState=(mode)=>{
        setDayState(mode);
        if(!dayState){
            document.documentElement.style.setProperty('--white-color',"#222222");
            document.documentElement.style.setProperty('--highGray-color',"#171717");
            document.documentElement.style.setProperty('--gray-color',"#222222");
            document.documentElement.style.setProperty('--Text-color',"#d0d1d2");
            document.documentElement.style.setProperty('--favGray-color',"#222222");
        }
        else {
            document.documentElement.style.setProperty('--white-color',"#ffffff");
            document.documentElement.style.setProperty('--highGray-color',"#f5f6f9");
            document.documentElement.style.setProperty('--gray-color',"#f9f9f9");
            document.documentElement.style.setProperty('--Text-color',"#535f6b");
            document.documentElement.style.setProperty('--favGray-color',"#e0e0e0");
        }
    }


    return (
        <div className="cont-head">
            <div className="cont-head-left">
                <AlignRightOutlined 
                    className="cont-head-left-icon1" 
                    onClick={props.changeDisplayNav}
                />
                <AlignRightOutlined 
                    className="cont-head-left-icon2" 
                    onClick={props.changeDisplayMobileNav}
                />
                <img src={Logo} alt="logo" />
            </div>
            <div className="cont-head-right">
                <UnorderedListOutlined
                 onClick={changeDisplaySubMenu} 
                 className="cont-head-right-icon"
                />
                <div className="cont-head-right-mode">
                    <div 
                     className={`cont-head-right-nigh ${!dayState && 'cont-head-right-mode-active'}`} 
                     onClick={()=>changeDayState(false)}>
                        <CloseOutlined />
                    </div>
                    <div className={`cont-head-right-day ${dayState && 'cont-head-right-mode-active'}`} 
                     onClick={()=>changeDayState(true)}>
                        <CheckOutlined />
                    </div>
                </div>
                <div className="cont-head-right-btn cont-head-right-btn-hide">
                    <BellOutlined />
                </div>
                <div className="cont-head-right-btn cont-head-right-btn-hide">
                    <MailOutlined />
                </div>
                <img className="cont-head-right-profile cont-head-right-profile-hide" src={profile} alt="profile"></img>
            </div>
            <div id="cont-head-sub" className="cont-head-sub">
                <div className="cont-head-right-btn">
                    <BellOutlined />
                </div>
                <div className="cont-head-right-btn">
                    <MailOutlined />
                </div>
                <img className="cont-head-right-profile" src={profile} alt="profile"></img>
            </div>
        </div>       
    )
}

export default ContHead;