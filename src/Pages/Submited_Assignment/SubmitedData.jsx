import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../Provider/AuthProvider";

const SubmitedData = ({ data }) => {
    const { user } = useContext(AuthContext)
    const { title, mark, _id, assignmentStatus, marks } = data;
    const pending = assignmentStatus === 'Pending';
    return (
        <div>
            <div>
                <div className="card w-96 h-44 pb-4 bg-gray-100 text-black">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{user.displayName}</h2>
                        <p>{title}</p>
                        <div className="card-actions items-center gap-8 mt-3 justify-center">
                            <p className='card-title'>  {
                                pending ? <>
                                <p className='card-title'>Marks : {mark}</p>
                                </> : <></>
                            }</p>
                            <button>
                                {
                                    pending ? <>
                                        <Link to={`givemark/${_id}`}><button className='btn btn-secondary'>Give Mark</button></Link>
                                    </> : <><p className='card-title'>Marks : {marks}/{mark}</p></>
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


SubmitedData.propTypes = {
    data: PropTypes.object
}
export default SubmitedData;