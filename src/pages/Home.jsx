import Mode from "../components/Mode";
import { useDispatch} from "react-redux";
import { removeToken } from "../redux/tokenSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function handleLogout() {
    dispatch(removeToken())
    navigate('/register')
  }
  return (
    <div className='w-1/2 bg-white dark:bg-[#181818] rounded-lg mx-auto mt-4 py-6 px-[40px]'>
      <div className="homeMode ml-40 pt-4">
      <Mode></Mode>
      </div>
      <h1 className="text-center font-bold text-2xl text-black dark:text-[#797979]">About user</h1> 
      <div className="flex gap-10 items-center w-ful mx-auto mt-8 ">
      <img src="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png" alt="user" width={100}  height={100}/>
        <div className="name">
          <h1 className="text-black dark:text-[#797979] text-2xl">  Name: John</h1>
          <h3  className="text-black dark:text-[#797979]">Email: John@gmail</h3>
          <h4  className="text-black dark:text-[#797979]">Password: 1234</h4>
          </div>
          <div onClick={handleLogout} className="ml-10 cursor-pointer">
            <span className="text-white p-2 rounded-md dark:text-[#797979] bg-red-600">Logout</span>
          </div>
      </div>
    </div>
  )
}

export default Home
