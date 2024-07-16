import React from 'react'
import moment from 'moment'
import { BsThreeDotsVertical } from 'react-icons/bs'

function Post({post}) {

    return (
        <div className='mt-2 shadow-lg p-4'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <img src={post?.userId?.profilePicture} className='w-12 cursor-pointer' alt="" />
                    <span className="font-semibold">{post?.userId?.username}</span>
                    <span className='text-sm'>{moment(post?.createdAt).fromNow()}</span>
                </div>
                <div className='cursor-pointer'>
                    <BsThreeDotsVertical />
                </div>
            </div>
            <div>
                <p className='my-3'>{post?.desc}</p>
                <img src={`http://localhost:3000/uploads/${post?.postImage}`} alt="" />
            </div>
            <div className='flex justify-between mt-3'>
                <div className='flex  items-center gap-1'>
                    <img src={`../../public/like.png`} alt="like" className='w-6 cursor-pointer' />
                    <img src={`../../public/heart.png`} alt="heart" className='w-6 cursor-pointer' />
                    <span className='text-sm'>32 People liked</span>
                </div>
                <div>
                    <span className='text-sm cursor-pointer border-b-4 border-dashed '>9 Comments</span>
                </div>
            </div>
        </div>
    )
}

export default Post
