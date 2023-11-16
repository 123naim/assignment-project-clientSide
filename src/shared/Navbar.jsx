import logo from '../assets/img/logo.png'
import { NavLink } from 'react-router-dom';
import './navbar.css'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navLink = <>
        <li> <NavLink to="/">Home</NavLink> </li>
        <li> <NavLink to="/allassignment">All Assignment</NavLink> </li>
        <li> <NavLink to="/createAssignment">Create Assignment</NavLink> </li>
        <li> <NavLink to="/submitedAssignment">Submited Assignment</NavLink> </li>
        <li> <NavLink to="/myAssignment">My Assignment</NavLink> </li>
    </>

    const handleLogout = () => {
        logOut()
            .then(res => {
                console.log(res.user)
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <img className='w-40 h-16 hidden md:block' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        {
                            user ? <>
                                {
                                    user.photoURL ? <>
                                        <div>
                                            <details className="dropdown">
                                                <summary className="m-1 btn"><img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" /></summary>
                                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100  w-40">
                                                    <p>{user.displayName}</p>
                                                    <a onClick={handleLogout} href="">LogOut</a>
                                                </ul>
                                            </details>
                                        </div>
                                    </> : <>
                                        <div>
                                            <details className="dropdown">
                                                <summary className="m-1 btn"><img className="w-10 h-10 rounded-full" src="https://i.ibb.co/j8ZdpDs/default-profile-2.jpg" alt="" /></summary>
                                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100  w-40">
                                                    <p>{user.displayName}</p>
                                                    <a onClick={handleLogout} href="">LogOut</a>
                                                </ul>
                                            </details>
                                        </div>
                                    </>
                                }
                            </> :
                                <>
                                    <ul className="menu menu-horizontal px-1">
                                        <li> <NavLink to="/login">Login</NavLink> </li>
                                        <li> <NavLink to="/singUp">SingUp</NavLink> </li>
                                    </ul>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;