import React from 'react';
import { withRouter } from 'react-router';
import {TextField, Button, Divider} from '@material-ui/core';
import {Link} from 'react-router-dom';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Container, Row, Col } from 'react-grid-system';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';



function Home () {

    const history = useHistory();

    const approvePic = async (e) => {
        const myArr = e.target.id.split(" ");
        try {
            const response = await fetch(
              'http://127.0.0.1:8000/api/auth/approve-pic',
              {
               
                method: 'Post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                    id : myArr[1]
                  })
              }
            );
            if(response.status == 200){
                document.getElementById('approvePic '+myArr[1]).disabled = true;
                document.getElementById('declinePic '+myArr[1]).disabled = true;
            }else{
                console.log("something went wrong");
            }
          } catch (error) {
            console.error(error);
          }
    }
    const declinePic = async (e) => {
        const myArr = e.target.id.split(" ");
        try {
            const response = await fetch(
              'http://127.0.0.1:8000/api/auth/decline-pic',
              {
               
                method: 'Post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    id : myArr[1]
                  })
              }
            );
            if(response.status == 200){
                document.getElementById('approvePic '+myArr[1]).disabled = true;
                document.getElementById('declinePic '+myArr[1]).disabled = true;
            }else{
                console.log("something went wrong");
            }
          } catch (error) {
            console.error(error);
          }
    }
    const approveMsg = async (e) => {
        const myArr = e.target.id.split(" ");
        try {
            const response = await fetch(
              'http://127.0.0.1:8000/api/auth/approve-msg',
              {
               
                method: 'Post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                    id : myArr[1]
                  })
              }
            );
            if(response.status == 200){
                document.getElementById('approveMsg '+myArr[1]).disabled = true;
                document.getElementById('declineMsg '+myArr[1]).disabled = true;
            }else{
                console.log("something went wrong");
            }
          } catch (error) {
            console.error(error);
          }
    }
    const declineMsg = async (e) => {
        const myArr = e.target.id.split(" ");
        try {
            const response = await fetch(
              'http://127.0.0.1:8000/api/auth/decline-msg',
              {
               
                method: 'Post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                    id : myArr[1]
                  })
              }
            );
            if(response.status == 200){
                document.getElementById('approveMsg '+myArr[1]).disabled = true;
                document.getElementById('declineMsg '+myArr[1]).disabled = true;
            }else{
                console.log("something went wrong");
            }
          } catch (error) {
            console.error(error);
          }
    }
    const getPics = async ()=>{
        try {
            const response = await fetch(
              'http://127.0.0.1:8000/api/auth/get-all-pics',
              {
                method: 'get'
              }
            );
            const json = await response.json();
            if(response.status == 200){
                const title = [];
                for(var i=0; i< json.length ; i++){
                    var row = <Row className="mb-4">
                                <Col sm={8}>
                                    {json[i].picURL}
                                </Col>
                                <Col sm={2}>
                                    <button onClick={(e)=>{approvePic(e)}} id={'approvePic '+json[i].id} className="btn btn-outline-success">Approve</button>
                                </Col>
                                <Col sm={2}>
                                    <button onClick={(e)=>{declinePic(e)}} id={'declinePic '+json[i].id} className="btn btn-outline-danger">Decline</button>
                                </Col>
                            </Row>;
                    title.push(row);
                }
                ReactDOM.render(
                    title,
                    document.getElementById('global')
                  );
                  ReactDOM.render(
                    "Pictures",
                    document.getElementById('title')
                  );
            }else{
                console.log("something went wrong");
            }
          } catch (error) {
            console.error(error);
          }
    }
    const getMsgs = async ()=>{
        try {
            const response = await fetch(
              'http://127.0.0.1:8000/api/auth/get-all-msgs',
              {
                method: 'get'
              }
            );
            const json = await response.json();
            if(response.status == 200){
                const title = [];
                for(var i=0; i< json.length ; i++){
                    var row = <Row className="mb-4">
                                <Col sm={8}>
                                    {json[i].body}
                                </Col>
                                <Col sm={2}>
                                    <button onClick={(e)=>{approveMsg(e)}} id={'approveMsg '+json[i].id} className="btn btn-outline-success">Approve</button>
                                </Col>
                                <Col sm={2}>
                                    <button onClick={(e)=>{declineMsg(e)}} id={'declineMsg '+json[i].id} className="btn btn-outline-danger">Decline</button>
                                </Col>
                            </Row>;
                    title.push(row);
                }
                ReactDOM.render(
                    title,
                    document.getElementById('global')
                  );
                  ReactDOM.render(
                    "Messages",
                    document.getElementById('title')
                  );
  
            }else{
                console.log("something went wrong");
            }
          } catch (error) {
            console.error(error);
          }
    }

    return (
        
        <div>
            <div className="d-flex justify-content-end">
                <button  onClick={()=>{history.push("/")}} className="btn btn-secondary ">LogOut</button>
            </div>
            <div>
            <button onClick={()=>{getPics()}} className="btn btn-primary mx-3">Pending Pictures</button>
            <button onClick={()=>{getMsgs()}} className="btn btn-info ">Pending Messages</button>
            </div>
            <h1 id="title"></h1>
            <Container id="global"className="container">
                
            </Container>

        </div>
    )
}

export default withRouter(props => <Home {...props}/>)