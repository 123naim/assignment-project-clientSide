import { useContext, useEffect, useState } from "react";
import SubmitedData from "../Submited_Assignment/SubmitedData";
import { AuthContext } from "../../Provider/AuthProvider";


const My_Assignment = () => {
    const { user } = useContext(AuthContext)
    const [allData, setAllData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/submite')
            .then(res => res.json())
            .then(data => {
                const userData = data.filter(dd => dd.email === user.email)
                setAllData(userData)
            })
    }, [user.email])
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-black">My Submited Assignment</h2>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {
                        allData.map(data => <SubmitedData key={data._id} data={data}></SubmitedData>)
                    }
                </div>
            </div>
        </div>
    );
};

export default My_Assignment;