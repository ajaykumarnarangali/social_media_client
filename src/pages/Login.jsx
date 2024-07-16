import { Button, TextInput } from 'flowbite-react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {signIn} from '../redux/user/userSlice'

function Login() {

  const [form,setForm]=useState({email:'',password:''});
  const [error, setError] = useState(null);

  const navigate=useNavigate();
  const dispatch=useDispatch();

  const handlChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res=await fetch('/api/auth/sign-in',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(form)
      })
      const data=await res.json();

      if(data.success==false){
        setError(data.message);
        return;
      }
      dispatch(signIn(data.user));
      navigate('/home');

    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className='w-100 min-h-screen flex items-center justify-center bg-[#f0f2f5]'>
      <div className='max-w-3xl flex w-full'>
        <div className='flex-1 flex flex-col items-start justify-center p-5'>
          <h1 className=' font-extrabold text-3xl text-blue-600'>Social_Media</h1>
          <p className='font-semibold'>
            Connect with the friends and world around you this app
          </p>
        </div>
        <div className='flex-1 p-5'>
          <form className='flex flex-col gap-4 bg-white p-5' onSubmit={handleLogin}>
            <TextInput placeholder='Enter email' name='email' onChange={handlChange}/>
            <TextInput placeholder='Enter Password' name='password' onChange={handlChange}/>
            <Button gradientMonochrome={'info'} type='submit' className='w-full'>Log In</Button>
            <span className='text-blue-600 text-center'>Forgott Password?</span>
            <Link to={'/sign-up'}>
              <Button gradientMonochrome={'success'} className='w-full'>Create a Account</Button>
            </Link>
            {error && <p className='text-red-500'>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
