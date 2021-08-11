import React, { useEffect, useState }  from "react" ;
import {
    RightOutlined ,
    LeftOutlined
} from '@ant-design/icons';

function Table(props) {
    const [listDate , setListData] = useState([]);
    const [counter , setCounter] = useState(1);
    const [range , setRange] = useState(4);


    const changeCounter=(action)=>{
        let newlist = [] ;
        if(action){
            if(props.data[(counter * range)] != undefined){
                for(let i=counter * range ; i<(counter * range)+range ; i++){
                    if(props.data[i] != undefined){
                        newlist.push(props.data[i])
                    }
                }
                setCounter(counter + 1)
                setListData(newlist);
                return ;
            }
        }
        else {
            if(props.data[((counter -1 ) * range)-1] != undefined){
                for(let i=(counter - 2)*range ; i<((counter - 2)*range)+range ; i++){
                    if(props.data[i] != undefined){
                        newlist.push(props.data[i])
                    }
                }
                setCounter(counter - 1)
                setListData(newlist);
                return ;
            }
        }

    }

    
    useEffect(() => {
        console.log(props.columns);
        let list = [] ;
        for(let i=0 ; i<range ; i++){
            if(props.data[i] != undefined){
                list.push(props.data[i])
            }
        }
        setCounter(1)
        setListData(list)
    },[]);

    return (
        <div className="table">
            <div className="table-head">
                {props.columns.map(item=>
                    <div className="table-head-item"><span>{item.title}</span></div>
                )}
            </div>
            {listDate.map(item=>
            <div className="table-row">
                    {props.columns.map(items=>
                    <div className="table-row-item">
                        {item[items.dataIndex]}
                        {item[items.dataIndex] == undefined && items.render()}
                        {()=>{console.log("items.render");}}
                    </div>
                    )}
            </div>
            )}
            <div className="table-counter">
                <div className="table-counter-main">
                    <div className="table-counter-main-item" onClick={()=>changeCounter(true)} > <RightOutlined/> </div>
                    <div className="table-counter-main-item"> {counter} </div>
                    <div className="table-counter-main-item" onClick={()=>changeCounter(false)}><LeftOutlined/></div>
                </div>
            </div>
        </div>
    )
}

export default Table;