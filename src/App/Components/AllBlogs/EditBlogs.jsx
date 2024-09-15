import React, { useEffect, useState, useRef } from 'react'
import Example from '../Navbar/Navbar'
import { useParams } from 'react-router-dom';
import blogs from './../../ApiData/BlogData/htmlBlogs.json'
import { FaHome, FaBloggerB, FaFileAlt, FaQuestionCircle, FaArrowRight, FaEdit } from 'react-icons/fa';
import { Textarea } from '@headlessui/react';
import './EditBlogs.css'



const EditBlog = () => {
    const { Heading } = useParams();

    console.log(Heading)
    const [textareaHeight, setTextareaHeight] = useState(0);


    const findCourse = blogs.find(blog => blog.Heading === Heading);
    console.log(findCourse)
    const [headingValue, setHeadingValue] = useState(findCourse.Heading)
    const [titles, setTitles] = useState(findCourse.Title); // Remove square brackets
    const [description, setDescriptions] = useState(findCourse.Description); // Remove square brackets

    const object = {
        "title": titles,
        "desc": description
    }

    console.log(object)

    const handleTitleChange = (index, newValue) => {
        const newTitles = [...titles]; // Assuming title is an array
        if (Array.isArray(newTitles)) {
            newTitles[index] = newValue;
            setTitles(newTitles);
        }
    };

    const handleDescriptionChange = (index, newValue) => {
        const newDescriptions = [...description];
        newDescriptions[index] = newValue;
        setDescriptions(newDescriptions);
    };

    const textareaRef = useRef(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'; // Reset the height
            textareaRef.current.style.height = (textareaRef.current.scrollHeight + 2) + 'px'; // Set the height to match the scroll height
        }
    }, [description]); // Run this effect whenever the 'description' state changes



    return (
        <div>
            <Example />
            <div className='flex w-full' style={{ backgroundColor: '#E6E6E6' }}>
                <div className='w-4/5 leftPostContainer'>
                    <ol class="flex space-x-2 p-5 pl-6">
                        <li class="text-gray-600 font-bold breadcrums dashboardBreadcrum border-b border-black">DASHBOARD</li>
                        <li className='breadcrumSpace'>/</li>
                        <li class="text-gray-600 font-bold breadcrums border-b border-black">BLOG</li>
                        <li className='breadcrumSpace'>/</li>
                        <li class="text-gray-600 font-bold breadcrums border-b border-black">{Heading.toUpperCase()}</li>
                    </ol>
                    <h3 className="text-xl font-bold mb-4 m-4 flex pl-1 items-center justify-between postText">Update Blog</h3>
                    <div className='m-5 border-2 border-black rounded bg-white'>

                        <div className="border p-4 rounded-md ">
                            <Textarea style={{ backgroundColor: 'white' }} className="font-bold text-xl p-2 w-full h-16 whitespace-pre-line p-2 headingText" value={headingValue} onChange={(e) => setHeadingValue(e.target.value)} />

                            {findCourse.Title.map((title, index) => {
                                return (
                                    <div key={index} className='flex- flex-col h-full'>
                                        <Textarea
                                            className='w-full p-2 text-l font-semibold'
                                            value={titles[index]}
                                            onChange={(e) => handleTitleChange(index, e.target.value)}
                                        />

<Textarea
            className='w-full p-2 text-l p-3'
            value={description[index]}
            onChange={handleDescriptionChange}
            style={{ height: 'auto', minHeight: '150px' }} // Set initial height and minimum height
            ref={textareaRef} // Assign the ref to the Textarea element
        />





                                    </div>
                                )
                            })}

                        </div>
                        <div className='flex items-center justify-around responsiveRightContainer mb-5'>
                            <p className='bg-teal-600 p-2 text-white rounded'>Update Post</p>
                            <p className='bg-orange-600 text-white rounded p-2'>Add New Post</p>
                        </div>

                        <div className='p-4 border m-2 border-black rounded'>
                            <h3 className='font-bold text-xl'>SEO</h3>
                            <div className=' m-2'>
                                <div className=''>
                                    <p className='font-bold mt-2 mb-2'>Meta Title</p>
                                    <Textarea className='border w-full mt-2 mb-2' value={document.title} />
                                </div>
                                <p style={{ fontSize: 8 }}>CHARACTERS: {document.title.length}</p>
                            </div>
                            <div className='m-3'>
                                <p className='font-bold mt-2 mb-2'>Meta Description</p>
                                <Textarea className='border w-full mt-2 mb-2' value={document.description} />
                                <p style={{ fontSize: 8 }}>CHARACTERS: {document.description}</p>
                            </div>
                            <div className='flex'>
                                <p className='font-bold bg-teal-700 text-white p-2 m-2' >Update</p>
                            </div>
                        </div>
                    </div>





                </div>
                <div className='w-1/5 border-gray  p-10 fixed right-5 rightUpdateContainer mt-24'>
                    <ul className='border p-4 bg-white rounded' style={{ backgroundColor: 'teal' }}>
                        <li className='pt-4 flex items-center text-white '>UPDATE <span className='pl-3'></span><FaEdit /></li>
                        <li className='pt-4 flex items-center text-white '>ADD NEW POST <span className='pl-3'><FaEdit /></span></li>
                        <li className='pt-4 flex items-center text-white '>ADD MORE CONTENT <span className='pl-3'><FaEdit /></span></li>
                        <li className='pt-4 flex items-center text-white '>SEO <span className='pl-3'><FaEdit /></span></li>
                        <li className='pt-4 flex items-center text-white '>MOVE TO TRASH <span className='pl-3'><FaEdit /></span> </li>
                        <li className='pt-4 flex items-center text-white '>HELP <span className='pl-3'><FaEdit /></span> </li>
                        <li className='pt-4 flex items-center text-white '>Status  <span className='pl-3'></span><FaEdit /></li>
                        <li className='pt-4 flex items-center text-white '>VISIBILITY  <span className='pl-3'><FaEdit /></span></li>
                        <li className='pt-4 flex items-center text-white '>SEO <span className='pl-3'><FaEdit /></span></li>
                        <li className='pt-4 flex items-center text-white '>PERMALINK<span className='pl-3'><FaEdit /></span> </li>
                    </ul>
                   
                </div>
            </div>

        </div>
    )
}

export default EditBlog
