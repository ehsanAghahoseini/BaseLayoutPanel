import React, { useState } from "react" ;
import Nav from './Nav';
import ContHead from './ContHead';
import Comment from '../page/Comment';
import Dashboard from '../page/Dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function Base(props) {
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
            <Nav 
                drower={displayNav} 
                drowerMobile={displayNavMobile} 
                changedrowerMobile = {changeDisplayMobileNav}
            />
            <div className={`cont ${!displayNav ? 'contWidth' : null }`}>
                <ContHead
                    changeDisplayNav = {changeDisplayNav}
                    changeDisplayMobileNav = {changeDisplayMobileNav}
                />
                <div className="contMain">
                    <div className="contMainPage">
                        {props.children}
                        <Route exact path="/panel" component={Dashboard}></Route>
                        <Route exact path="/panel/comment" component={Comment}></Route>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Base;