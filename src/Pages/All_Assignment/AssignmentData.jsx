import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AssignmentData = ({ data, handleDelete }) => {
    const { title, image, mark, level, date, _id, email, description } = data;



    return (
        <div>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-48 w-full' src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {title}
                        </h2>
                        <p className='text-start'>{description.slice(0, 35)}...</p>
                        <p className='text-start text-2xl font-semibold'>Marks : {mark}</p>
                        <div className="card-actions justify-between items-center mb-3">
                            <div>
                                <p className='text-2xl'> <span className='font-medium'>Level</span> : {level}</p>
                            </div>
                            <div>
                                <p>{date}</p>
                            </div>
                        </div>
                        <div className="card-actions justify-between">
                            <div>
                                <Link to={`/allassignment/details/${_id}`}><button className='px-3 py-2 bg-purple-600 rounded-md text-white font-medium mr-3'>Details</button></Link>
                                <Link to={`/allassignment/update/${_id}`}><button className='px-3 py-2 bg-purple-600 rounded-md text-white font-medium'>Update</button></Link>
                            </div>
                            <div>
                                <button onClick={() => handleDelete(_id, email)} className='px-3 py-2  rounded-md text-white font-medium bg-red-600'>delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

AssignmentData.propTypes = {
    data: PropTypes.object,
    handleDelete: PropTypes.func
}
export default AssignmentData;