
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Rightbar from '../components/Rightbar'

function Home() {
  return (
    <div>
      <Header />
      <div className="flex-col md:flex-row flex">
        <Sidebar />
        <div className='feed overflow-y-scroll max-h-[calc(100vh-50px)]'>
          <Feed />
        </div>
        <Rightbar />
      </div>
    </div>
  )
}

export default Home
