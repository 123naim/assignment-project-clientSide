import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AssignmentData = ({ data, handleDelete }) => {
    const { title, image, mark, level, date, _id, email } = data;

    

    return (
        <div className='bg-gray-200 rounded-lg'>
            <img src={image} alt="" />
            <h2>{title}</h2>
            <div className='flex gap-8 justify-center'>
                <h2>{mark}</h2>
                <h2>{level}</h2>
            </div>
            <h2>{date}</h2>
            <p>{email}</p>
            <div className='flex gap-8 justify-center my-3'>
                <Link to={`/allassignment/details/${_id}`}><button className='btn btn-primary'>View Assignment</button></Link>

                <button onClick={() => handleDelete(_id, email)} className='btn btn-secondary'>delete</button>
                <Link to={`/allassignment/update/${_id}`}><button className='btn btn-primary'>Update Assignment</button></Link>
            </div>
        </div>
    );
};

AssignmentData.propTypes = {
    data: PropTypes.object,
    handleDelete: PropTypes.func
}
export default AssignmentData;