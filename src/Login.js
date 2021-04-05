import { Button, Input, InputLabel, Paper, TextField } from '@material-ui/core';
import React from 'react';
import logoImg from './images/trklogo-transparent.png';


const Login = (props) => {

    const {
        email, 
        setEmail, 
        password,
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError
    } = props;

    return(
        <>


 
            <Paper className="header" square elevation={3} style={{backgroundColor: "#222430", position: "absolute", width: "100%"}}> 
                <img src={logoImg} width="150px" height="150px"/>   
            </Paper>

            <section className="login">
                
                <section id="main">
                    <div className="text-dk-bg">
                        <p className="main-text">
                            Trakked. <br></br> where we reinvent <br /> 
                            the meaning of automotive maintenance.
                        </p>
                    </div>
                </section>
                <Paper className="loginContainer">
                    <InputLabel htmlFor="email-input" className="text-dk-bg">Email Address</InputLabel>
                    <Input 
                    id="email-input"
                    type="email"
                    autoFocus 
                    autoComplete
                    required value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="errorMsg">{emailError}</p>
                    <InputLabel htmlFor="pwd-input" className="text-dk-bg">Password</InputLabel>
                    <Input id="pwd-input"
                    autoComplete
                    type="password"
                    required value={password}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="errorMsg">{passwordError}</p>
                    <div className="btnContainer">
                        {hasAccount ? (
                            <>
                                <Button variant="contained" onClick={handleLogin}>Sign in</Button>
                                <p>
                                    Don't have an account? 
                                    <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                                </p>
                            </>
                        ) : (
                            <>
                                <Button variant="contained" onClick={handleSignup}>Sign up</Button>
                                <p>
                                    Have an account? 
                                    <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                                </p>
                            </>
                        )}
                    </div>
                </Paper>
            </section>
        </>
    );
};

export default Login;