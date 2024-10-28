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
      // window.location.reload();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleguestSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
        const user="l9K1AkGsLOMAHlGfrwpn4rFLCsp1";
        const token="eyJuYW1lIjoiQmh1c2hhbiBBc3V0a2FyIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnluc2RSVXpDWEFCbjBlbnNjdjNqVmRrb3ZmRkdTMmxzVlN5NUFPPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2JhY2tsaW5rLW1hcmtldHBsYWNlIiwiYXVkIjoiYmFja2xpbmstbWFya2V0cGxhY2UiLCJhdXRoX3RpbWUiOjE3MzAwMzY4MTUsInVzZXJfaWQiOiJsOUsxQWtHc0xPTUFIbEdmcndwbjRyRkxDc3AxIiwic3ViIjoibDlLMUFrR3NMT01BSGxHZnJ3cG40ckZMQ3NwMSIsImlhdCI6MTczMDAzNjgxNSwiZXhwIjoxNzMwMDQwNDE1LCJlbWFpbCI6ImJodXNoYW5hc3V0a2FyNDEwMjBAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMDk2NjgxOTA1MDQ4NTk0MjE3MjYiXSwiZW1haWwiOlsiYmh1c2hhbmFzdXRrYXI0MTAyMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19";

        localStorage.setItem('userid',user);
        localStorage.setItem('token',token);
        localStorage.setItem('name',"Guest User");
        localStorage.setItem('email',"guestuser@gmail.com");
        alert("Loggin In as GUEST!\n\nYou will be exploring guest mode, so some features may be limited. Sign up to unlock Linkly's full potential!");

        navigate("/backlinkvault");
        window.location.reload();
    

    } catch (err) {
        setError(err.message);
    }
};

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      const googleAuthProvider = new GoogleAuthProvider();
      // googleAuthProvider({
      //   prompt: 'select_account'
      // });
      googleAuthProvider.setCustomParameters({
        prompt: "select_account",
     });
      const userdetail=await signInWithPopup(auth, googleAuthProvider);
      console.log(userdetail);
      localStorage.setItem('userid',userdetail.user.uid);
      
      navigate("/backlinkvault");
      // window.location.reload();
      
     
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
            THE BACKLINK MARKETPLACE
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
      <div className="p-4 box mt-3 text-center">
      Don't want to register?<button onClick={handleguestSubmit} >Sign in as Guest</button>
         {/* <Link to="/signup"><strong></strong></Link> */}
      </div>
    </>
  );
};

export {
  Login,
}
