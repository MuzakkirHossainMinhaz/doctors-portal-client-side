import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review/Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            avatar: people1,
            name: "Winson Herry",
            location: "California"
        },
        {
            _id: 2,
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            avatar: people2,
            name: "Winson Herry",
            location: "California"
        },
        {
            _id: 3,
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            avatar: people3,
            name: "Winson Herry",
            location: "California"
        },
    ]
    return (
        <section className='my-24'>
            <div className='flex justify-between mx-5 lg:mx-0'>
                <div>
                    <h3 className='text-primary font-bold text-xl'>Testimonial</h3>
                    <h1 className='text-accent text-4xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;