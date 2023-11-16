import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SubmitedData = ({ data }) => {
    const { title, mark, email, _id, assignmentStatus, marks } = data;
    const pending = assignmentStatus === 'Pending';
    return (
        <div>
            <h2>{title}</h2>
            <h2>{marks}/{mark}</h2>
            <p>{email}</p>
            <p>{assignmentStatus}</p>
            <div>
            </div>
            {
                pending ? <>
                    <Link to={`givemark/${_id}`}><button className='btn btn-secondary'>Give Mark</button></Link>
                </> : <></>
                
            }
        </div>
    );
};


SubmitedData.propTypes = {
    data: PropTypes.object
}
export default SubmitedData;