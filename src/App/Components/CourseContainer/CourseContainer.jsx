import React, { useEffect, useState } from 'react'
import html from './../../ApiData/Data/html.json'
import css from './../../ApiData/Data/css.json'
import js from './../../ApiData/Data/js.json'
import react from './../../ApiData/Data/react.json'
import next from './../../ApiData/Data/next.json'
import native from './../../ApiData/Data/native.json'
import angular from './../../ApiData/Data/angular.json'
import vue from './../../ApiData/Data/vue.json'
import node from './../../ApiData/Data/node.json'
import express from './../../ApiData/Data/express.json'
import mongodb from './../../ApiData/Data/mongodb.json'
import mysql from './../../ApiData/Data/mysql.json'
import bootstrap from './../../ApiData/Data/bootstrap.json'
import materialUi from './../../ApiData/Data/materialUi.json'
import tailwind from './../../ApiData/Data/tailwind.json'
import './CourseContainer.css'
import { FaHome, FaBloggerB, FaFileAlt, FaQuestionCircle, FaArrowRight, FaEdit } from 'react-icons/fa';
import blogss from './../../../assets/blog.png'
import { Link } from 'react-router-dom'
import blogs from './../../ApiData/BlogData/htmlBlogs.json'



const CourseDetails = ({ selectedCourse, setSelectedCourse }) => {

    console.log(blogs)


    const [data, setData] = useState(html.Topic1);
    const [subData, setSubData] = useState(html.Topic1[0])
    console.log(selectedCourse)

    useEffect(() => {
        if (selectedCourse == 'CSS') {
            setData(css.Topic2)
            setSubData(css.Topic2[0])
        }
        else if (selectedCourse == 'JAVASCRIPT') {
            setData(js.Topic3)
            setSubData(js.Topic3[0])
        }
        else if (selectedCourse == 'REACT JS') {
            setData(react.Topic4)
            setSubData(react.Topic4[0])
        }
        else if (selectedCourse == 'NEXT JS') {
            setData(next.Topic5)
            setSubData(next.Topic5[0])
        }
        else if (selectedCourse == 'REACT NATIVE') {
            setData(native.Topic6)
            setSubData(native.Topic6[0])
        }
        else if (selectedCourse == 'ANGULAR JS') {
            setData(angular.Topic7)
            setSubData(angular.Topic7[0])
        }
        else if (selectedCourse == 'VUE') {
            setData(vue.Topic8)
            setSubData(vue.Topic8[0])
        }
        else if (selectedCourse == 'NODE JS') {
            setData(node.Topic9)
            setSubData(node.Topic9[0])
        }
        else if (selectedCourse == 'EXPRESS JS') {
            setData(express.Topic10)
            setSubData(express.Topic10[0])
        }
        else if (selectedCourse == 'MONGODB') {
            setData(mongodb.Topic11)
            setSubData(mongodb.Topic11[0])
        }
        else if (selectedCourse == 'MYSQL') {
            setData(mysql.Topic12)
            setSubData(mysql.Topic12[0])
        }
        else if (selectedCourse == 'BOOTSTRAP') {
            setData(bootstrap.Topic13)
            setSubData(bootstrap.Topic13[0])
        }
        else if (selectedCourse == 'MATERIAL UI') {
            setData(materialUi.Topic14)
            setSubData(materialUi.Topic14[0])
        }
        else if (selectedCourse == 'TAILWIND CSS') {
            setData(tailwind.Topic15)
            setSubData(tailwind.Topic15[0])
        }
        else {
            setData(html.Topic1)
            setSubData(html.Topic1[0])
        }
    }, [selectedCourse])






    const handleCourseClick = (course) => {
        console.log(course)
        setSubData(course);
    };

    return (
        <div className="flex flex-wrap flex-start" style={{height: '100%'}}>
            <div className=" md:w-1/5 sticky top-50 h-full overflow-y-scroll" style={{ scrollbarWidth: 'thin', backgroundColor: '#F1F1F1', height: '100vh' }}>

                <ul>
                    {data && data.map((course, index) => (

                        <li
                            key={course.id}
                            className={`p-4 cursor-pointer flex items-center ${subData && subData.id === course.id ? 'bg-teal-700 font-semibold text-white   ' : ''}`}
                            onClick={() => handleCourseClick(course)}


                        >
                            <FaArrowRight />{course.Heading}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full md:w-3/5 bg-white-200 h-screen overflow-y-scroll p-4 mediumContainer" style={{ scrollbarWidth: 'thin' }}>
                <div class="h-1/2">



                    {subData && (
                        <div className=''>
                            <h2 className="font-bold text-2xl text-gray-800 mb-4">{subData.Heading}</h2>
                            {subData.Title.map((title, index) => (
                                <div className="mb-8" key={index}>
                                    <p className="text-2xl text-gray-900 mb-2">{title}</p>
                                    <p className="text-gray-600 whitespace-pre-line">{subData.Description[index]}</p>
                                </div>
                            ))}
                        </div>
                    )}



                </div>

            </div>
            <div className='md:w-1/5 max-w-screen-md hidden sm:block LastContainer' style={{ backgroundColor: 'white' }}>
                <div className=' h-full overflow-y-scroll hidden sm:block p-4  '>
                    <h3 className='font-bold text-2xl mb-2 hidden sm:block'>Latest Blogs</h3>
                    <div class='mt-4'>
                        {blogs && blogs.map((blog, index) => (
                            <Link to={`/blog/${blog.Heading}`}><div class='flex items-center mb-4 ' key={index}>
                                <img class='w-12 h-12 rounded-full object-cover mr-4' src={blogss} alt={blog.Heading} />
                                <div>
                                    <p class='text-s font-semibold blogText'>{blog.Heading}</p>
                                </div>
                            </div></Link>
                        ))}
                    </div>
                </div>
                {/* <div className=' overflow-y-scroll hidden sm:block p-4'>
                    <h3 className='font-bold text-2xl mb-2 hidden sm:block'>Suggested Questions</h3>
                    <ul>
                        <li className='mb-3 p-1 rounded hidden sm:block'>Q.How AI is working and what is it?</li>
                        <li className='mb-3 p-1 rounded hidden sm:block'>Q.How AI is working?</li>
                        <li className='mb-3 p-1 rounded hidden sm:block'>Q.How AI is working?</li>
                        <li className='p-1 rounded hidden sm:block'>Q.How AI is working?</li>
                    </ul>


                </div> */}
            </div>

        </div>
    );
};

export default CourseDetails;
