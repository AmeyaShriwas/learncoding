import React, { useState } from 'react';
import Example from '../../../Components/Navbar/Navbar';
import CourseBar from '../../../Components/Navbar/CourseBar';
import CourseDetails from '../../../Components/CourseContainer/CourseContainer';
import Footer from '../../../Components/Footer/Footer';
import './InitialPage.css';
import LiveChat from '../../../Components/ChatBox/LiveChat';
import chatbox from './../../../../assets/chatbox.png'

const InitialPage = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isLiveChatOpen, setIsLiveChatOpen] = useState(false);

    const openLiveChat = () => {
        setIsLiveChatOpen(true);
    };

    return (
        <>
            <Example />
            <CourseBar selectedCourse={selectedCourse} setSelectedCourse={setSelectedCourse} />
            <CourseDetails selectedCourse={selectedCourse} setSelectedCourse={setSelectedCourse} />
            {isLiveChatOpen && (
                <div className='chatbox' style={{ position: 'fixed', right: 15, bottom: 20 }}>
                    <LiveChat setIsLiveChatOpen={setIsLiveChatOpen}/>
                </div>
            )}
            <img className='w-12 h-12 fixed right-6 bottom-5 whatsappImg' src={chatbox} onClick={openLiveChat} alt="WhatsApp" />
            <Footer />
        </>
    );
}

export default InitialPage;
