import { Button, Sidebar } from "flowbite-react"
import { BiMoon, BiSolidVideos, BiSun } from "react-icons/bi"
import { BsChatSquareText } from "react-icons/bs"
import { FaGraduationCap } from "react-icons/fa"
import { GiSuitcase } from "react-icons/gi"
import { IoBookmarks } from "react-icons/io5"
import { MdEventNote, MdGroups, MdOutlineRssFeed } from "react-icons/md"
import { Link } from "react-router-dom"
import Close from "./Close"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from '../redux/theme/themeSlice'

function Leftbar() {

  const { currentUser } = useSelector(state => state.user);
  const { theme } = useSelector(state => state.theme);
  const dispatch = useDispatch();
  const [followers, setFollowes] = useState([]);


  useEffect(() => {
    const getFollowers = async () => {
      try {
        const res = await fetch('/api/user/followers');
        const data = await res.json();
        if (data.success == false) {
          console.log(data.message);
          return
        }
        setFollowes(data.followers);
      } catch (error) {
        console.log(error)
      }
    }
    getFollowers()
  }, []);

  const handlechangeTheme = () => {
    dispatch(toggleTheme());
  }

  return (
    <div className='sidebar w-100 dark:bg-[rgb(31,41,55)] dark:border-r-pink-300 dark:border-r bg-[rgb(249,250,251)] md:h-[calc(100vh-50px)] overflow-y-scroll'>
      <div className="w-100">
        <Sidebar>
          <Sidebar.Items>
            <Sidebar.ItemGroup className="flex flex-col gap-1">
              <Link>
                <Sidebar.Item icon={MdOutlineRssFeed} as={'div'}>
                  Feed
                </Sidebar.Item>
              </Link>
              <Link onClick={handlechangeTheme}>
                {
                  theme == 'light' ?
                    <Sidebar.Item icon={BiMoon} as={'div'}>
                      Dark
                    </Sidebar.Item>
                    :
                    <Sidebar.Item icon={BiSun} as={'div'}>
                      Light
                    </Sidebar.Item>
                }
              </Link>
              <Link>
                <Sidebar.Item icon={BsChatSquareText} as={'div'}>
                  Chats
                </Sidebar.Item>
              </Link>
              <Link>
                <Sidebar.Item icon={BiSolidVideos} as={'div'} >
                  Videos
                </Sidebar.Item>
              </Link>
              <Link>
                <Sidebar.Item icon={MdGroups} as={'div'}>
                  Groups
                </Sidebar.Item>
              </Link>
              <Link>
                <Sidebar.Item icon={IoBookmarks} as={'div'}>
                  Bookmarks
                </Sidebar.Item>
              </Link>
              <Link>
                <Sidebar.Item icon={GiSuitcase} as={'div'}>
                  Jobs
                </Sidebar.Item>
              </Link>
              <Link>
                <Sidebar.Item icon={MdEventNote} as={'div'}>
                  Events
                </Sidebar.Item>
              </Link>
              <Link>
                <Sidebar.Item icon={FaGraduationCap} as={'div'}>
                  Courses
                </Sidebar.Item>
              </Link>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
        <div className="flex justify-center mb-3">
          <Button size={'sm'} color={'gray'}>Show more....</Button>
        </div>
        <hr />
        <div className="flex flex-col gap-2 mt-2">
          <h1 className="text-center font-semibold text-blue-600 text-xl">Followers</h1>
          {
            followers.length > 0 ?
              followers.map((follower, index) => (
                <Close follower={follower} key={index} />
              )) :
              <h2 className="text-center font-semibold">There is no followers yet!!</h2>
          }
        </div>
      </div>
    </div>
  )
}

export default Leftbar
