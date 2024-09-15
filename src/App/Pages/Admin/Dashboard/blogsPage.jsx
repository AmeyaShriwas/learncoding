import React from 'react';
import blogImage from './../../../../assets/blog.png'; // Ensure to replace with the correct path to your image

const DashboardBlogs = () => {

    const blogs = [
        { title: "10 Essential Web Development Tools Every Developer Should Know", id: 1, img: blogImage },
        { title: "The Complete Guide to Frontend Frameworks: React vs. Angular vs. Vue", id: 2, img: blogImage },
        { title: "Mastering CSS Grid Layout: A Comprehensive Tutorial", id: 3, img: blogImage },
        { title: "Best Practices for Responsive Web Design in 2024", id: 4, img: blogImage },
        { title: "JavaScript Modernization: Exploring ES6+ Features", id: 5, img: blogImage },
        { title: "Securing Your Web Applications: A Guide to Web Security", id: 6, img: blogImage },
    ];

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-screen">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption className="px-4 py-2 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    Our Blog Posts
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                        Browse a list of our blog posts designed to help you learn new things and stay updated.
                    </p>
                </caption>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-4 py-2">Title</th>
                        <th scope="col" className="px-4 py-2">Image</th>
                        <th scope="col" className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map(blog => (
                        <tr key={blog.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {blog.title}
                            </th>
                            <td className="px-4 py-2">
                                <img src={blog.img} alt={blog.title} className="w-16 h-16 object-cover" />
                            </td>
                            <td className="px-4 py-2 text-right">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DashboardBlogs;
