import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

const GiveMark = () => {
    const [cardDetails, setCardDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/submite/${id}`)
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
        const formInfo = {marks, assignmentStatus: 'Completed'};

        fetch(`http://localhost:5000/submite/${cardDetails._id}`, {
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
            <h2>{cardDetails.title}</h2>
            <a href={cardDetails.pdf}>{cardDetails.pdf}</a>
            <form onSubmit={handleMardBtn}>
                <input className="border" type="number" name="number" id="" required/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default GiveMark;