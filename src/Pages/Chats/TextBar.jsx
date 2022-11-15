import React from 'react';
import { RiBubbleChartFill, RiCameraSwitchFill } from "react-icons/ri";
import { HiEmojiHappy, HiOutlinePhotograph, HiThumbUp } from "react-icons/hi";
import { HiMicrophone } from 'react-icons/hi2';

const TextBar = () => {
    return (
        <div className='flex bg-gray-800 p-3 py-1 items-center w-full'>
            <div className='flex gap-2 text-primary '>
                <RiBubbleChartFill  className='w-7 h-7'/>
                <RiCameraSwitchFill className='w-7 h-7'/>
                <HiOutlinePhotograph className='w-7 h-7'/>
                <HiMicrophone className='w-7 h-7'/>
            </div>
            <div>
                <div className="form-control ">
                    <div className="input-group rounded-full">
                        <input type="text" placeholder="Aa" className="w-3/4 focus:outline-none  input input-bordered" />
                        <button className="btn btn-square ">
                            <HiEmojiHappy  className='w-7 h-7 text-primary'/>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <HiThumbUp  className='w-7 h-7 text-primary'/>
            </div>
        </div>
    );
};

export default TextBar;