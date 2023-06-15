import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { Grid, Segment, List, Button } from 'semantic-ui-react';
import axios from 'axios';
import NavBar from '../components/NavBar2';
import ChatBoxReceiver from '../components/ChatBox';
import ChatContainer from '../components/ChatContainer';

function Chat() {
    return (
        <div>
            <h1>Chat</h1>
            <div style={{backgroundColor: "#fff" , maxHeight:"100%" , padding:10}} >
             <ChatContainer/>
            </div>
        </div>
    )
}
export default Chat