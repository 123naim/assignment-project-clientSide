import { useContext, useEffect, useState } from "react";
import SubmitedData from "../Submited_Assignment/SubmitedData";
import { AuthContext } from "../../Provider/AuthProvider";


const My_Assignment = () => {
    const {user} = useContext(AuthContext)
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                allData.map(data => <SubmitedData key={data._id} data={data}></SubmitedData>)
            }
        </div>
    );
};

export default My_Assignment;