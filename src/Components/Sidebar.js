import React , {useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import Heading from "./Sidebarcomponents/Heading";
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SettingsIcon from '@mui/icons-material/Settings';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { useState } from "react";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import Login from "./Login";


const Sidebar = () => {
  let location = useLocation();
  const [a, seta] = useState(1);
  useEffect(() => {
    console.log(location.pathname);
  
    if(location.pathname==='/' || location.pathname==='/signup'){
        seta(null);
    }
    else{
        seta(1);
    }
  }, [location]);
 
  return (
    <>
   
   
      {a && <div className="sidebar">
        <Heading></Heading>
      <div className="text-light text-start container class1">
        <div>
            <div className="container  Navhover ml-2  d-flex flex-row justify-content-start align-items-center" style={{backgroundColor:`${location.pathname==='/dashboard'?'rgb(215, 240, 240)':"rgb(45, 45, 45)"}`}}>
                <DashboardCustomizeIcon className="Icon"></DashboardCustomizeIcon>
                <Link className="px-3 Navtext " style={{color:`${location.pathname==='/dashboard'?'rgb(45, 45, 45)':"rgb(215, 240, 240)"}`}}  to="/dashboard">Dashboard</Link>
            </div>
        </div>
        <div>
            <div className="container  Navhover ml-2  d-flex flex-row justify-content-start align-items-center"  style={{backgroundColor:`${location.pathname==='/backlinkvault'?'white':"rgb(45, 45, 45)"}`}}>
                <DashboardCustomizeIcon className="Icon"></DashboardCustomizeIcon>
                <Link className="  px-3  Navtext" style={{color:`${location.pathname==='/backlinkvault'?'rgb(45, 45, 45)':"rgb(215, 240, 240)"}`}} to="/backlinkvault">Linkvault</Link>
            </div>
        </div>
        <div>
            <div className="container  Navhover ml-2  d-flex flex-row justify-content-start align-items-center"  style={{backgroundColor:`${location.pathname==='/backlinkmanager'?'white':"rgb(45, 45, 45)"}`}}>
                <LightbulbIcon className="Icon"></LightbulbIcon>
                <Link className="  px-3  Navtext" style={{color:`${location.pathname==='/backlinkmanager'?'rgb(45, 45, 45)':"rgb(215, 240, 240)"}`}} to="/backlinkmanager">Backlinkmanager</Link>
            </div>
        </div>
        <div>
            <div className="container  Navhover ml-2  d-flex flex-row justify-content-start align-items-center"  style={{backgroundColor:`${location.pathname==='/backlinkmonitor'?'white':"rgb(45, 45, 45)"}`}}>
                <GroupsIcon className="Icon"></GroupsIcon>
                <Link className=" px-3  Navtext" style={{color:`${location.pathname==='/backlinkmonitor'?'rgb(45, 45, 45)':"rgb(215, 240, 240)"}`}} to="/backlinkmonitor">Backlinkmonitor</Link>
            </div>
        </div>
        <div>
            <div className="container  Navhover ml-2  d-flex flex-row justify-content-start align-items-center"  style={{backgroundColor:`${location.pathname==='/linkgiver'?'white':"rgb(45, 45, 45)"}`}}>
                <PersonOutlineTwoToneIcon className="Icon"></PersonOutlineTwoToneIcon>
                <Link className="  px-3  Navtext"style={{color:`${location.pathname==='/linkgiver'?'rgb(45, 45, 45)':"rgb(215, 240, 240)"}`}} to="/linkgiver">Linkgiver</Link>
            </div>
        </div>
        <div>
            <div className="container mb-4 Navhover ml-2  d-flex flex-row justify-content-start align-items-center"  style={{backgroundColor:`${location.pathname==='/orderdashboard'?'white':"rgb(45, 45, 45)"}`}}>
                <AddShoppingCart className="Icon"></AddShoppingCart>
                <Link className="  px-3  Navtext" style={{color:`${location.pathname==='/orderdashboard'?'rgb(45, 45, 45)':"rgb(215, 240, 240)"}`}} to="/orderdashboard">Order Dashboard</Link>
            </div>
        </div>
        <hr  />
        <div>
            <div className="container  Navhover ml-2 mt-4  d-flex flex-row justify-content-start align-items-center"  style={{backgroundColor:`${location.pathname==='/s'?'white':"rgb(45, 45, 45)"}`}}>
                <SettingsIcon className="Icon"></SettingsIcon>
                <Link className="  px-3  Navtext" to="/orderdashboard">Settings</Link>
            </div>
            <div className="container  Navhover ml-2   d-flex flex-row justify-content-start align-items-center" style={{backgroundColor:`${location.pathname==='/s'?'white':"rgb(45, 45, 45)"}`}}>
                <SubscriptionsIcon className="Icon"></SubscriptionsIcon>
                <Link className="  px-3  Navtext" to="/orderdashboard">Subscription</Link>
            </div>
        </div>
        <div className="container d-flex justify-content-center align-items-center my-5">
        <button type="button" style={{width:'inherit'}} class="btn btn-primary text-center">Add New Link</button>
        </div>
      </div>
      </div>}
      
    </>
  );
};

export default Sidebar;
