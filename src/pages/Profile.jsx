import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import ProfileRight from '../components/ProfileRight'
import UserPosts from '../components/UserPosts'

function Profile() {
  return (
    <div>
      <Header />
      <div className="flex-col md:flex-row flex">
        <div>
          <Sidebar />
        </div>
        <div className='w-full'>
          <div>
            <div className='w-full flex-1 relative flex flex-col items-center'>
              <img src={'../../public/banner.jpeg'} className='w-full h-80 cursor-pointer' alt="" />
              <div className=' w-44 h-44 bg-white rounded-full  absolute bottom-[-70px] flex justify-center items-center cursor-pointer'>
                <img src={'../../public/profile.jpeg'} className='w-40 h-40 rounded-full' alt="" />
              </div>
            </div>
            <div className='mt-16'>
              <h2 className='text-center font-semibold'>Ajay kumar N</h2>
              <p className='text-center'>Hello my friends!!</p>
            </div>
          </div>
          <div className='flex'>
            <UserPosts/>
            <ProfileRight/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
