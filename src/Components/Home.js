import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../contextApi/useAuthContext";
import { useContext } from "react";
import Linkcontext from "../contextApi/Linkcontext";
const Home = () => {

const { size,setsize,Link,setLink,getallLinks,setuserid,setflag } = useContext(Linkcontext);
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await localStorage.clear();
      setLink(Link.splice(0,Link.length));
      setflag(false);
      console.log(Link);
      await logOut();
      // await googleSignInClient.signOut();
      navigate("/");
    } catch (error) {}
  };
  return (
    <>
      <div className="d-grid gap-2 mx-1">
        <Button
          variant="primary"
          style={{ height: "maxContent", margin: "auto",width: 'max-content',backgroundColor:'#4b2ca9' }}
          onClick={handleLogout}
        >
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;
