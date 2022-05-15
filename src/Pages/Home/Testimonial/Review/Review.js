import React from 'react';

const Review = ({ review }) => {
    const { avatar, comment, name, location } = review;
    return (
        <div class="card w-96 bg-base-100 shadow-xl mx-auto">
            <div class="card-body">
                <p>{comment}</p>
                <div className='flex items-center mt-8'>
                    <div class="avatar">
                        <div class="w-16 mr-4 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                            <img src={avatar} />
                        </div>
                    </div>
                    <div>
                        <h3 className='font-semibold text-accent text-xl'>{name}</h3>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;