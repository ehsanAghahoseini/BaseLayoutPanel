import React, { useEffect, useState }  from "react" ;


function Table(props) {
    

    return (
        <div className="table">
            <div className="table-head">
                {props.columns.map(item=>
                    <div className="table-head-item"><span>{item.title}</span></div>
                )}
            </div>
            {props.data.map(item=>
            <div className="table-row">
                    {props.columns.map(items=>
                    <div className="table-row-item">
                        {item[items.dataIndex]}
                        {item[items.dataIndex] == undefined && items.render}
    
                    </div>
                    )}
            </div>
            )}
        </div>
    )
}

export default Table;