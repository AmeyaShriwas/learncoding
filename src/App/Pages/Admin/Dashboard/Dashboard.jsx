import React from 'react'
import Example from '../../../Components/Navbar/Navbar'
import DashboardComponent from '../../../Components/DashboardComponent/DashboardComponent'

const Dashboard = () => {
    console.log(document.title)
  return (
    <div className='flex flex-col'>
        <Example/>
        <DashboardComponent/>
    </div>
  )
}

export default Dashboard
