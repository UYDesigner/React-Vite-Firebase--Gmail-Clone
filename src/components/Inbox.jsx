import React, { useState } from 'react'
import { FaCaretDown, FaUserFriends } from 'react-icons/fa'
import { GoTag } from 'react-icons/go'
import { ImTree } from 'react-icons/im'
import { IoMdMore, IoMdRefresh } from 'react-icons/io'
import { MdCropSquare, MdInbox, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { Messages } from './Messages'

export default function Inbox() {

  const mailType = [
    {
      icon: <MdInbox size={'20px'} className='cursor-pointer' />,
      text: 'Primary'
    },
    {
      icon: <GoTag size={'20px'} className='cursor-pointer' />,
      text: 'Promotions'
    },
    {
      icon: <FaUserFriends size={'20px'} className='cursor-pointer' />,
      text: 'Social'
    }
  ]

  const [mailTypeSelected, setMailTypeSelected] = useState(0);

  return (
    <div className='w-[75%]  flex-1 bg-white rounded-xl my-3'>
      <div className='flex items-center justify-between  px-4'>
        <div className='flex items-center gap-2 text-gray-700 py-2 '>
          <div className="flex  gap-2 items-center ">
            <MdCropSquare size={'20px'} className='cursor-pointer' />
            <FaCaretDown size={'20px'} className='cursor-pointer' />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100'>
            <IoMdRefresh size={'20px'} className='cursor-pointer' />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100'>
            <IoMdMore size={'20px'} className='cursor-pointer' />
          </div>


        </div>
        <div className='flex items-center gap-2'>
          <p className='text-sm text-gray-500' >1-50 of 1000</p>
          <button className='hover:rounded-full hover:bg-gray-100' ><MdKeyboardArrowLeft size={'20px'} /></button>
          <button className='hover:rounded-full hover:bg-gray-100' ><MdKeyboardArrowRight size={'20px'} /></button>
        </div>


      </div>
      <div className='h-[90vh] overflow-y-auto  px-4 py-1'>
        <div className='flex items-center gap-1'>
          {
            mailType.map((item, index) => {
              return (
                <button key={index} className={`${mailTypeSelected === index ? ' border-b-4 border-b-blue-500 text-blue-500' : ''} flex gap-5 items-center p-4 w-52 hover:bg-gray-100`}
                  onClick={() => setMailTypeSelected(index)}
                >
                  {item.icon}
                  <span>{
                    item.text
                  }</span>
                </button>
              )
            })
          }
        </div>
        <div className='py-2'>
          <Messages />
        </div>

      </div>


    </div>
  )
}
