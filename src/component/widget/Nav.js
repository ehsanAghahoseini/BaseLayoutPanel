import React, { useEffect, useState }  from "react" ;
import Logo from '../../static/img/logo2.png';
import Logo2 from '../../static/img/logo3.png';

import {MoneyCollectOutlined , AlignRightOutlined} from '@ant-design/icons';

function Nav(props) {
    const[activity , setActivity] = useState(0);

    useEffect(() => {
        window.addEventListener('resize', ()=>{
            if(window.innerWidth > 760){
                document.getElementById('nav').style.removeProperty('width');
            }
        });

        if(window.screen.width < 760){
            let ele = document.getElementById('nav');
            if(props.drowerMobile){
                ele.style.width = "250px"
            }
            else {
                ele.style.width = "0px"
            }       
        }
    },[props.drowerMobile]);

    return (
        <div id="nav" className={`nav ${!props.drower ? 'navClose' : null}`}>
            <div className="nav-head">
                {props.drower ? 
                <img src={Logo} alt="logo" />
                :
                <img src={Logo2} alt="logo" />
                }
            </div>
            {[1,1,1,1].map((item , index)=>    
            <div onClick={()=>{setActivity(index)}} className='nav-item' >
                <div className={`nav-item-inner ${activity == index ? 'nav-item-inner-active' : null}`}>
                    <span className="nav-item-cont">
                        <MoneyCollectOutlined/>
                        {props.drower ? 
                            <span className="nav-item-cont-title">گزینه منو</span>
                        :null}
                    </span>
                </div> 
                {index == 1 ? 
                <div className={`nav-item-sub ${activity == index && 'nav-item-sub-active'}`}></div>
                : null}
            </div>
            )}
        </div>
    )
}

export default Nav;