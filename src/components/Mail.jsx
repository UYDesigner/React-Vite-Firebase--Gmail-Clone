import React from 'react'

import { IoMdMore, IoMdArrowBack } from 'react-icons/io'
import {
  MdDeleteOutline, MdOutlineReport, MdOutlineWatchLater,
  MdMarkEmailUnread,
  MdOutlineDriveFileMove,

  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,

} from 'react-icons/md'
import { BiArchiveIn } from 'react-icons/bi'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from "../firebase"
import { motion } from 'framer-motion'

export default function Mail() {
  var navigation = useNavigate();
  var dispatch = useDispatch();
  const { selectedEmail } = useSelector(store => store.appSlice);
  const { id } = useParams();
  const handleNavigation = (id) => {
    navigation('/')
  }

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "emails", id));
      navigation('/')
    }
    catch (e) {
      console.log(e, 'ERROR IN MAIN DELETATION ')
    }
  }

  const icons = [
    {
      icon: <IoMdArrowBack size={'22px'} />,
      action: handleNavigation
    },
    {
      icon: <BiArchiveIn size={'22px'} />

    },
    {
      icon: <MdOutlineReport size={'22px'} />
    },
    {
      icon: <MdDeleteOutline size={'22px'} />,
      action: handleDelete
    },
    {
      icon: <MdMarkEmailUnread size={'22px'} />
    },
    {
      icon: <MdOutlineWatchLater size={'22px'} />
    },
    {
      icon: <MdOutlineDriveFileMove size={'22px'} />
    },
    {
      icon: <IoMdMore size={'22px'} />
    },

  ]
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}

      className='bg-white flex-1 mx-5 rounded-xl my-3'>
      <div className='flex items-center justify-between px-4'>
        <div className="flex items-center gap-2 text-gray-700 py-2">
          {
            icons.map((item, index) => {
              return (
                <div key={index} className="p-2 rounded-full hover:bg-gray-100 cursor-pointer" onClick={item.action}  >
                  {item.icon}
                </div>
              )
            })
          }
        </div>
        <div className='flex items-center gap-2' >
          <button className="p-2 rounded-full hover:bg-gray-100 cursor-pointer text-gray-500">
            <MdKeyboardArrowLeft size={'22px'} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 cursor-pointer text-gray-500">
            <MdKeyboardArrowRight size={'22px'} />
          </button>
        </div>
      </div>
      <div className='h-[80vh] overflow-y-auto p-4'>
        <div className='flex items-center justify-between bg-white gap-1'>
          <div className="flex items-center gap-2">
            <h1 className='text-xl font-medium'>{selectedEmail?.subject}</h1>
            <span className='text-sm bg-gray-200 rounded-md px-2'>inbox</span>
          </div>
          <div className='flex-none text-gray-400 my-5 text-sm'>
            <p>{new Date(selectedEmail?.createAt?.seconds * 1000).toUTCString()}</p>
          </div>
        </div>
        <div className="text-gray-500 text-sm">
          <h1>{selectedEmail?.to}</h1>
          <span>to me</span>
        </div>
        <div className="my-10">
          {selectedEmail?.message}
        </div>

      </div>
    </motion.div>
  )
}
