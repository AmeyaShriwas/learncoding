import React from 'react';
import Example from '../Navbar/Navbar';
import blogss from './../../../assets/blog.png';
import './ALLBlogs.css';
import { Select } from '@headlessui/react';
import SelectCourse from '../SelectComponent/SelectCourse';
import { FaHome, FaBloggerB, FaFileAlt, FaQuestionCircle, FaArrowRight, FaEdit } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import blogs from './../../ApiData/BlogData/htmlBlogs.json'

const AllBlogs = () => {

    const [dataFromChild, setDataFromChild] = useState('');

    const blogsCategory = [
        { name: 'HTML', href: '#', current: true },
        { name: 'CSS', href: '#', current: false },
        { name: 'JAVASCRIPT', href: '#', current: false },
        { name: 'REACT JS', href: '#', current: false },
        { name: 'NEXT JS', href: '#', current: false },
        { name: 'REACT NATIVE', href: '#', current: false },
        { name: 'ANGULAR JS', href: '#', current: false },
        { name: 'VUE', href: '#', current: false },
        { name: 'NODE JS', href: '#', current: false },
        { name: 'EXPRESS JS', href: '#', current: false },
        { name: 'MONGODB', href: '#', current: false },
        { name: 'MYSQL', href: '#', current: false },
        { name: 'BOOTSTRAP', href: '#', current: false },
        { name: 'MATERIAL UI', href: '#', current: false },
        { name: 'TAILWIND CSS', href: '#', current: false },
    ];

   

    const handleDataFromChild = (data) => {
        setDataFromChild(data);
    };

    return (
        <div>
            <Example />
            <div className='w-full flex'>
            <div className="top-14 h-full w-1/6 sidebarDashboard bg-white overflow-y-auto fixed left-6 pt-2" style={{ height: '90vh' }}>
                    <h3 className="text-black p-5 text-2xl font-bold">Dashboard</h3>
                    <ul>
                        <Link to="/dashboard">
                            <div className="flex items-center justify-between mr-4">
                                <li className="text-black p-5 flex items-center space-x-2">
                                    <FaHome />
                                    <span className="ml-2">Home</span>
                                </li>
                                <li className="text-white">
                                    <FaArrowRight />
                                </li>
                            </div>
                        </Link>
                        <Link to="/dashboard/allBlogs">
                            <div className="flex items-center justify-between mr-4">
                                <li className="text-black p-5 flex items-center space-x-2">
                                    <FaBloggerB />
                                    <span className="ml-2">Blogs</span>
                                </li>
                                <li className="text-white ml-4">
                                    <FaArrowRight />
                                </li>
                            </div>
                        </Link>
                        <div className="flex items-center justify-between mr-4">
                            <li className="text-black p-5 flex items-center space-x-2">
                                <FaFileAlt />
                                <span className="ml-2">Content</span>
                            </li>
                            <li className="text-white ml-4">
                                <FaArrowRight />
                            </li>
                        </div>
                        <div className="flex items-center justify-between mr-4">
                            <li className="text-black p-5 flex items-center space-x-2">
                                <FaFileAlt />
                                <span className="ml-2"><Link to='/dashboard/allUser'>Users</Link></span>
                            </li>
                            <li className="text-white ml-4">
                                <FaArrowRight />
                            </li>
                        </div>
                        <div className="flex items-center justify-between mr-4">
                            <li className="text-black p-5 flex items-center space-x-2">
                                <FaQuestionCircle />
                                <span className="ml-2">Questions</span>
                            </li>
                            <li className="text-white ml-4">
                                <FaArrowRight />
                            </li>
                        </div>
                    </ul>
                </div>
            <div className="flex flex-col w-5/6 px-4 mainBlogsContainer fixed right-0">
                <div className="relative overflow-x-auto  sm:rounded-lg">
                    <div className='w-full flex justify-between items-center'>
                        <caption className=" p-5 text-2xl font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                            Blogs

                        </caption>
                        <div className='selectCourse'>
                        <SelectCourse handleDataFromChild={handleDataFromChild} />
                        </div>

                    </div>
                    <table className="table-fixed w-full text-sm text-left text-gray-500 dark:text-gray-400">

                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="w-1/5 px-4 py-2 imageHeading" >Image</th>
                                <th scope="col" className="w-2/5 px-4 py-2">Title</th>
                                <th scope="col" className="w-1/5 px-4 py-2">Category</th>
                                <th scope="col" className="w-1/5 px-4 py-2">Edit</th>
                                <th scope="col" className="w-1/5 px-4 py-2 imageHeading">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs && blogs.map(blog => (
                              <tr key={blog.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-4 py-4 imageHeading">
                                        <img src={blogss} alt={blog.Heading} className="w-16 h-16 md:w-20 md:h-20 object-cover" />
                                    </td>
                                    <th scope="row" className="px-4 py-4 font-medium text-gray-900 dark:text-white overflow-hidden text-ellipsis">
                                    <Link to={`/blog/${blog.Heading}`}> {blog.Heading}</Link> 
                                    </th>
                                    <td className="px-4 py-4">{blog.Category}</td>
                                    <td className="px-4 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><Link to={`/dashboard/editblogs/${blog.Heading}`}><FaEdit /></Link></a>
                                    </td>
                                    <td className="px-4 py-4 imageHeading">Delete</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AllBlogs;
