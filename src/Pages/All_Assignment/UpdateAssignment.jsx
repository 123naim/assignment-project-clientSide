import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from 'react-toastify';

const UpdateAssignment = () => {
    const [cardDetails, setCardDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/data/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCardDetails(data)
                setLoading(false);
            })
            .catch(error => console.error(error));
    }, [id]);


    const { user } = useContext(AuthContext)

    const handleUpdateAssignment = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const image = form.image.value;
        const level = form.level.value;
        const email = form.email.value;
        const mark = form.mark.value;
        const date = form.date.value;
        const description = form.description.value;
        const formInfo = { title, image, level, email, mark, date, description }
        console.log(formInfo)


        if (user.email === cardDetails.email) {
            fetch(`http://localhost:5000/data/${cardDetails._id}`, {
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
        else{
            alert('sorry')
        }
    }



    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div className="bg-base-200 rounded-lg w-5/6 p-8 mt-4 mx-auto">
                <h2 className="text-3xl font-semibold text-center pb-7">Update Assignment</h2>
                <form onSubmit={handleUpdateAssignment}>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label -mt-3">
                                <span className="label-text">Assignment Title</span>
                            </label>
                            <input type="text" defaultValue={cardDetails.title} className=" py-2 px-3 border border-gray-300 focus:border-gray-500 focus:border-2 focus:outline-none rounded-lg" name="title" required />
                        </div>
                        <div className="form-control">
                            <label className="label -mt-3">
                                <span className="label-text">Thumbnail
                                    Image URL</span>
                            </label>
                            <input type="url" defaultValue={cardDetails.image} className=" py-2 px-3 border border-gray-300 focus:border-gray-500 focus:border-2 focus:outline-none rounded-lg" name="image" required />
                        </div>
                        <div className="form-control">
                            <label className="label -mt-3">
                                <span className="label-text">Difficulty level</span>
                            </label>
                            <select className="py-2 px-3 border border-gray-300 focus:border-gray-500 focus:border-2 focus:outline-none rounded-lg" name="level" id="cars" required>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label -mt-3">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" readOnly defaultValue={cardDetails.email} className=" py-2 px-3 border border-gray-300 focus:border-gray-500 focus:border-2 focus:outline-none rounded-lg" name="email" required />
                        </div>
                        <div className="form-control">
                            <label className="label -mt-3">
                                <span className="label-text">Assignment Marks</span>
                            </label>
                            <input type="number" defaultValue={cardDetails.mark} className=" py-2 px-3 border border-gray-300 focus:border-gray-500 focus:border-2 focus:outline-none rounded-lg" name="mark" required />
                        </div>
                        <div className="form-control">
                            <label className="label -mt-3">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="textarea" defaultValue={cardDetails.description} className=" py-2 px-3 border border-gray-300 focus:border-gray-500 focus:border-2 focus:outline-none rounded-lg" name="description" required />
                        </div>
                        <div className="form-control w-[460px] place-content-center">
                            <label className="label -mt-3">
                                <span className="label-text">Due Date</span>
                            </label>
                            <input type="date" defaultValue={cardDetails.date} className=" py-2 px-3 border border-gray-300 w-[255px] md:w-full focus:border-gray-500 focus:border-2 focus:outline-none rounded-lg" name="date" required />
                        </div>
                    </div>
                    <div>
                        <button className="w-full mt-8 py-2 text-center bg-rose-300 rounded-lg"><input type="submit" value="SUBMIT" /></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateAssignment;