import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ card }) => {
    const { name, img } = card;
    const navigate = useNavigate()
    const handleNavigate = (id) => {
        navigate(`/productCollections/${id}`)
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions">
                
                    <button onClick={() => handleNavigate(card._id)}  className="btn btn-primary">See all Bike</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;