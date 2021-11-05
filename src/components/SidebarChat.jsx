import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './SidebarChat.css'

const SidebarChat = ( {addNewChat} ) => {

    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const creatChat = () => {

    }


    return !addNewChat ? (
        <div className="SidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>Last Message....</p>
            </div>
        </div>
    ): (
        <div onClick={creatChat} className="sidbarChat">
            <h2>Add New Chat</h2>
        </div>
    );
}

export default SidebarChat
