import React from 'react'
import { baseURL } from '../../Variables/Variables';
import axios from 'axios';

const HandleCreateConversation = async() => {
    
        try {
            const response = await axios.post(`${baseURL}/api/chat/conversation/create`,{
                participant : '66453c26dba323fb3c2bc745'
            } , {
                withCredentials: true,
            })
            console.log(response);
        } catch (error) {
            console.error("Error:", error);
        }
}

export default function CreateConversation() {
  return (
    <button onClick={HandleCreateConversation}>
        Create conversation
    </button>
  )
}
