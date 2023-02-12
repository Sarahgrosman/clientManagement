import React from 'react'
import Header from '../Header/Header';
import {Outlet} from "react-router-dom"
import './Layout.css'

const Layout = () => {
  
    return (
        <div className='layout'>
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
      );
  
}

export default Layout

