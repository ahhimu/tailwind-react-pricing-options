import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navigationData = [
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "About",
        path: "/about"
    },
    {
        id: 3,
        name: "Services",
        path: "/services"
    },
    {
        id: 4,
        name: "Blog",
        path: "/blog"
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact"
    }
];





const NavBar = () => {
   
    const [open,SetOpen] = useState(false);
    const links=navigationData.map(route => <Link key={route.id} Route={route}></Link>);
    return (

       

        <nav className='flex justify-between items-center bg-gray-200 p-5'>

        <span className='flex ml-2' onClick={()=>SetOpen(!open)}>
            {
            open?
            <X className='md:hidden'></X>
            :<Menu className='md:hidden'></Menu>
            
            }
        <ul className={`md:hidden absolute duration-1000 bg-amber-100 text-center  rounded-2xl ${open ? 'top-12 left-0':'-top-40 left-0'}`}>
            {
                links
            }
            </ul>        
            <h3 className='ml-10'>My NavBar</h3>
        </span>

            <ul className='hidden md:flex  '>
                {
                    links
                }
            </ul>





            {/* <ul className='flex'>
           {
                navigationData.map(route=>
                <li className='mr-10'>
                    <a href={route.path}></a>
                    {route.name}
                    </li>)
            }
            </ul> */}


            {/* eita ekta system navbar */}
            {/* <ul className='flex'>
                <li className='mr-10'><a href="/"></a>Home</li>
                <li className='mr-10'><a href="/about"></a>About</li>
                <li className='mr-10'><a href="/blogs"></a>Blogs</li>
            </ul> */}
            <button>Sing In</button>
        </nav>
    );
};

export default NavBar;