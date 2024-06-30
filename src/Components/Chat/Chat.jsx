import React,{useEffect,useRef,useState} from 'react'
import { io } from "socket.io-client";
import axios from 'axios' 
import { formatDate } from './FormatDate';

const baseUrl = 'http://localhost:4000' ;
const socket = io(baseUrl) ;


const profilePicture = localStorage.getItem('photo')
const firstName = localStorage.getItem('firstName')
const lastName = localStorage.getItem('lastName')
const role = localStorage.getItem('role') === 'user' ? 'client' : 'freelancer'


export const Chat = () =>  {

    const [user,setUser] = useState(localStorage.getItem('_id'));
    const [currentChat, setCurrentChat] = useState('');
    const [currentChatDetails, setCurrentChatDetails] = useState('');
    const [allChats,setAllChats] = useState([])
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const scrollRef = useRef();

    useEffect(()=>{
        const getSingleConversation = async () => {
            try {
                const res = await axios.get(baseUrl + `/api/chat/conversation/${currentChat}`,{
                    withCredentials:true
                }).then(res=>{
                    setCurrentChatDetails(res.data);
                })
                
            } catch (error) {
                console.log(error);
            }
        };

        getSingleConversation();
    },[currentChat])


    useEffect(() => {
        socket.emit('addUser',user)
        socket.on('getUsers',(users)=>{})   
    }, [user]);

    useEffect(() => {
        socket.on('getMessage',async (data) => {

            if(data && (  currentChatDetails.creator._id === data.sender ||  currentChatDetails.participant._id === data.sender )){
                setMessages(prevMessages => [...prevMessages, {
                    sender : data.sender,
                    content : data.content,
                    createdAt : Date.now(),
                    photo:data?.photo
                }]);
            }
        });
    }, [currentChatDetails]);

    const getChat = async () => {
        try {
            const res = await axios.get(baseUrl + `/api/chat/message/get_all/${currentChat}`,{
                withCredentials:true
            });
            setMessages(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getChat();
    }, [currentChat]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            content: newMessage,
            conversation: currentChat
        };

        socket.emit("sendMessage",{
            senderId :user ,
            recieverId: currentChatDetails?.creator?._id === user ? currentChatDetails?.participant?._id : currentChatDetails?.creator?._id ,
            text:newMessage,
            photo: currentChatDetails?.creator?._id === user ? currentChatDetails?.creator?.photo : currentChatDetails?.participant?.photo
        })

        try {
            const res = await axios.post(baseUrl + `/api/chat/message/create`, { ...message }, { withCredentials: true })
                .then((res)=>{
                    setNewMessage('');
                    getChat();
                });
        } catch (error) {
            console.log(error);
        }
    };


       


    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);


    useEffect(() => {
        const getAllChats = async () => {
            try {
                const res = await axios.get(baseUrl + `/api/chat/conversation/all`,{
                    withCredentials:true
                }) .then((res)=>{
                    setAllChats(res.data);
                })
            } catch (error) {
                console.log(error);
            }
        };
        getAllChats();

    }, [currentChat]);

    
    return (
        <>
            <div className='flex lg:w-2/3 lg:mx-auto  gap-10 '>

            {/* Conversations */}   
                
                <div className="flex ml-6 mt-10 flex-col sm:items-center gap-10 py-3 border-b-2 border-gray-200">
                    {allChats && allChats.map((item,key)=>(item.creator._id === user ?
                        <div onClick={()=>{setCurrentChat(item._id)}} key={key} className={` ${currentChat === item._id ?  'bg-slate-100' : ''} rounded-xl p-2 relative cursor-pointer flex items-center space-x-4 `}>
                            <div className="relative">
                                <span className="absolute sm:hidden text-green-500 right-0 bottom-0">
                                    <svg width={8} height={8}>
                                        <circle cx={4} cy={4} r={4} fill="currentColor" />
                                    </svg>
                                </span>
                                <span className="absolute hidden sm:block text-green-500 right-0 bottom-0">
                                    <svg width={16} height={16}>
                                        <circle cx={8} cy={8} r={8} fill="currentColor" />
                                    </svg>
                                </span>
                                <img
                                    src={item?.participant?.photo ? item.participant.photo : 'https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144'}
                                    alt=""
                                    className="w-7 sm:w-10 h-7 sm:h-10 rounded-full"
                                />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <div className="text-lg mt-1 flex items-center">
                                    <span className="text-gray-700 mr-3">{item?.participant?.firstName + "  " + item?.participant?.lastName}</span>
                                </div>
                                <span className="text-sm text-gray-600">{item?.participant?.role === 'admin' ? 'Admin' : (item?.participant?.role === 'user' ? 'Client' : 'Freelancer')}</span>
                            </div>
                        </div> :
                        <div onClick={()=>{setCurrentChat(item._id)}} key={key} className={` ${currentChat === item._id ? 'bg-slate-100' : ''} rounded-xl p-2 relative cursor-pointer flex items-center space-x-4`}>
                            <div className="relative">
                                <span className="absolute sm:hidden text-green-500 right-0 bottom-0">
                                    <svg width={8} height={8}>
                                        <circle cx={4} cy={4} r={4} fill="currentColor" />
                                    </svg>
                                </span>
                                <span className="absolute hidden sm:block text-green-500 right-0 bottom-0">
                                    <svg width={16} height={16}>
                                        <circle cx={8} cy={8} r={8} fill="currentColor" />
                                    </svg>
                                </span>
                                <img
                                    src={item?.creator?.photo ? item.creator.photo : 'https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144'}
                                    alt=""
                                    className="w-7 sm:w-10 h-7 sm:h-10 rounded-full"
                                />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <div className="text-lg mt-1 flex items-center">
                                    <span className="text-gray-700 mr-3">{item?.creator?.firstName + "  " + item?.creator?.lastName}</span>
                                </div>
                                <span className="text-sm text-gray-600">{item?.creator?.role === 'admin' ? 'Admin' : (item?.creator?.role === 'user' ? 'Client' : 'Freelancer')}</span>
                            </div>
                        </div> 
                        
                        
                    ))}
                        
                        
                    
                    </div>


                <div className="flex-1  p:2 sm:p-6 justify-between flex flex-col h-screen">
                    {/* Header of the chat */}
                    <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
                        <div className="relative flex items-center space-x-4">
                            <div className="relative">
                                <span className="absolute text-green-500 right-0 bottom-0">
                                    <svg width={20} height={20}>
                                        <circle cx={8} cy={8} r={8} fill="currentColor" />
                                    </svg>
                                </span>
                                <img
                                    src={profilePicture}
                                    alt=""
                                    className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
                                />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <div className="text-lg mt-1 flex items-center">
                                    <span className="text-gray-700 mr-3">{firstName + "  " + lastName}</span>
                                </div>
                                <span className="text-sm text-gray-600">{role}</span>
                            </div>
                        </div>
                    
                    </div>

                    {/* Body of the chat */}
                    <div
                        id="messages"
                        className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
                    >   
                        {messages && messages.map((item, key) => (
                            <div ref={scrollRef} key={key}>
                                
                                {  item.sender._id === user ? (
                                    <div className="chat-message">
                                        <div className="flex items-center justify-end">
                                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                                <div className='flex flex-col'>
                                                    <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white">
                                                        {item?.content}
                                                    </span>
                                                    <span className='flex text-gray-600 justify-center'>
                                                        {formatDate(item)}
                                                    </span>
                                                </div>
                                            </div>
                                            <img
                                                src={profilePicture}
                                                alt="My profile"
                                                className="w-6 h-6 rounded-full order-2"
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="chat-message">
                                        <div className="flex items-center">
                                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                                <div>
                                                    <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                                                        {item?.content}
                                                    </span>
                                                    <span className='flex text-gray-600 justify-center'>
                                                        {formatDate(item)}
                                                    </span>
                                                </div>
                                            </div>
                                            <img
                                                src={item.sender.photo ? item.sender.photo : item?.photo }
                                                alt="My profile"
                                                className="w-6 h-6 rounded-full order-1"
                                            />
                                        </div>
                                    </div>
                                )
                                
                                }


                            </div>
                        ))}
                        
                    </div>
                    {/* Bottom of the chat */}
                    <div className="border-t-2 border-gray-200 px-1 pt-4 mb-2 sm:mb-0">
                        <div className="relative flex">
                            <input
                                type="text"
                                placeholder="Write your message!"
                                className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-6 bg-gray-200 rounded-md py-[6px] sm:py-3"
                                onChange={(e)=>{setNewMessage(e.target.value)}}
                                value={newMessage}
                            />
                            <div className="absolute right-0 items-center inset-y-0 flex">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center rounded-lg px-4 py-2 sm:py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
                                    onClick={handleSubmit}
                                >
                                    <span className=" text-[12px] sm:text-[16px] font-bold" >Send</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-4 w-4 hidden sm:block sm:h-6 sm:w-6 ml-2 transform rotate-90"
                                    >
                                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
