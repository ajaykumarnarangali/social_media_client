import { Button } from 'flowbite-react'
import React, { useRef, useState } from 'react'
import { IoMdPhotos, IoMdPricetags } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmojiEmotions } from 'react-icons/md'
import { useSelector } from 'react-redux'

function Share({ setUserposts }) {

    const { currentUser } = useSelector(state => state.user);
    const [text, setText] = useState("");
    const [image, setImage] = useState("");
    const fileRef = useRef();

    const handleUploadPost = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set('description', text);
        formData.set('image', image);
        try {
            const res = await fetch('/api/post/add-post', {
                method: 'POST',
                body: formData
            })
            const data = await res.json();

            if (data.success == false) {
                console.log(data.message);
                return
            }
            setUserposts(prev => {
                return [ data.post,...prev]
            });
            setText("");
            setImage("");
        } catch (error) {
            console.log(error);
        }
    }


    return (

        <div className='w-100 shadow-lg p-6'>
            <form onSubmit={handleUploadPost}>
                <div className='flex items-center mb-3'>
                    <img src={currentUser?.profilePicture} className='w-14 h-14 dark:me-2 rounded-full' alt="" />
                    <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} placeholder={`what's in your mind ${currentUser?.username}?`} className='shareInput' />
                </div>
                <hr />
                <input type="file" ref={fileRef} className='hidden' onChange={(e) => { setImage(e.target.files[0]) }} />
                <div className='flex justify-between items-center w-full my-8'>
                    <div className='flex gap-3'>
                        <div className='flex cursor-pointer'>
                            <IoMdPhotos color='tomato' size={'25px'} onClick={() => { fileRef.current.click() }} />
                            <span>Photo or Video</span>
                        </div>
                        <div className='flex cursor-pointer'>
                            <IoMdPricetags color='blue' size={'25px'} />
                            <span>Tag</span>
                        </div>
                        <div className='flex cursor-pointer'>
                            <IoLocationSharp color='green' size={'25px'} />
                            <span>Location</span>
                        </div>
                        <div className='flex cursor-pointer'>
                            <MdEmojiEmotions color='gold' size={'25px'} />
                            <span>Feelings</span>
                        </div>
                    </div>
                    <div>
                        <Button gradientMonochrome={'success'} type='submit'>Share</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Share
