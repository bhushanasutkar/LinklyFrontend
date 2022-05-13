import React from 'react'
import {ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import IosShareIcon from '@mui/icons-material/IosShare';
const Sidebartrial = () => {
    return (
        <div>


            <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem icon={<IosShareIcon/>}>Dashboard</MenuItem>
                    <SubMenu title="Components" icon={<IosShareIcon />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>;
        </div>
    )
}

export default Sidebartrial