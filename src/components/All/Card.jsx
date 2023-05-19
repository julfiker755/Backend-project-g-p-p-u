import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({coffce,handledelete}) => {
    const {_id,name,supperlier,tasle,photo}=coffce
    const navigate=useNavigate()
    return (
        <div className="card card-side p-3 bg-[#114675] justify-between shadow-xl items-center space-x-4">
            <figure><img className='w-[220px] h-[210px]' src={photo} alt="Movie" /></figure>
            <div>
                <h2 className="card-title">Name:{name}</h2>
                <p>author:{tasle}</p>
                <p>Supplier:{supperlier}</p>
            </div>
            <div className="btn-group btn-group-vertical">
                <button className="btn btn-active">Info:</button>
                <button onClick={()=>handledelete(coffce)}  className="btn">Delete</button>
                <button onClick={()=>navigate(`/update/${_id}`)} className="btn">Edit</button>
            </div>
        </div>
    );
};

export default Card;