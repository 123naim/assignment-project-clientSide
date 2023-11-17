import React, { useEffect, useState } from "react";
import { FaUserPlus, FaFileUpload, FaTasks, FaComment, FaBook, FaComments, FaBullhorn, FaChartLine } from 'react-icons/fa';

const Features = () => {

    const iconsMap = {
        FaUserPlus,
        FaFileUpload,
        FaTasks,
        FaComment,
        FaBook,
        FaComments,
        FaBullhorn,
        FaChartLine,
    };

    const [featureData, setFeatureData] = useState([]);

    useEffect(() => {
        fetch('feature.json')
            .then(res => res.json())
            .then(data => setFeatureData(data))
    }, [])

    return (
        <div className="mt-20">
            <h2 className="text-5xl text-black text-center my-12 font-bold">Feature Section</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featureData.map((feature, index) => (
                    <div className="flex flex-col justify-center items-center bg-gray-200 px-12 py-12 text-center rounded shadow-lg space-y-4" key={index}>
                        <p className="text-5xl">{React.createElement(iconsMap[feature.icon])}</p>
                        <h3 className="text-2xl font-bold text-black">{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;