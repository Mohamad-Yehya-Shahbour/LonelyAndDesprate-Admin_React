import React from 'react';
import { withRouter } from 'react-router';
import {TextField, Button, Divider} from '@material-ui/core';
import {Link} from 'react-router-dom';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

class Signup extends React.Component{

    render(){
        return (
            <div>
                <div className="icon myMargins-b-20">
                    <div className="icon_class">
                        <PersonAddIcon fontSize="large"/>
                    </div>
                    <div className="text">sign up</div>
                </div>
    
                <div className="row m-2">
                    <TextField  id="name" className="p-2 myMargins-b-10" type="text" variant="outlined" label="Enter  Name" fullWidth/>
                    <TextField id="email" className="myMargins-b-10 p-2 " type="text" variant="outlined" label="Enter Email" fullWidth/>
                    <TextField id="password" className="p-2 myMargins-b-15" type="password" variant="outlined" label="Enter Password" fullWidth/>
                    <Button variant="contained" color="primary" >create account</Button> 
                </div>
                <Divider variant="middle" />
                <p className="text-center" >
                    <Link to ="/" className="text-black-50">
                    already have an account?
                    </Link>
                </p>
            </div>
        )
    }
}

export default withRouter(props => <Signup {...props}/>)