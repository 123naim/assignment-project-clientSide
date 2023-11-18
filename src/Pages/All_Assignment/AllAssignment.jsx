import { useContext, useEffect, useState } from "react";
import AssignmentData from "./AssignmentData";
import { toast } from 'react-toastify';
import { AuthContext } from "../../Provider/AuthProvider";


const AllAssignment = () => {
    const { user } = useContext(AuthContext)
    const [allData, setAllData] = useState([])
    const [displayData, setDisplayData] = useState([]);

    useEffect(() => {
        fetch('https://assignment-server-side-tau.vercel.app/data')
            .then(res => res.json())
            .then(data => {
                setAllData(data)
                setDisplayData(data)
            })
    }, [])




    const handleDelete = (_id, email) => {
        console.log(user?.email)
        console.log(email)


        if (user.email == email) {
            fetch(`https://assignment-server-side-tau.vercel.app/data/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('user Delete Successfully')
                        const remaining = allData.filter(user => user._id !== _id);
                        setDisplayData(remaining)
                        setAllData(remaining)
                    }
                })
        }
        else {
            alert('sorry')
        }
    }

    const handleDataFilter = filter => {
        if (filter === 'All') {
            setDisplayData(allData)
        }

        else if (filter === 'Easy') {
            const easyAssignment = allData.filter(data => data.level === 'Easy')
            setDisplayData(easyAssignment)

        }
        else if (filter === 'Medium') {
            const mediumAssignment = allData.filter(data => data.level === 'Medium')
            setDisplayData(mediumAssignment)

        }
        else if (filter === 'Hard') {
            const hardAssignment = allData.filter(data => data.level === 'Hard')
            setDisplayData(hardAssignment)

        }
    }


    return (
        <div className="text-center text-black">
            <h2 className="mb-5">Sort By Level</h2>
            <div className="text-center">
                <button onClick={() => handleDataFilter('All')} className="text-center py-3 px-7 border hover:bg-gray-200">All</button>
                <button onClick={() => handleDataFilter('Easy')} className="text-center py-3 px-6 border hover:bg-gray-200">Easy</button>
                <button onClick={() => handleDataFilter('Medium')} className="text-center p-3 border hover:bg-gray-200">Medium
                </button>
                <button onClick={() => handleDataFilter('Hard')} className="text-center py-3 px-5 border hover:bg-gray-200">Hard</button>
            </div>
            <div className="flex justify-center items-center">
                <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {
                        displayData.map((data, idx) => <AssignmentData key={idx}
                            handleDelete={handleDelete} data={data}></AssignmentData>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllAssignment;