import React from 'react';
import SingInModel from './SingInModel';

const Registration = ({ createUserEmailPassword }) => {
    return (
        <div>

            <label htmlFor="sing-in-model" className="btn w-full font-bold  btn-warning">Registration</label>
            <SingInModel  />
        </div>
    );
};

export default Registration;