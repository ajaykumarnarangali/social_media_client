import React, { useEffect, useState } from 'react'
import Share from './Share'
import Post from './Post'
import { useSelector } from 'react-redux'

function UserPosts() {

    const { currentUser } = useSelector(state => state.user);
    const [userPosts, setUserposts] = useState([]);

    useEffect(() => {

        const getuserPosts = async () => {
            try {
                const res = await fetch('/api/post/user-post');
                const data = await res.json();
                if (data.success == false) {
                    console.log(data.message);
                    return;
                }
                setUserposts(data.posts)
            } catch (error) {
                console.log(error)
            }
        }

        getuserPosts();

    }, []);

    return (
        <div className='feed'>
            <div className='p-5'>
                <Share setUserposts={setUserposts} />
                {
                    userPosts.length > 0 &&
                    userPosts.map((post) => (
                        <Post post={post} key={post?._id}/>
                    ))
                }
            </div>
        </div>
    )
}

export default UserPosts
