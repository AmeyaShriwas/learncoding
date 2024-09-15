import React from 'react';
import Example from '../../../Components/Navbar/Navbar';
import './AllUser.css'
import { FaHome, FaBloggerB, FaFileAlt, FaQuestionCircle, FaArrowRight, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserTable = () => {
    const users = [
        {
            name: "John Doe",
            email: "john.doe@example.com",
            role: "Admin",
        },
        {
            name: "Jane Smith",
            email: "jane.smith@example.com",
            role: "Editor",
        },
        {
            name: "Mike Johnson",
            email: "mike.johnson@example.com",
            role: "Viewer",
        },
        {
            name: "Emily Davis",
            email: "emily.davis@example.com",
            role: "Editor",
        },
        {
            name: "Sarah Wilson",
            email: "sarah.wilson@example.com",
            role: "Viewer",
        },
        {
            name: "Emily Davis",
            email: "emily.davis@example.com",
            role: "Editor",
        },
        {
            name: "Sarah Wilson",
            email: "sarah.wilson@example.com",
            role: "Viewer",
        },
        {
            name: "Emily Davis",
            email: "emily.davis@example.com",
            role: "Editor",
        },
        {
            name: "Sarah Wilson",
            email: "sarah.wilson@example.com",
            role: "Viewer",
        },
        {
            name: "Emily Davis",
            email: "emily.davis@example.com",
            role: "Editor",
        },
        {
            name: "Sarah Wilson",
            email: "sarah.wilson@example.com",
            role: "Viewer",
        },
        {
            name: "Emily Davis",
            email: "emily.davis@example.com",
            role: "Editor",
        },
        {
            name: "Sarah Wilson",
            email: "sarah.wilson@example.com",
            role: "Viewer",
        },
    ];

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg" >
            <Example />
            <div className='flex'>
                <div className="top-14 h-full w-1/6 sidebarDashboard bg-white overflow-y-auto fixed left-6 pt-2 " style={{ height: '90vh' }}>
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
                <div className='w-5/6 p-5 mainUserContainer fixed right-0 '>
                    <h3 className='text-2xl font-bold mb-4'>All Users</h3>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 m-1" >
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-3 py-3">Name</th>
                                <th scope="col" className="px-3 py-3">Email</th>
                                <th scope="col" className="px-3 py-3">Role</th>
                                <th scope="col" className="px-3 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index} className={`odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700`} >
                                    <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{user.name}</th>
                                    <td className="px-3 py-4">{user.email}</td>
                                    <td className="px-3 py-4">{user.role}</td>
                                    <td className="px-3 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ml-4">Delete</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserTable;
