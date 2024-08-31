import React from 'react'
import { MdCropSquare } from 'react-icons/md'
import { RiStarLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSelectedEmail } from '../Redux/appSlice'
import { motion } from 'framer-motion'

export const Msg = ({ email }) => {
    var naviagate = useNavigate();
    var dispatch = useDispatch();

    const openMail = () => {
        dispatch(setSelectedEmail(email))
        naviagate(`/mail/${email?.id}`)
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}

            onClick={openMail} className='flex items-start justify-between border-b-1 border-gray-200 px-4 py-2 text-sm hover:cursor-pointer hover:shadow-md '>
            <div className='flex items-center gap-3'>
                <div className='flex-none text-gray-300'>
                    <MdCropSquare className='w-5 h-5' />

                </div>
                <div className='flex-none text-gray-300'>
                    <RiStarLine className='w-5 h-5' />

                </div>
                <div>
                    <p className=' font-medium'>{email?.to}</p>
                </div>
            </div>
            <div className="flex-1 ml-4">
                <p className='text-gray-600 truncate inline-block'>{email?.message}</p>
            </div>
            <div className='flex-none text-gray-400 text-sm pl-4'>
                <p>{new Date(email?.createAt?.seconds * 1000).toUTCString()}</p>
            </div>
        </motion.div>
    )
}
