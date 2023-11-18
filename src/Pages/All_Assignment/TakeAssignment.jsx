import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';


const TakeAssignment = () => {
    const { user } = useContext(AuthContext)
    const [cardDetails, setCardDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams()
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/data/${id}`)
            .then(res => res.json())
            .then(data => {
                setCardDetails(data)
                setLoading(false);
            })
            .catch(error => console.error(error));
    }, [id]);


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const pdf = form.pdfLink.value;
        const text = form.text.value;
        const email = user.email;
        const title = cardDetails.title;
        const mark = cardDetails.mark;
        const displayName = user.displayName;
        const formInfo = { pdf, text, assignmentStatus: 'Pending', email, mark, title, displayName }
        console.log(formInfo)


        fetch('http://localhost:5000/submite', {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(formInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Assignment Create successful');
                    form.reset();
                    navigate(location?.state ? location.state : '/submitedAssignment')
                }
            })
    }


    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                <h2 className="text-center text-4xl font-bold text-black pt-5">{cardDetails.title}</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PDF Link</span>
                        </label>
                        <input type="text" name="pdfLink" placeholder="PDF Link" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Text Area</span>
                        </label>
                        <textarea className="input input-bordered" name="text" id="" cols="10" rows="30"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TakeAssignment;