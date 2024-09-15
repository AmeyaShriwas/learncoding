import React, { useEffect, useState } from 'react';
import { FaHome, FaBloggerB, FaFileAlt, FaQuestionCircle, FaArrowRight, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SelectCourse from '../SelectComponent/SelectCourse';
import html from './../../ApiData/Data/html.json';
import css from './../../ApiData/Data/css.json';
import js from './../../ApiData/Data/js.json';
import react from './../../ApiData/Data/react.json';
import next from './../../ApiData/Data/next.json';
import native from './../../ApiData/Data/native.json';
import angular from './../../ApiData/Data/angular.json';
import vue from './../../ApiData/Data/vue.json';
import node from './../../ApiData/Data/node.json';
import express from './../../ApiData/Data/express.json';
import mongodb from './../../ApiData/Data/mongodb.json';
import mysql from './../../ApiData/Data/mysql.json';
import bootstrap from './../../ApiData/Data/bootstrap.json';
import materialUi from './../../ApiData/Data/materialUi.json';
import tailwind from './../../ApiData/Data/tailwind.json';
import blogss from './../../../assets/blog.png';
import './DashboardComponent.css';
import blogs from './../../ApiData/BlogData/htmlBlogs.json'



const DashboardComponent = () => {
  const [dataFromChild, setDataFromChild] = useState('');
  const [data, setData] = useState(html);

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  useEffect(() => {
    switch (dataFromChild.name) {
      case 'HTML':
        setData(html.Topic1);
        break;
      case 'CSS':
        setData(css.Topic2);
        break;
      case 'JAVASCRIPT':
        setData(js.Topic3);
        break;
      case 'REACT JS':
        setData(react.Topic4);
        break;
      case 'NEXT JS':
        setData(next.Topic5);
        break;
      case 'REACT NATIVE':
        setData(native.Topic6);
        break;
      case 'ANGULAR JS':
        setData(angular.Topic7);
        break;
      case 'VUE':
        setData(vue.Topic8);
        break;
      case 'NODE JS':
        setData(node.Topic9);
        break;
      case 'EXPRESS JS':
        setData(express.Topic10);
        break;
      case 'MONGODB':
        setData(mongodb.Topic11);
        break;
      case 'MYSQL':
        setData(mysql.Topic12);
        break;
      case 'BOOTSTRAP':
        setData(bootstrap.Topic13);
        break;
      case 'TAILWIND CSS':
        setData(tailwind.Topic15);
        break;
      case 'MATERIAL UI':
        setData(materialUi.Topic14);
        break;
      default:
        setData(html);
    }
  }, [dataFromChild]);

  return (
    <div className="flex flex-wrap w-full">
      <div className="top-14 h-full w-1/6 sidebarDashboard bg-white overflow-y-auto fixed left-6 pt-2" style={{ height: '100vh' }}>
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
      <div className="w-5/6 h-full dashboardContainerMain bg-gray-100 fixed right-0 overflow-scroll" style={{ height: '100vh' }}>
        <h3 className="p-4 text-bold text-2xl dashboardResponsive">Dashboard</h3>
        <div className="flex justify-around p-4 dashboxes">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 m-2 p-5 rounded-lg text-black font-bold text-xl flex flex-col justify-around items-center border border-none shadow-lg singleBox" style={{ height: 120, backgroundColor: 'white', minWidth: '220px', borderRadius: 20 }}>
            Total Posts
            <span className="text-3xl boxNumber">15</span>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 m-2 p-5 rounded-lg text-black font-bold text-xl flex flex-col justify-around items-center border border-none shadow-lg singleBox" style={{ height: 120, backgroundColor: 'white', minWidth: '220px', borderRadius: 20 }}>
            Total Blogs
            <span className="text-3xl boxNumber">15</span>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 m-2 p-5 rounded-lg text-black font-bold text-xl flex flex-col justify-around items-center border border-none shadow-lg singleBox" style={{ height: 120, backgroundColor: 'white', minWidth: '220px', borderRadius: 20 }}>
            Total Users
            <span className="text-3xl boxNumber">15</span>
          </div>
        </div>

        <div className="flex justify-around p-6 dashsecondbox bg-gray-100 mb-10">
          <div className="w-full md:w-1/2 p-6 border border-gray-400 m-5 overflow-y-scroll rounded-lg bg-white" style={{ height: 400 }}>
            <div className="flex justify-between recentBlogs">
              <p className="text-lg font-semibold">Recent Blogs</p>
              <Link to="/dashboard/blog/add">
                <button className="text-blue-600 hover:underline text-teal">Add New Blog</button>
              </Link>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th scope="col" className="px-4 py-2">Image</th>
      <th scope="col" className="px-4 py-2">Title</th>
      <th scope="col" className="px-4 py-2">Actions</th>
    </tr>
  </thead>
  <tbody>
    {blogs.map((blog, index) => (
      <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td className="px-4 py-4">
          <img className="w-16 h-16 rounded-full object-cover" src={blogss} alt={blog.Heading} />
        </td>
        <td className="px-4 py-4">
          <Link to={`/blog/${blog.Heading}`} className="text-l font-semibold text-blue-600 dark:text-blue-400 hover:underline">
            {blog.Heading}
          </Link>
        </td>
        <td className="px-4 py-4">
          <div className="flex space-x-2">
          <Link to={`/dashboard/editblogs/${blog.Heading}`} className="text-blue-600 dark:text-blue-400 hover:underline">
              Edit
            </Link>
            <button className="text-red-600 dark:text-red-400 hover:underline" onClick={() => handleDelete(blog.id)}>
              Delete
            </button>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>


          </div>

          <div className="w-full md:w-1/2 p-6 border border-gray-400 m-5 overflow-y-scroll rounded-lg bg-white" style={{ height: 400 }}>
            <div>
              <Link to="/dashboard/addPost">
                <button className=" w-full text-right text-blue-600 mb-4">Add New Post</button>
              </Link>
              <SelectCourse handleDataFromChild={handleDataFromChild} />
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th className="px-6 py-3">Post</th>
      <th className="px-6 py-3">Actions</th>
    </tr>
  </thead>
  <tbody>
    {Array.isArray(data) &&
      data.map((item, index) => (
        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
          <td className="px-6 py-4">
            <Link to={`/dashboard/post/${dataFromChild.name.toLowerCase()}/${item.Heading}`} className="text-l font-semibold flex items-center">
              {item.Heading}
              <span className="pl-4">
              </span>
            </Link>
          </td>
          <td className="px-6 py-4">
            <button className="text-blue-600 dark:text-blue-500 hover:underline mr-2"> <Link to={`/dashboard/post/${dataFromChild.name.toLowerCase()}/${item.Heading}`}>Edit</Link></button>
            <button className="text-red-600 dark:text-red-500 hover:underline">Delete</button>
          </td>
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

export default DashboardComponent;
