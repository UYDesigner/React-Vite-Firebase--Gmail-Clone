import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { BsQuestionCircle } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText, setUser } from '../../Redux/appSlice';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import store from '../../Redux/Store';
export const NavBar = () => {

    const [searchInput, setSearchInput] = useState('');
    const [toggle, setToggle] = useState(false)
    var dispatch = useDispatch();
    const { user } = useSelector(store => store.appSlice);

    const signOutHandler = () => {
        signOut(auth).then(() => {
            dispatch(setUser(null))
        }).catch((e) => {
            console.log(e)
        })
    }


    useEffect(() => {
        dispatch(setSearchText(searchInput))
    }, [searchInput])

    return (
        <div className='flex items-center px-4 py-2 h-16 bg-blue-300 justify-between gap-[40px] '>
            <div className="logo-area flex items-center gap-4">
                <div className='rounded-full cursor-pointer  p-2 grid items-center justify-center
                 hover:bg-[#d9d8d7] '>
                    <RxHamburgerMenu className='size-[20px] rounded-full cursor-pointer   text-[#4d4c4c]  ' />
                </div>
                <div className="logo flex items-center gap-[10px]">
                    <img src="src/assets/mail-logo.png" alt="" className='size-[50px]' />
                    <span className='text-[23px] text-gray-500 font-medium'>GMail</span>
                </div>
            </div>
            <div className="md:block hidden serach-bar  w-[50%] mr-60 flex-row  ml-[20px] ">

                <div className='flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full '>
                    <IoIosSearch size={"24px"} className='text-gray-700 mx-3' />

                    <input type="text" placeholder='Search-Mail' className='rounded-full w-full bg-transparent outline-none px-1' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />

                </div>
            </div>
            <div className="icons md:block hidden">
                <div className='flex items-center gap-2'>
                    <div className='p-2 rounded-full hover:bg-[#d9d8d7] cursor-pointer'>
                        <BsQuestionCircle size={'22px'} className='font-semibold text-gray-600' />
                    </div>
                    <div className='p-2 rounded-full hover:bg-[#d9d8d7]  cursor-pointer'>
                        <IoSettingsOutline size={'22px'} className='font-semibold text-gray-600' />
                    </div>
                    <div className='p-2 rounded-full hover:bg-[#d9d8d7] cursor-pointer'>
                        <PiDotsNineBold size={'22px'} className='font-semibold text-gray-600 ' />
                    </div>
                    <div className='cursor-pointer hover:bg-[#d9d8d7] border border-gray-600  shadow-md rounded-full  relative'>
                        <Avatar onClick={() => setToggle(!toggle)} src={user?.photoURL} size='32' round="true" className='text-gray-700 rounded-full' />
                        <AnimatePresence>
                            {
                                toggle ?
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.1 }}
                                        className='absolute right-2 z-20 shadow-lg bg-white rounded-md'
                                    >
                                        <p className='p-2 underline' onClick={signOutHandler} >LogOut</p>
                                    </motion.div>
                                    :
                                    <>
                                    </>

                            }
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    )
}
