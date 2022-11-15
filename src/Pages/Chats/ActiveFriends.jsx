import React from 'react';
import { HiPlus } from 'react-icons/hi2';

const ActiveFriends = () => {
    return (
        <div>
            <div className='flex gap-8 mt-3 text-center overflow-x-scroll' >
                <div >
                    <div className=" rounded-full">
                        <div className='p-3 rounded-full bg-slate-700'><HiPlus className='w-6 h-6' /></div>
                    </div>
                    <p className='mt-2 '>Story</p>
                </div>
                <div>
                    <div className="avatar online">
                        <div className="w-12 rounded-full">
                            <img src="https://placeimg.com/192/192/people" alt='friend' />
                        </div>
                    </div>
                    <p>Monni</p>
                </div>
                <div>
                    <div className="avatar online">
                        <div className="w-12 rounded-full">
                            <img src="https://placeimg.com/192/192/people" alt='friend' />
                        </div>
                    </div>
                    <p>Monni</p>
                </div>
                <div>
                    <div className="avatar online">
                        <div className="w-12 rounded-full">
                            <img src="https://placeimg.com/192/192/people" alt='friend' />
                        </div>
                    </div>
                    <p>Monni</p>
                </div>
                <div>
                    <div className="avatar online">
                        <div className="w-12 rounded-full">
                            <img src="https://placeimg.com/192/192/people" alt='friend' />
                        </div>
                    </div>
                    <p>Monni</p>
                </div>
                <div>
                    <div className="avatar online">
                        <div className="w-12 rounded-full">
                            <img src="https://placeimg.com/192/192/people" alt='friend' />
                        </div>
                    </div>
                    <p>Monni</p>
                </div>
                <div>
                    <div className="avatar online">
                        <div className="w-12 rounded-full">
                            <img src="https://placeimg.com/192/192/people" alt='friend' />
                        </div>
                    </div>
                    <p>Monni</p>
                </div>
            </div>
            <div className="form-control">
                <div className="input-group mt-3 ">
                    <input type="text" placeholder="Search…" className="w-full input input-bordered focus:outline-none" />
                    <button className="btn btn-square ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ActiveFriends;