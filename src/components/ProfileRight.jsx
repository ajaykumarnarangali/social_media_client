import React from 'react'
import Close from './Close'

function ProfileRight() {
    return (
        <div className='rightbar w-100 shadow-lg  md:h-[calc(100vh-50px)]'>
            <div className="w-100 px-3">
                <div className='p-4'>
                    <h1 className='font-semibold text-lg'>User Information</h1>
                    <p>City :<span className='font-light'>Calicut</span></p>
                    <p>From :<span className='font-light'>India</span></p>
                    <p>RelationShip :<span className='font-light'>Married</span></p>
                </div>
                <div className='p-4'>
                    <h1 className='font-semibold text-lg'>User Friends</h1>
                    <div className='flex flex-col mt-3 gap-2'>
                        <Close/>
                        <Close/>
                        <Close/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileRight
