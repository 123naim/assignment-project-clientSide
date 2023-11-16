import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { ToastContainer } from 'react-toastify';

const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Main;