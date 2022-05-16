import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn btn-secondary w-32 font-bold text-white text-sm bg-gradient-to-r from-secondary to-primary">{children}</button>
    );
};

export default PrimaryButton;