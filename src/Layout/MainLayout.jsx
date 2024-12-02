import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Shared/Navbar/Navbar';
import Footer from '../components/Shared/Footer/Footer';

const Layout = () => {
    return (
        <>
    
            <Navbar></Navbar> 
            <ToastContainer />

           <Outlet></Outlet>
           <Footer></Footer>  
        </>
    );
};

export default Layout;