import { useState } from 'react';
import {Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'
const Navbar = () => {

    
    const navListOptions = <>
        <li>
            <NavLink
                to='/'
                aria-label='Home'
                title='Home'
                className={({ isActive }) => (isActive ? 'text-[#ffbd4a] hover:text-[#ffbd4a] no-underline' : 'text-white')}
            >
                Home
            </NavLink>
        </li>

        <li>
            <NavLink
                to='/services'
                aria-label='services'
                title='services'
                className={({ isActive }) => (isActive ? 'text-[#ffbd4a] hover:text-[#ffbd4a] no-underline' : 'text-white')}
            >
                Services
            </NavLink>
        </li>

        <li>
            <NavLink
                to='/about-us'
                aria-label='about-us'
                title='about-us'
                className={({ isActive }) => (isActive ? 'text-[#ffbd4a] hover:text-[#ffbd4a] no-underline' : 'text-white')}
            >
                About Us
            </NavLink>
        </li>

        <li>
            <NavLink
                to='/Blogs'
                aria-label='Blogs'
                title='Blogs'
                className={({ isActive }) => (isActive ? 'text-[#ffbd4a] hover:text-[#ffbd4a] no-underline' : 'text-white')}
            >
                Blogs
            </NavLink>
        </li>

       
    </>


const [menuOpen, setMenuOpen] = useState(false);

const handleMenuToggle = () => {
  setMenuOpen(!menuOpen);
};

const closeMenu = () => {
  setMenuOpen(false);
};
    return (
      
        <div
        className="  flex flex-row justify-between items-center mx-auto  md:p-4 p-4  
    "
      >
        <div className="relative flex  items-center">
          <Link to="/">
            <img
              src={logo}
              className="md:ml-8 md:max-w-[150px] md:max-h-[150px] max-w-[100px] max-h-[80px]"
              alt=""
            />
          </Link>
         
        </div>
  
        <nav>
          <ul
            className=" list-none  hidden md:flex items-center justify-center space-x-9 text-lg
            font-semibold  "
          >
{navListOptions}

          
          </ul>
        </nav>
  
        <div className="relative md:flex hidden items-center">
          {/* Vertical line element */}
          {/* <div className=" absolute h-[160px] border-spacing-1 -top-12 right-52 w-[1px] bg-[#343434]"></div> */}
          <Link to="/contact-us">
            <button
              className="md:mr-14 font-semibold text-[#171818] text-[18px] bg-[#ffbd4a]
             hover:bg-white  border-none py-[10px] px-[20px] rounded-[10px]"
            >
              {` Let's`} Talk →{" "}
            </button>
          </Link>
        </div>
  
        {/*----------------------- Mobile Menu -------------------------*/}
        <div className="md:hidden ">
          {/* Mobile Menu Toggle Button */}
          <button id="menuButton" onClick={handleMenuToggle}>
            {menuOpen ? (
              <svg className="w-5 text-[#ffbd4a]" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                />
              </svg>
            ) : (
              <svg className="w-5 text-[#294A85]" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            )}
          </button>
          <div
            id="menuList"
            style={{
              left: menuOpen ? "-10px" : "-530px",
              top: menuOpen ? "81px" : "80px",
              transitionDuration: "1000ms",
            }}
            className={`w-full h-auto absolute   ${
              menuOpen ? "bg-[#]  menuOpen" : ""
            }`}
          >
            <ul className="py-4 bg-[#131313] pb-44 ml-10 flex list-none flex-col gap-2 text-left font-medium   text-[16px] text-white">
              <li>
                <NavLink
                  to="/"
                  aria-label="Home"
                  title="Home"
                  onClick={closeMenu} // Close menu when clicked
                  className="text-white hover:text-[#ffbd4a] no-underline"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  aria-label="service"
                  title="service"
                  onClick={closeMenu} // Close menu when clicked
                  className="text-white hover:text-[#ffbd4a] no-underline"
                >
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about"
                  aria-label="about"
                  title="about"
                  onClick={closeMenu} // Close menu when clicked
                  className="text-white hover:text-[#ffbd4a] no-underline"
                >
                  About
                </NavLink>
              </li>
             
             
              <li>
                <NavLink
                  to="blog"
                  aria-label="blog"
                  title="blog"
                  onClick={closeMenu} // Close menu when clicked
                  className="text-white hover:text-[#ffbd4a] no-underline"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  aria-label="contact"
                  title="contact"
                  onClick={closeMenu} // Close menu when clicked
                  className="text-white hover:text-[#ffbd4a] no-underline"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Navbar;