import React, { useState } from 'react'
import { LuPencil } from 'react-icons/lu'
import { TbStar } from "react-icons/tb";
import { BiAlarmSnooze } from "react-icons/bi";
import { IoSend } from "react-icons/io5";
import { RiDraftFill } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { IoMdAlarm } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { setOpen } from '../Redux/appSlice';
export const Silebar = () => {


    const sidebarItems = [{
        icon: <LuPencil size={"22px"} className='ml-2 mr-4 text-gray-500 hover:text-gray-400' />,
        text: "Inbox"

    },
    {
        icon: <TbStar size={"22px"} className='ml-2 mr-4 text-gray-500 hover:text-gray-400' />,
        text: "Starred"
    },
    {
        icon: <IoMdAlarm size={"22px"}  className='ml-2 mr-4 text-gray-500 hover:text-gray-400' />,
        text: "Snoozed"
    }, {
        icon: <IoSend size={"22px"}  className='ml-2 mr-4 text-gray-500 hover:text-gray-400'/>,
        text: "Send"
    },
    {
        icon: <RiDraftFill size={"22px"}  className='ml-2 mr-4 text-gray-500 hover:text-gray-400'/>,
        text: "Drafts"
    },
    {
        icon: <MdOutlineKeyboardArrowDown size={"22px"}  className='ml-2 mr-4 text-gray-500 hover:text-gray-400'/>,
        text: "More"
    },
    ]

    // const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    return (
        <div className='w-[15%]   md:block hidden py-3 '>

            <button onClick={()=>dispatch(setOpen(true))} className='bg-[#C2E7FF] flex g-[20px] p-4 mx-4 items-center rounded-[15px] hover:shadow-md ease-in-out duration-300'  >
                <LuPencil size={'20px'} className='text-gray-600' />
                <span className='pl-3 font-medium text-gray-600' >Compose</span>
            </button>
            <div className='my-5'>
                {
                    sidebarItems.map((item, index) => {
                        return (<div key={index}>
                            <div className=" flex px-4 items-center  py-1 my-2 hover:bg-[#eae8e8] w-[90%] rounded-r-full cursor-pointer  " >
                               
                                {item.icon}
                                <p className='font-medium text-gray-500 hover:text-gray-400' >{item.text}</p>
                            </div>
                        </div>)
                    })
                }

            </div>

        </div>
    )
}
// #C2E7FF