// import { useState } from 'react';
// import {Link, NavLink } from 'react-router-dom';
// import logo from '../../../assets/logo.png'
// const Navbar = () => {

    
//     const navListOptions = <>
//         <li>
//             <NavLink
//                 to='/'
//                 aria-label='Home'
//                 title='Home'
//                 className={({ isActive }) => (isActive ? 'text-[#ffbd4a] hover:text-[#ffbd4a] no-underline' : 'text-white')}
//             >
//                 Home
//             </NavLink>
//         </li>

//         <li>
//             <NavLink
//                 to='/portfolio'
//                 aria-label='portfolio'
//                 title='portfolio'
//                 className={({ isActive }) => (isActive ? 'text-[#ffbd4a] hover:text-[#ffbd4a] no-underline' : 'text-white')}
//             >
//                 Portfolio
//             </NavLink>
//         </li>

//         <li>
//             <NavLink
//                 to='/about-us'
//                 aria-label='about-us'
//                 title='about-us'
//                 className={({ isActive }) => (isActive ? 'text-[#ffbd4a] hover:text-[#ffbd4a] no-underline' : 'text-white')}
//             >
//                 About Us
//             </NavLink>
//         </li>

     

       
//     </>


// const [menuOpen, setMenuOpen] = useState(false);

// const handleMenuToggle = () => {
//   setMenuOpen(!menuOpen);
// };

// const closeMenu = () => {
//   setMenuOpen(false);
// };
//     return (
      
//         <div
//         className="  flex flex-row justify-between items-center mx-auto  md:p-4 p-4  
//     "
//       >
//         <div className="relative flex  items-center">
//           <Link to="/">
//             <img
//               src={logo}
//               className="md:ml-8 md:max-w-[150px] md:max-h-[150px] max-w-[100px] max-h-[80px]"
//               alt=""
//             />
//           </Link>
         
//         </div>
  
//         <nav>
//           <ul
//             className=" list-none  hidden md:flex items-center justify-center space-x-9 text-lg
//             font-semibold  "
//           >
// {navListOptions}

          
//           </ul>
//         </nav>
  
//         <div className="relative md:flex hidden items-center">
//           {/* Vertical line element */}
//           {/* <div className=" absolute h-[160px] border-spacing-1 -top-12 right-52 w-[1px] bg-[#343434]"></div> */}
//           <Link to="/contact-us">
//             <button
//               className="md:mr-14 font-semibold text-[#171818] text-[18px] bg-[#ffbd4a]
//              hover:bg-white  border-none py-[10px] px-[20px] rounded-[10px]"
//             >
//               {` Let's`} Talk →{" "}
//             </button>
//           </Link>
//         </div>
  
//         {/*----------------------- Mobile Menu -------------------------*/}
//         <div className="md:hidden ">
//           {/* Mobile Menu Toggle Button */}
//           <button id="menuButton" onClick={handleMenuToggle}>
//             {menuOpen ? (
//               <svg className="w-5 text-[#ffbd4a]" viewBox="0 0 24 24">
//                 <path
//                   fill="currentColor"
//                   d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
//                 />
//               </svg>
//             ) : (
//               <svg className="w-5 text-[#294A85]" viewBox="0 0 24 24">
//                 <path
//                   fill="currentColor"
//                   d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
//                 />
//                 <path
//                   fill="currentColor"
//                   d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
//                 />
//                 <path
//                   fill="currentColor"
//                   d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
//                 />
//               </svg>
//             )}
//           </button>
//           <div
//             id="menuList"
//             style={{
//               left: menuOpen ? "-10px" : "-530px",
//               top: menuOpen ? "81px" : "80px",
//               transitionDuration: "1000ms",
//             }}
//             className={`w-full h-auto absolute   ${
//               menuOpen ? "bg-[#]  menuOpen" : ""
//             }`}
//           >
//             <ul className="py-4 bg-[#131313] pb-44 ml-10 flex list-none flex-col gap-2 text-left font-medium   text-[16px] text-white">
//               <li>
//                 <NavLink
//                   to="/"
//                   aria-label="Home"
//                   title="Home"
//                   onClick={closeMenu} // Close menu when clicked
//                   className="text-white hover:text-[#ffbd4a] no-underline"
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/portfolio"
//                   aria-label="portfolio"
//                   title="portfolio"
//                   onClick={closeMenu} // Close menu when clicked
//                   className="text-white hover:text-[#ffbd4a] no-underline"
//                 >
//                   Portfolio
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="about"
//                   aria-label="about"
//                   title="about"
//                   onClick={closeMenu} // Close menu when clicked
//                   className="text-white hover:text-[#ffbd4a] no-underline"
//                 >
//                   About
//                 </NavLink>
//               </li>
             
             

//               <li>
//                 <NavLink
//                   to="contact"
//                   aria-label="contact"
//                   title="contact"
//                   onClick={closeMenu} // Close menu when clicked
//                   className="text-white hover:text-[#ffbd4a] no-underline"
//                 >
//                   Contact
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default Navbar;













import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navListOptions = (
    <>
      <li>
        <NavLink
          to="/"
          aria-label="Home"
          title="Home"
          className={({ isActive }) =>
            isActive
              ? 'text-[#ffbd4a] hover:text-[#ffbd4a] no-underline'
              : 'text-white'
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/portfolio"
          aria-label="portfolio"
          title="portfolio"
          className={({ isActive }) =>
            isActive
              ? 'text-[#ffbd4a] hover:text-[#ffbd4a] no-underline'
              : 'text-white'
          }
        >
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          aria-label="about-us"
          title="about-us"
          className={({ isActive }) =>
            isActive
              ? 'text-[#ffbd4a] hover:text-[#ffbd4a] no-underline'
              : 'text-white'
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex flex-row justify-between items-center mx-auto md:p-4 p-4">
      <div className="relative flex items-center">
        <Link to="/">
          <img
            src={logo}
            className="md:ml-8 md:max-w-[150px] md:max-h-[150px] max-w-[100px] max-h-[80px]"
            alt=""
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <nav>
        <ul className="list-none hidden md:flex items-center justify-center space-x-9 text-lg font-semibold">
          {navListOptions}
        </ul>
      </nav>

      {/* Button for contact section */}
      <div className="relative md:flex hidden items-center">
        <Link to="/contact-us">
          <button className="md:mr-14 font-semibold text-[#171818] text-[18px] bg-[#ffbd4a] hover:bg-white border-none py-[10px] px-[20px] rounded-[10px]">
            {` Let's`} Talk →{' '}
          </button>
        </Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden flex items-center">
        <button id="menuButton" onClick={handleMenuToggle}>
          {menuOpen ? (
            <svg
              className="w-7 text-[#ffbd4a]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill="currentColor"
                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
              />
            </svg>
          ) : (
            <svg
              className="w-7 text-[#ffbd4a]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
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
      </div>

      {/* Mobile Menu */}
      <div
        id="menuList"
        style={{
          left: menuOpen ? '0' : '-100%',
          top: menuOpen ? '81px' : '80px',
          transitionDuration: '500ms',
        }}
        className={`w-full h-auto absolute ${
          menuOpen ? 'bg-[#131313] bg-opacity-90' : ''
        }`}
      >
        <ul className="py-4 ml-10 flex list-none flex-col gap-2 text-left font-medium text-[16px] text-white">
          <li>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              onClick={closeMenu}
              className="text-white hover:text-[#ffbd4a] no-underline"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              aria-label="portfolio"
              title="portfolio"
              onClick={closeMenu}
              className="text-white hover:text-[#ffbd4a] no-underline"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              aria-label="about-us"
              title="about-us"
              onClick={closeMenu}
              className="text-white hover:text-[#ffbd4a] no-underline"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              aria-label="contact-us"
              title="contact-us"
              onClick={closeMenu}
              className="text-white hover:text-[#ffbd4a] no-underline"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
