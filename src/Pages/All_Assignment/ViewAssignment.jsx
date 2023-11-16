
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


    if (loading) {
        return <div>Loading...</div>;
    }
    
    return (
        <div>
            <h2>{cardDetails.level}</h2>
            <Link to={`/allassignment/data/${cardDetails._id}`}><button className="btn btn-secondary">Take Assignment</button></Link>
        </div>
    );
};

export default ViewAssignment;