import React from 'react';
import '../css/SidebarOption.css'

const SidebarOption = ({active, text, Icon}) => {
    return ( <div className={`SidebarOption ${active && 'SidebarOption__active'}`}>
        <Icon />
        <h2>{text}</h2>

    </div> );
}
 
export default SidebarOption;