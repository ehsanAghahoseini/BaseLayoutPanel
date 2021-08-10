import React, { useState } from "react" ;
import Table from '../widget/Table' ;


function Comment(props) {

    const col = [
        {
            'title':"آیدی" ,
            'dataIndex':'id'
        },
        {
            'title':"نام و نام حانوادگی" ,
            'dataIndex':'name'
        },
        {
            'title':"نام کاربری" ,
            'dataIndex':'username'
        },
        {
            'title':"حذف" ,
            'dataIndex':'delete' ,
            'render':(<button>حذف</button>)
        },
        {
            'title':"ویرایش" ,
            'dataIndex':'edit' ,
            'render':(<button>ویرایش</button>)
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
        }
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