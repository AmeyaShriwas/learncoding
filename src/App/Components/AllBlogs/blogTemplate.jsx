import React from 'react';
import { FaEdit } from 'react-icons/fa';
import blog from './../../../assets/blog.webp';

const BlogTemplate = (props) => {
  return (
    <div className='m-4 rounded p-5' style={{ maxWidth: '200px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', position: 'relative' }}>
      <p style={{ position: 'absolute', right: 10, top: 10 }}><FaEdit /></p>
      <img className='p-3' src={props.img} style={{ width: 100, height: 100 }} alt='Blog' />
      <h3 className='text-black text-lg font-semibold mt-2 mb-1'>{props.title}</h3>
    </div>
  );
}

export default BlogTemplate;
