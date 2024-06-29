import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Heading from "./Sidebarcomponents/Heading";
// import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
// import GroupsIcon from '@mui/icons-material/Groups';
// import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
// import LightbulbIcon from '@mui/icons-material/Lightbulb';
// import SettingsIcon from '@mui/icons-material/Settings';
// import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";

const Sidebar = () => {
    let location = useLocation();
    const [a, seta] = useState(1);
    useEffect(() => {

        if (location.pathname === '/'  ||location.pathname === '/signup') {
            seta(null);
        }
        else {
            seta(1);
        }
    }, [location]);

    return (
        <>
            {a && <div className="sidebar">
                <Heading></Heading>
                <div className="text-light text-start container class1" style={{height:'33rem'}}>
                    <div>
                        <div className="container  Navhover   d-flex flex-row justify-content-start align-items-center" style={{ backgroundColor: `${location.pathname === '/backlinkvault' ? 'rgb(215, 240, 240)' : "rgb(45, 45, 45)"}` }}>
                            <img className="Icon" src="left_backlink_vault.svg" alt="" />
                            <Link className="  px-3  Navtext" style={{ color: `${location.pathname === '/backlinkvault' ? 'rgb(45, 45, 45)' : "rgb(215, 240, 240)"}` }} to="/backlinkvault">Linkvault</Link>
                        </div>
                    </div>
                    <div>
                        <div className="container  Navhover   d-flex flex-row justify-content-start align-items-center" style={{ backgroundColor: `${location.pathname === '/backlinkmanager' ? 'rgb(215, 240, 240)' : "rgb(45, 45, 45)"}` }}>
                            <img className="Icon" src="left_backlink_manager.svg" alt="" />
                            <Link className="  px-3  Navtext" style={{ color: `${location.pathname === '/backlinkmanager' ? 'rgb(45, 45, 45)' : "rgb(215, 240, 240)"}` }} to="/backlinkmanager">Backlinkmanager</Link>
                        </div>
                    </div>
                    <div>
                        <div className="container  Navhover   d-flex flex-row justify-content-start align-items-center" style={{ backgroundColor: `${location.pathname === '/backlinkmonitor' ? 'rgb(215, 240, 240)' : "rgb(45, 45, 45)"}` }}>
                            <img className="Icon" src="left_link_monitor.svg" alt="" />
                            <Link className=" px-3  Navtext" style={{ color: `${location.pathname === '/backlinkmonitor' ? 'rgb(45, 45, 45)' : "rgb(215, 240, 240)"}` }} to="/backlinkmonitor">Backlinkmonitor</Link>
                        </div>
                    </div>
                    <div>
                        <div className="container  Navhover   d-flex flex-row justify-content-start align-items-center" style={{ backgroundColor: `${location.pathname === '/linkgiver' ? 'rgb(215, 240, 240)' : "rgb(45, 45, 45)"}` }}>
                            <img className="Icon" src="  left_link_giver_admin.svg" alt="" />
                            <Link className="  px-3  Navtext" style={{ color: `${location.pathname === '/linkgiver' ? 'rgb(45, 45, 45)' : "rgb(215, 240, 240)"}` }} to="/linkgiver">Link Giver Admin</Link>
                        </div>
                    </div>
                    <div>
                        <div className="container mb-4 Navhover   d-flex flex-row justify-content-start align-items-center" style={{ backgroundColor: `${location.pathname === '/orderdashboard' ? 'rgb(215, 240, 240)' : "rgb(45, 45, 45)"}` }}>
                            <img className="Icon" src="  left_order_dashboard.svg" alt="" />
                            <Link className="  px-3  Navtext" style={{ color: `${location.pathname === '/orderdashboard' ? 'rgb(45, 45, 45)' : "rgb(215, 240, 240)"}` }} to="/orderdashboard">Order Dashboard</Link>
                        </div>
                    </div>
                    <hr />
                    {/* <div>
                        <div className="container  Navhover  mt-4  d-flex flex-row justify-content-start align-items-center" style={{ backgroundColor: `${location.pathname === '/s' ? 'rgb(215, 240, 240)' : "rgb(45, 45, 45)"}` }}>
                            <img className="Icon" src="left_settings.svg" alt="" />
                            <Link className="  px-3  Navtext" to="/backlinkvault" style={{ color: `${location.pathname === '/orderdashboard' ? 'rgb(45, 45, 45)' : "rgb(215, 240, 240)"}` }}>Settings</Link>
                        </div>
                        <div className="container  Navhover    d-flex flex-row justify-content-start align-items-center" style={{ backgroundColor: `${location.pathname === '/s' ? 'rgb(215, 240, 240)' : "rgb(45, 45, 45)"}` }}>
                            <img className="Icon" src="left_subscription.svg" alt="" />

                            <Link className="  px-3  Navtext" to="/backlinkvault" style={{ color: `${location.pathname === '/orderdashboard' ? 'rgb(45, 45, 45)' : "rgb(215, 240, 240)"}` }}>Subscription</Link>
                        </div>
                    </div> */}
                    <div className="container d-flex justify-content-center align-items-center my-5">
                        <button type="button" style={{ width: 'inherit' }} className="btn btn-primary text-center">Add New Link</button>
                    </div>
                </div>
            </div>}

        </>
    );
};

export default Sidebar;
