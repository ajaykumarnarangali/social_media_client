import React from 'react'
import Share from './Share'
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
      <div className='p-5'>
         <Share/>
         <Post/>
         <Post/>
         <Post/>
         <Post/>
      </div>
    </div>
  )
}

export default Feed
