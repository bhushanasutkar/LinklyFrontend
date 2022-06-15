import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../contextApi/useAuthContext";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      localStorage.clear();
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
