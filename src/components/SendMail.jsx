import React, { useState } from 'react'

import { RxCross2 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import store from '../Redux/Store'
import { setOpen } from '../Redux/appSlice'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import {db} from "../firebase";

export const SendMail = () => {
    // const open = useSelector(store =>store.appSlice.open);
    const open = useSelector(store => store.appSlice.open)
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        to: "",
        subject: "",
        message: ""
    })

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        // console.log(formData, "FORMDATAAAAA")
        await addDoc(collection(db, "emails"),
            {
                to: formData.to,
                subject: formData.subject,
                message: formData.message,
                createAt : serverTimestamp()
            })
        dispatch(setOpen(false))
        setFormData({
            to: "",
            subject: "",
            message: ""
        })
    }
    return (
        <div className={` ${open ? 'block' : 'hidden'} bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md  flex flex-col`}>
            <div className='flex items-center justify-between py- px-3 bg-[#F2F6Fc] rounded-t-md'>
                <span>
                    New Message
                </span>
                <div
                    onClick={() => dispatch(setOpen(false))}
                    className="icons p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                    <RxCross2 size={'12px'} />
                </div>
            </div>
            <form action="" className='flex flex-col p-3 gap-2'>
                <input onChange={changeHandler} value={formData.to} name='to' type="text" placeholder='To' className='outline-none py-1' />
                <input onChange={changeHandler} value={formData.subject} name='subject' type="text" placeholder='Subject' className='outline-none py-1' />
                <textarea onChange={changeHandler} value={formData.message} name='message' cols={'30'} rows={'10'} className='outline-none py-1'>

                </textarea>
                <button onClick={submitHandler} className='rounded-full w-fit px-4 text-white font-medium bg-[#000a57]'>Send</button>
            </form>
        </div>
    )
}
