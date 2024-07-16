import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { FaUser } from 'react-icons/fa'
import { IoIosNotifications } from "react-icons/io";
import { BiMessageSquareDetail } from "react-icons/bi";
import { Dropdown, Avatar } from 'flowbite-react';
import { Link,useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../redux/user/userSlice'

function Header() {

  const { currentUser } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const [searchTerm,setSearchTerm]=useState('');

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/auth/sign-out');
      const data = await res.json();

      if (data.success == false) {
        console.log(data.message);
        return;
      }
      dispatch(signOut());
    } catch (error) {
      console.log(error)
    }
  }

  const handleSearch=(e)=>{
    e.preventDefault();
    navigate(`/search?searchTerm=${searchTerm}`);
  }

  return (
    <div className='w-100 px-3 py-3 dark:border-b dark:border-b-teal-300 dark:bg-[rgb(16,23,42)] bg-blue-700 h-[50px] flex items-center justify-between'>
      <div className='p-1 text-2xl font-semibold text-white'>
        <Link to={'/home'}>
          Social_Media
        </Link>
      </div>
      <form className="relative w-[500px] hidden md:block" onSubmit={handleSearch}>
        <input
          type="text"
          className="w-full p-2 rounded-md border dark:bg-blue-300 border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Search..."
          onChange={(e)=>{setSearchTerm(e.target.value)}}
        />
        <BiSearch className="absolute right-2 top-3 text-gray-400" />
      </form>
      <div>
        <ul className='flex text-white gap-3 cursor-pointer font-semibold'>
          <li>Home</li>
          <li>Timeline</li>
        </ul>
      </div>
      <div className='flex gap-4 items-center'>
        <div>
          <FaUser size={'25px'} color='white' cursor={'pointer'} />
        </div>
        <div>
          <BiMessageSquareDetail size={'25px'} color='white' cursor={'pointer'} />
        </div>
        <div>
          <IoIosNotifications size={'25px'} color='white' cursor={'pointer'} />
        </div>
      </div>
      <div className='me-3'>
        <Dropdown arrowIcon={false} className='p-2' inline label={<Avatar img={currentUser?.profilePicture} rounded className='border w-10 h-10 rounded-full' />}>
          <Dropdown.Header>
            <span className="block text-sm">{currentUser?.username}</span>
            <span className="block truncate text-sm font-medium">{currentUser?.email}</span>
          </Dropdown.Header>
          <Dropdown.Divider />
          <Dropdown.Item>
            <Link to={`/profile/${currentUser._id}`}>
              Profile
            </Link>
          </Dropdown.Item>
          <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  )
}

export default Header
