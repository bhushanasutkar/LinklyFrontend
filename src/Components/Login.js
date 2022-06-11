import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../contextApi/useAuthContext";
import { useContext } from "react";
import Linkcontext from "../contextApi/Linkcontext";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const { googleSignIn, logIn } = useUserAuth();
  const { Userid, setUser } = useContext(Linkcontext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      
      navigate("/backlinkvault");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      const googleAuthProvider = new GoogleAuthProvider();
      const userdetail=await signInWithPopup(auth, googleAuthProvider);
      console.log(userdetail);
      localStorage.setItem('userid',userdetail.user.uid);
      
      navigate("/backlinkvault");
     
    } catch (error) {}
  };

  return (
    <>
      <div
        className="p-4 box"
        style={{ width: "fit-content", margin: "auto", marginTop: "100px" }}
      >
        <div className="container bg-dark">
          <div className="container d-flex  flex-row justify-content-between align-items-center ">
            <img
              src="images.jfif"
              className="img-rounded imagesize my-2 mr-2"
              alt="Cinque Terre"
            ></img>
            <h1 className="text-light text-center px-2 py-1">LINKLY</h1>
          </div>
          <h6 className="text-secondary text-center py-2">
            THE BACKLINK MARETPLACE
          </h6>
        </div>
        {error && <Alert variant="danger">{error}</Alert>}
        <h2 className="mb-4 my-5">Sign In To Linkly</h2>
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup"><strong>Sign up</strong></Link>
      </div>
    </>
  );
};

export {
  Login,
}
