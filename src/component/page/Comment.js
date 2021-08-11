import React, { useState } from "react" ;
import Table from '../widget/Table' ;
import {DeleteOutlined , EditOutlined , EyeOutlined } from '@ant-design/icons';


function Comment(props) {

    const displayId=(id)=>{
        console.log(id);
    }

    const col = [
        {
            title:"آیدی" ,
            dataIndex:'id'
        },
        {
            title:"نام و نام حانوادگی" ,
            dataIndex:'name'
        },
        {
            title:"نام کاربری" ,
            dataIndex:'username'
        },
        {
            title:"جزئیات" ,
            dataIndex:'edit' ,
            render:() => (<button id={6} onClick={()=>displayId(5)} className="more-btn"><EyeOutlined /></button>)
            // render: (<button onClick={displayId} className="more-btn"><EyeOutlined /></button>)
        },
        {
            title:"ویرایش" ,
            dataIndex:'edit' ,
            render:() =>(<button className="edit-btn"><EditOutlined/></button>)
        },
        {
            title:"حذف" ,
            dataIndex:'delete' ,
            render:() => (<button className="delete-btn"><DeleteOutlined/></button>)
        },
        
    ]

    const data =[
        {
            'id':1 ,
            'name':'احسان حسسینی' ,
            'test':'sdgsgsdg' ,
            'username':'ehsan7373' ,
        },
        {
            'id':2 ,
            'test22':'sdgsgsdg' ,
            'username':'amir' ,
            'name':'امیر حسسینی' ,
            
        },
        {
            'test32':'sdgsgsdg' ,
            'name':'احمد حسسینی' ,
            'username':'ahmad' ,
            'id':3 ,
        },
        {
            'id':4 ,
            'test22':'sdgsgsdg' ,
            'username':'th' ,
            'name':'ثقلثق' ,
            
        },
        {
            'id':5 ,
            'test22':'sdgsgsdg' ,
            'username':'ثقلثقل' ,
            'name':'شصسض' ,
            
        },
        {
            'id':6 ,
            'test22':'sdgsgsdg' ,
            'username':'صسثبصثب' ,
            'name':'32ققببی' ,
            
        },
        {
            'id':7 ,
            'test22':'sdgsgsdg' ,
            'username':'شصیشصی' ,
            'name':'غفاتفغت' ,
            
        },
        {
            'id':8 ,
            'test22':'sdgsgsdg' ,
            'username':'سشصقشق' ,
            'name':'صثا34' ,
            
        },
    ]

    return (
        <>
        <div className="fullPage">
            <div className="fullPage-head">
                <h4>لیست کامنت ها</h4>
            </div>
            <div className="fullPage-cont">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                <Table columns={col} data={data} />
            </div>
        </div>
        </>
    )
}

export default Comment;