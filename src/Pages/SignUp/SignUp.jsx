
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {

    const { createUser, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate();

    const handlesubmit = async (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const img = e.target.img.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)

        await createUser(email, password)
            .then(result => {
                toast.success('Registration successful');

                // updateProfile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: img
                })
                    .then(() => {
                        navigate(location?.state ? location.state : '/')
                    })
                    .catch()


                // navigate after login

            })
            .catch(error => {
                toast.error('Registration failed. Please try again.');
                console.error(error)
            })

    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)


                // navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <div>
                <div className="hero mt-14 md:mt-0 rounded-xl bg-base-200">
                    <div className="hero-content md:-mt-2 flex-col">
                        <h2 className="text-4xl font-bold">Please SignUp</h2>
                        <div className="card w-[300px] md:w-[380px] flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handlesubmit} className="card-body -mt-3 -mb-">
                                <div className="form-control">
                                    <label className="label -mt-3">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" placeholder="Your Name" className=" py-2 px-3 border border-gray-300 focus:border-gray-500 focus:border-2 focus:outline-none rounded-lg" name="name" required />
                                </div>
                                <div className="form-control">
                                    <label className="label -mt-2">
                                        <span className="label-text">Your Photo URl</span>
                                    </label>
                                    <input type="url" placeholder="Photo Url" className=" py-2 px-3 border border-gray-300 focus:border-gray-500 focus:border-2 focus:outline-none rounded-lg" name="img" />
                                </div>
                                <div className="form-control">
                                    <label className="label -mt-2">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" className=" py-2 px-3 border border-gray-300 focus:border-gray-500 focus:border-2 focus:outline-none rounded-lg" name="email" required />
                                </div>
                                <div className="form-control">
                                    <label className="label -mt-2">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="Password" className=" py-2 px-3 border border-gray-300 focus:border-gray-500 focus:border-2 focus:outline-none rounded-lg" name="password" required />
                                </div>
                                <div className="form-control mt-4">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                                <div className="text-center -mb-5">
                                    <p>You have an account? <Link className="text-xl mt-1 text-violet-700 hover:link" to="/login"> Login</Link></p>
                                    <p className="font-semibold mt-2 justify-center flex items-center gap-4">Sign In with <span onClick={handleGoogleSignIn} className="text-xl flex items-center font-semibold text-violet-700 hover:link"> <FcGoogle></FcGoogle>oogle</span></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;