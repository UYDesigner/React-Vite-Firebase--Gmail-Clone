import React from 'react'
import { Silebar } from './Silebar'
import { Outlet } from 'react-router-dom'

export default function Body() {
    return (
        <div className='flex'>
            <Silebar />
            <Outlet />
        </div>
    )
}
