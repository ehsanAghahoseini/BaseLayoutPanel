import React, { useEffect, useState }  from "react" ;
import Logo from '../../static/img/logo2.png';
import Logo2 from '../../static/img/logo3.png';
import NavData from './NavData';

import {
    MoneyCollectOutlined ,
    AlignRightOutlined ,
    BarChartOutlined ,
    CoffeeOutlined
    } 
from '@ant-design/icons';
import {Link} from 'react-router-dom';

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
                <AlignRightOutlined onClick={props.changedrowerMobile}/>
            </div>
            {NavData.map((item , index)=>    
            <div onClick={()=>{setActivity(index)}} className='nav-item' >
                {!item.isSubmenu ? 
                    <Link to={item.link}>
                        <div className={`nav-item-inner ${activity == index ? 'nav-item-inner-active' : null} ${!props.drower ? 'nav-item-inner-small' : null}`}>
                            <span className="nav-item-cont">
                                <MoneyCollectOutlined className={`${!props.drower ? 'nav-item-cont-icon-small' : null}`}/>
                                {props.drower ? 
                                    <span className="nav-item-cont-title">{item.name}</span>
                                :null}
                            </span>
                        </div> 
                    </Link>
                :
                    <div className={`nav-item-inner ${activity == index ? 'nav-item-inner-active' : null} ${!props.drower ? 'nav-item-inner-small' : null}`}>
                        <span className="nav-item-cont">
                            <MoneyCollectOutlined className={`${!props.drower ? 'nav-item-cont-icon-small' : null}`}/>
                            {props.drower ? 
                                <span className="nav-item-cont-title">{item.name}</span>
                            :null}
                        </span>
                    </div> 
                }
                {item.isSubmenu ? 
                <div className={`nav-item-sub ${activity == index && 'nav-item-sub-active'}`}>
                    {item.submenu.map(items=> 
                    <Link to={items.link}>
                        <div className="nav-item-sub-item">
                            <BarChartOutlined  className="nav-item-sub-item-icon" />
                            {props.drower &&
                                <span className="nav-item-sub-item-text">{items.name}</span>
                            }
                        </div>
                    </Link>
                    )}
                </div>
                : null}
            </div>
            )}
        </div>
    )
}

export default Nav;