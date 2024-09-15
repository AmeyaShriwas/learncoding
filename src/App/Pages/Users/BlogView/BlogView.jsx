import React, { useState, useEffect } from 'react';
import Example from '../../../Components/Navbar/Navbar';
import blogss from './../../../../assets/blog.webp';
import { useParams } from 'react-router-dom';
import './BlogView.css';
import blogs from './../../../ApiData/BlogData/htmlBlogs.json';

const BlogView = () => {
    const { blogname } = useParams();
    const [blogData, setBlogData] = useState(null);

    useEffect(() => {
        // Find blog using case-insensitive comparison when component mounts or blogname changes
        const findBlog = blogs.find(blog => blog.Heading.toLowerCase() === blogname.toLowerCase());
        setBlogData(findBlog);
    }, [blogname]);

    const navigation = [
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

    const ChangeBlog = (id) => {
        const newData = blogs.find(blog => blog.id === id);
        setBlogData(newData);
    };

    return (
        <div>
            <Example />
            <div className='w-full flex'>
                <div className='w-4/6 mainBlogView'>
                    {blogData ? (
                        <>
                            <h3 className='font-bold text-2xl p-10 text-black'>{blogData.Heading}</h3>
                            <img className='pl-10 pr-10' src='https://miro.medium.com/v2/resize:fit:1358/0*tHerztBbMWo1N6QW' alt="Blog" />
                            {blogData.Title.map((title, index) => (
                                <div className='p-5' key={index}>
                                    <p className='p-2 text-xl'>{title}</p>
                                    <p className='p-2 text-l'>{blogData.Description[index]}</p>
                                </div>
                            ))}
                        </>
                    ) : (
                        <p className='p-10 text-xl text-black'>Blog not found.</p>
                    )}
                </div>
                <div className='w-2/6 p-5 suggestedBlogs fixed right-0'>
                    <h3 className='font-bold text-2xl p-3 text-black'>Suggested Blogs</h3>
                    <ul>
                        {blogs.map((blog, index) => (
                            <li onClick={() => ChangeBlog(blog.id)} key={index} className='flex p-2 text-black'>
                                <img className='w-12 h-12 rounded-full object-cover mr-4' src={blogss} alt="Blog" />
                                <span>{blog.Heading}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogView;
