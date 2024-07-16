import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {updateUser} from '../redux/user/userSlice'

function Search() {
    const friendImage = "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"

    const { currentUser } = useSelector(state => state.user);
    const dispatch=useDispatch();
    const [users, setUsers] = useState([]);

    const location = useLocation().search;

    useEffect(() => {
        const urlParams = new URLSearchParams(location);
        const getUsers = async () => {
            try {
                const res = await fetch(`/api/user/search-user?${urlParams}`);
                const data = await res.json();
                if (data.success == false) {
                    console.log(data.message);
                    return
                }
                setUsers(data.users);
            } catch (error) {
                console.log(error);
            }
        }
        getUsers();
    }, [location])

    const handleFollow=async(id)=>{
        try {
            const res=await fetch(`/api/user/follow/${id}`,{
                method:'PUT'
            });
            const data=await res.json();
            if(data.success==false){
                console.log(data.message);
                return;
            }
            dispatch(updateUser(data)); 
        } catch (error) {
            console.log(error)
        }
    }

    const handleUnfollow=async(id)=>{
        try {
            const res=await fetch(`/api/user/unfollow/${id}`,{
                method:'PUT'
            });
            const data=await res.json();
            if(data.success==false){
                console.log(data.message);
                return;
            }
            dispatch(updateUser(data)); 
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className='w-full dark:bg-[rgb(31,41,55)] bg-slate-300'>
            <Header />
            <div className='max-w-2xl dark:bg-[rgb(31,41,55)] bg-slate-200 mx-auto min-h-[calc(100vh-50px)] p-10 flex flex-col gap-3'>
                {
                    users.length > 0 ?
                        users.map((user) => (
                            <div className='w-full bg-white p-1 rounded-lg flex justify-between items-center'>
                                <div className='flex items-center gap-5'>
                                    <img src={user.profilePicture} className='w-14 h-14 rounded-full' alt="" />
                                    <span className='font-semibold'>{user.username}</span>
                                </div>
                                <div className='px-2'>
                                    {
                                        currentUser.following.includes(user._id) ?
                                            <button className='border border-blue-600 text-blue-500 p-1 px-3 font-semibold rounded-lg' onClick={()=>{handleUnfollow(user._id)}}>Following</button>
                                            :
                                            <button className='bg-blue-600 text-white p-1 px-3 font-semibold rounded-lg' onClick={()=>{handleFollow(user._id)}}>Follow</button>
                                    }
                                </div>
                            </div>
                        )) :
                        <div className='w-full bg-white p-1 py-4 rounded-lg flex  justify-center items-center'>
                            <p className='font-semibold'>No user found!!</p>
                        </div>
                }
            </div>
        </div>
    )
}

export default Search
