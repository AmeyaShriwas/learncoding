import React from 'react'
import InitialPage from './App/Pages/Users/Initial/InitialPage'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './App/Pages/Users/LoginPage/LoginPage'
import SignupPage from './App/Pages/Users/SignupPage/SignupPage'
import BlogPage from './App/Pages/Users/Blog/BlogPage'
import Dashboard from './App/Pages/Admin/Dashboard/Dashboard'
import Post from './App/Components/Post/Post'
import AddPost from './App/Components/AddPost/AddPost'
import Blog from './App/Components/Blog/Blog'
import BlogView from './App/Pages/Users/BlogView/BlogView'
import VerifyEmail from './App/Pages/Users/SignupPage/VerifyEmail'
import ForgotPassword from './App/Pages/Users/LoginPage/ForgotPassword'
import AllBlogs from './App/Components/AllBlogs/AllBlogs'
import DashboardBlogs from './App/Pages/Admin/Dashboard/blogsPage'
import EditBlog from './App/Components/AllBlogs/EditBlogs'
import UserTable from './App/Pages/Admin/AllUsers/AllUsers'
import UpdatePassword from './App/Pages/Users/LoginPage/UpdatePassword'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<InitialPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/forgotPassword' element={<ForgotPassword/>}/>
        <Route path='/updatePassword' element={<UpdatePassword/>}/>
        <Route path='/Signup' element={<SignupPage />} />
        <Route path='/verifyEmail' element={<VerifyEmail />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/dashboard/post/:course/:heading' element={<Post/>} />
        <Route path='/dashboard/addPost' element={<AddPost/>} />
        <Route path='/dashboard/blog/add' element={<Blog/>} />
        <Route path='/dashboard/allBlogs' element={<AllBlogs/>} />
        <Route path='/dashboard/editblogs/:Heading' element={<EditBlog/>} />

        <Route path='/dashboard/dashboardblogs' element={<DashboardBlogs/>} />
        <Route path='/blog/:blogname' element={<BlogView/>} />
        <Route path='/dashboard/allUser' element={<UserTable/>} />



      </Routes>


    </div>
  )
}

export default App
