import React from 'react'

function Online() {
    const friendImage = "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"

    return (
        <div className="flex dark:border dark:border-teal-400 dark:me-3 dark:p-2 dark:rounded-lg items-center gap-2 ms-10">
            <img src={friendImage} className='w-12 h-12 rounded-full' alt="" />
            <span className="font-semibold">Username</span>
        </div>
    )
}

export default Online
