import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    const links = [{
    path:"/NewClient",
    title:"לקוח חדש"
},
{
    path:"/products",
    title:"מוצרים"
},
{
    
    path:"/orders",
    title:"הזמנות"
},
{
    path:"/allClients",
    title:"לקוחות"
},
{
    path:"/Login",
    title:"להתחברות"
},
{
    
    path:"/about",
    title:"אודות"
},
{
    path:"/home",
    title:"דף הבית",
}]

  return (
    <>
    <div className='empty'></div>
    <nav className='nav'>
        {links.map(link=>
                 
                 <Link to={link.path} key={link.path}>{link.title}</Link>
            )}
    </nav>
    
            
    </>
  )
}

export default Header