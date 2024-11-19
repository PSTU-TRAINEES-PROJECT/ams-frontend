import React from 'react';
import Breadcrumb from './Breadcrumb';

const Banner = () => {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(52, 152, 219, 0.7), rgba(52, 152, 219, 0.7)), url(/images/banner.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff',
            }}
            className="h-[25vh] md:h-[50vh] w-auto flex flex-col items-center justify-center"
        >
            <h1 className="md:text-5xl text-4xl font-bold">About Us</h1>
            <div className="text-lg mt-4">
                <Breadcrumb />
            </div>
        </div>
    );
};

export default Banner;
