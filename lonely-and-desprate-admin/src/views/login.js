import React from 'react';
import { withRouter } from 'react-router';
import {TextField, Button, Divider} from '@material-ui/core';
import {Link} from 'react-router-dom';
import api from '../api/api';
import PersonIcon from '@material-ui/icons/Person';
import { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';



function  Login () {
    const history = useHistory();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch(
              'http://127.0.0.1:8000/api/auth/login',
              {
                method: 'Post',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
              
                body: JSON.stringify({
                  email: email,
                  password: password
                })
              
              }
            );
            const json = await response.json();
            if(response.status == 200){
                if(json.user.userType == 1){
                    history.push("/home");
                }else{
                    console.log("you are not an admin");
                }
              
            }else{
                console.log("wrong email or password");
            }
          } catch (error) {
            console.error(error);
          }
    }
  
    const [email, setEmail] = useState(''); // '' is the initial state value
    const [password, setPassword] = useState('');

    return (
        <div>
                <div className="icon myMargins-b-20">
                <div className="icon_class">
                    <PersonIcon fontSize="large"/>
                </div>
                <div className="text">login</div>
                <ul>
                
                </ul>
            </div>

            <div className="row m-2">
                <TextField value={email} onInput={e=>setEmail(e.target.value)} id="email" className="p-2 myMargins-b-10" type="text" variant="outlined" label="Enter Email" fullWidth/>
                <TextField  value={password} onInput={e=>setPassword(e.target.value)} id="password" className="p-2 myMargins-b-20" type="password" variant="outlined" label="Enter Password" fullWidth/>
                
                
                <Button onClick={(e)=>{handleSubmit(e)}} variant="contained" color="primary" >login</Button>
            </div>
            <Divider variant="middle" />
            <p className="text-center">
                <Link to ="/signup" className="text-black-50">
                    Don't have an account?
                </Link>
            </p>
        </div>
    )
   
    
}

export default withRouter(props => <Login {...props}/>)