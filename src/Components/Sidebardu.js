import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import AllInboxIcon from '@mui/icons-material/AllInbox';
const Sidebardu = () => {
    return (
        <>
            <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem icon={< AllInboxIcon/>}>Dashboard</MenuItem>
                    <SubMenu title="Components" icon={<AllInboxIcon />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>
        </>
    )
}

export default Sidebardu