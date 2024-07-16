import React from 'react'

function Close({follower}) {

    return (
        <div className="flex dark:border dark:border-teal-400 dark:me-3 dark:p-2 dark:rounded-lg items-center gap-2 ms-10">
            <img src={follower?.profilePicture} className='w-12 h-12 rounded-full' alt="" />
            <span className="font-semibold">{follower?.username}</span>
        </div>
    )
}

export default Close
