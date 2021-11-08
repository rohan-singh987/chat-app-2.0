import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import './Chat.css';

const Chat = () => {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);


    return (
        <div className="chat">

        <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

            <div className="chat__headerInfo">
                <h3>Room Name - Vit Cse</h3>
                <p>251 members present</p>
            </div>

            <div className="chat__headerRight">
                <IconButton> 
                    <SearchOutlined/>
                </IconButton>
                
                <IconButton>
                    <AttachFile/>
                </IconButton>
                
                <IconButton>
                    <MoreVert/>
                </IconButton>
                    

                
            </div>
        </div>

        <div className="chat__body">
            <p className="chat_message">Hey Guys!!!</p>
            <p className="chat_message">How are you?</p>
        </div>

        <div className="chat__footer">

        </div>

        </div>
    )
}

export default Chat
