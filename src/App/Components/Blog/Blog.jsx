import React, { useState } from 'react'
import Example from '../Navbar/Navbar'
import { FaHome, FaBloggerB, FaFileAlt, FaQuestionCircle, FaArrowRight, FaEdit } from 'react-icons/fa';
import {Select, Textarea } from '@headlessui/react';
import './../Post/Post.css'
import SelectCourse from '../SelectComponent/SelectCourse';



const Blog = () => {

    const [selectedCategory, setSelectedCategory] = useState('');
    const [titleValue, setTitleValue] = useState('');
    const [headingValue, setHeadingValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const [titleArray, setTitleArray] = useState([]);
    const [descriptionArray, setDescriptionArray] = useState([]);
    const [file, setFile] = useState(null)
    const [blog, setBlog] = useState({})

    const category = [
        {name: 'SELECT CATEGORY'},
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

      const handleCategoryChange = (e)=> {
        setSelectedCategory(e.target.value)
      }

      const handleTitleValue = (e)=> {
        setTitleValue(e.target.value)
      }

      const handleHeadingValue = (e) => {
        setHeadingValue(e.target.value)
      }

      const handleDescriptionValue = (e)=> {
        setDescriptionValue(e.target.value)
      }

      const handleFileChange = (e)=> {
        setFile(e.target.value)
      }

      const updateBlog = ()=> {
        titleArray.push(titleValue)
        descriptionArray.push(descriptionValue)

        Object.assign(blog, {"Category": selectedCategory, "file": file, "Heading": titleValue, "Title": titleArray, "Description": descriptionArray })
      }
   

      console.log(blog)

    const ContentSection = ()=> {
        return (
            <div className='pt-8'>
            <p>Heading</p>
            <Textarea
                className='w-full p-2 text-l border' onChange={handleHeadingValue}
            />
            <p>Description</p>
            <Textarea
                className='w-full p-2 text-l p-3 border' onChange={handleDescriptionValue}

            />
        </div>
        )
    }
    const addContentSection = () => {
        titleArray.push(titleValue)
        descriptionArray.push(descriptionValue)
        const newKey = contentSection.length;
        setContentSection([...contentSection, <ContentSection key={newKey} />]);
      };

      const [contentSection, setContentSection] = useState([<ContentSection key={0}/>])
    return (
        <div>
            <Example />
            <div className='w-full flex'>
                <div className='w-4/5 p-8 addPostContainer'>
                    <h3 className='font-bold text-2xl'>ADD NEW BLOG</h3>
                    <div className='mt-5'>
                    <p>Title</p>
                    <Textarea className='w-full p-2 text-l border' onChange={handleTitleValue}/>
                    </div>
                    <input type='file'  className='pt-5' onChange={handleFileChange}/>
                    {contentSection}
                    <p className='font-bold w-full text-right text-teal pt-4 pb-4' onClick={updateBlog}>Update Blog</p>
                    <p className='font-bold w-full text-right text-teal' onClick={addContentSection}>Add More Content</p>
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
                <div className='w-1/5 rightUpdateContainer'>
                    <div className=' border-gray p-10 fixed right-2  mt- '>
                        <ul className='border p-4 bg-white rounded' style={{ backgroundColor: 'teal' }}>
                            <li className='pt-4 flex items-center text-white '>UPDATE <span className='pl-3'></span><FaEdit /></li>
                            <Select className='w-full text-white mt-4' onChange={handleCategoryChange}  style={{ backgroundColor: 'teal', border: 'none' }}>
                                {category.map((category, index)=> {
                                    return (
                                        <option key={index} className='text-white' value={category.name}>{category.name}</option>
                                    )
                                })}
                               
                               
                            </Select>
                            <li className='pt-4 flex items-center text-white '>ADD NEW BLOG <span className='pl-3'><FaEdit /></span></li>
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

        </div>
    )
}

export default Blog
