import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

const GiveMark = () => {
    const [cardDetails, setCardDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://assignment-server-side-tau.vercel.app/submite/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCardDetails(data)
                setLoading(false);
            })
            .catch(error => console.error(error));
    }, [id]);

    const handleMardBtn = e => {
        e.preventDefault();
        const form = e.target;
        const marks = form.number.value;
        const text = form.text.value;
        const formInfo = { marks, text, assignmentStatus: 'Completed' };

        fetch(`https://assignment-server-side-tau.vercel.app/submite/${cardDetails._id}`, {
            method: "PUT",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(formInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('user Updated Successfully')
                }
            })

    }


    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div className="flex items-center justify-center mt-12">
                <div className="card w-96 bg-gray-200 text-black">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title mb-8"><a href={cardDetails.pdf}>PDF Link : <span className="text-red-600 underline">{cardDetails.pdf}</span></a></h2>
                        <form className="flex flex-col space-y-3" onSubmit={handleMardBtn}>
                            <div className="form-control">
                                <label className="label -mt-3">
                                    <span className="label-text ">Your FeedBack</span>
                                </label>
                                <input type="text" placeholder="Plese Your FeedBack"  className=" py-2 px-3 border border-gray-300 focus:border-gray-500 focus:border-2 focus:outline-none rounded-lg w-72" name="text" required />
                            </div>
                            <div className="form-control">
                                <label className="label -mt-3">
                                    <span className="label-text ">Assignment Marks</span>
                                </label>
                                <input type="number" placeholder="Assignment Marks" className=" py-2 px-3 border border-gray-300 focus:border-gray-500 focus:border-2 focus:outline-none rounded-lg mb-1" name="number" required />
                            </div>
                            <input className="btn btn-primary" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiveMark;