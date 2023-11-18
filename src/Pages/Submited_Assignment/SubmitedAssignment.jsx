import { useEffect, useState } from "react";
import SubmitedData from "./SubmitedData";


const SubmitedAssignment = () => {
    const [allData, setAllData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/submite')
            .then(res => res.json())
            .then(data => {
                const pending = data.filter(da => da.assignmentStatus === "Pending")
                setAllData(pending)
            })
    }, [])
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-3">
                {
                    allData.map(data => <SubmitedData key={data._id} data={data}></SubmitedData>)
                }
            </div>
        </div>
    );
};

export default SubmitedAssignment;