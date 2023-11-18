
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewAssignment = () => {

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

    const { title, image, mark, level, date, _id, description } = cardDetails;

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="mt-6">
                <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-40 ">
                    <div>
                        <img className="rounded-lg md:w-[600px] h-96" src={image} alt="" />
                    </div>
                    <div className="space-y-1 -ml-24">
                        <h2 className="text-3xl font-semibold">Marks : {mark}</h2>
                        <h2 className="text-3xl font-semibold">Due Date : {date}</h2>
                        <h2 className="text-3xl font-semibold">Level : {level}</h2>
                        <Link to={`/allassignment/data/${_id}`}><button className="px-3 py-3 bg-purple-600 rounded-md text-white font-medium mt-4">Take Assignment</button></Link>
                    </div>
                </div>
                <div className="mt-6 space-y-4">
                    <h2 className="text-3xl font-semibold text-black">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewAssignment;