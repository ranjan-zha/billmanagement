// import React, Component from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";



function Login() {

    let history = useHistory();

    const loginasStaff = ()=>{
        localStorage.setItem("Role", "Staff");        
        history.push("/manage-charges");
    }
    const loginasAdmin = ()=>{
        localStorage.setItem("Role", "Admin");
        history.push("/manage-charges");
    }

  return (
    <Container maxWidth="sm" className="login-container">
        <div className="logIn-heading">Login to Continue</div>
        <div>
        <Button
        variant="contained"
        color="primary"
        size="large"
        className="fb-btn"
        startIcon={<i class="fa fa-facebook"></i>}
        onClick={loginasStaff.bind(this)}
        >
        Continue with Facebook
        </Button>
        </div>
        <div>
        <Button
        variant="contained"
        color="primary"
        size="large"
        className="ggl-btn"
        startIcon={<i class="fa fa-google"></i>}
        onClick={loginasAdmin.bind(this)}
        >
        Continue with Google
        </Button>
        </div>
    </Container>
  );
}

export default Login;