import React  from "react" ;

const NavData = [
    {
        'name':"داشبورد" ,
        'isSubmenu': false ,
        'link':'/panel'
    },
    {
        'name':"کامنت" ,
        'isSubmenu': false ,
        'link':'/panel/comment'
    },
    {
        'name':"صفحات" ,
        'isSubmenu': true ,
        'submenu':[
            {
                'name':"صفحه اول" ,
                'link':'/panel' ,
            },
            {
                'name':"صفحه دوم" ,
                'link':'/panel' ,
            },
        ]
    },
]

export default NavData ;

