import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../contextApi/useAuthContext";

const Login = () => {
    const { googleSignIn, logIn } = useUserAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            navigate("/home");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate("/home");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <div className="p-4 box" style={{ width: 'fit-content', margin: 'auto', marginTop: '100px' }}>
                <div className="container bg-dark">
                    <div className="container d-flex  flex-row justify-content-between align-items-center ">
                        <img src="images.jfif" class="img-rounded imagesize my-2 mr-2" alt="Cinque Terre"></img>
                        <h1 className="text-light text-center px-2 py-1">LINKLY</h1>
                    </div>
                    <h6 className="text-secondary text-center py-2">THE BACKLINK MARETPLACE</h6>
                </div>
                <h2 className="mb-3 text-center">  Logiin to Linkly</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="primary" type="Submit">
                            Log In
                        </Button>
                    </div>
                </Form>
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
                Don't have an account? <Link to="/signup">Sign up</Link>
            </div>
        </>
    );
};

export default Login;