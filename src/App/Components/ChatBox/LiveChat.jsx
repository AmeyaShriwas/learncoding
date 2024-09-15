import React, { useEffect, useState } from 'react';
import './LiveChat.css';

const LiveChat = ({ setIsLiveChatOpen }) => {
    const [msg, setMsg] = useState('');
    const [allMsg, setAllMsg] = useState(['How can i help you']);
    const [dateTime, setDateTime] = useState('')

    const closeBox = () => {
        setIsLiveChatOpen(false);
    };

    useEffect(()=> {
        const date = new Date()
        console.log(date)
    }, [msg, allMsg])

    const sendMessage = () => {
        if (msg.trim()) {
            setAllMsg([...allMsg, msg]);
            setMsg(''); // Clear input field after sending message
            setDateTime(date)
        }
    };
    console.log(dateTime)

    const handleMessageChange = (e) => {
        setMsg(e.target.value);
    };

   

    return (
        <div className='bg-teal-700 rounded pt-10 liveChat' style={{ width: '300px', height: '500px', position: 'relative', zIndex: 99999999 }}>
            <p className='text-white cursor-pointer font-bold' style={{ position: 'absolute', top: 10, right: 10 }} onClick={closeBox}>Close</p>
            <div className='bg-white flex flex-col justify-between liveInnerChat' style={{ width: '280px', height: '450px', margin: 'auto', padding: '20px', borderRadius: '10px' }}>
                <div className='text-right flex flex-col gap-3 overflow-y-auto' style={{ height: '85%' }}>
                    {allMsg.map((msg, index) => (
                        <div className='flex items-center justify-end' key={index}>
                            <img className='w-8 h-8 rounded-full mr-2' src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt='avatar' />
                            <span className='text-black font-semibold px-3 py-1 rounded bg-gray-200'>{msg}</span>
                        </div>
                        
                    ))}
                </div>
                <div className='flex items-center mt-2'>
                    <input type="text" className="border border-gray-300 rounded-l-lg px-3 py-2 w-full outline-none" value={msg} placeholder="Type your message" onChange={handleMessageChange} />
                    <button className="bg-teal-500 text-white px-4 py-2 rounded-r-lg ml-2" onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default LiveChat;
