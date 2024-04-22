import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import mail from "../assets/sms.svg";
import lok from "../assets/lock.svg";
import google from "../assets/google.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { addToken } from "../redux/tokenSlice";
import { removeToken } from "../redux/tokenSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import Mode from "../components/Mode";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [type, setType] =useState('password');
  const [show, setShow] =useState("Hide");
  const email = useRef(null);
  const password = useRef(null);
  const users = useSelector(state => state.user.value)
  function handleLogin(e) {
    e.preventDefault();
    let user = users.find((el) => {
      return el.email == email.current.value && el.password == password.current.value
    });
    
    if (user) {
      dispatch(addToken(user.email))
      navigate('/')
    }else{
      alert("Parol yoki email noto'g'ri kiritildi")
    }

  }
  function hideShow() {
    if (type === 'password') {
      setShow('Show')
      setType('text')
    }else{
      setShow('Hide');
      setType('password');
    }
  }
  return (
    <div className="w-[500px] bg-white dark:bg-[#181818] dark:text-white rounded-lg mx-auto h-[520px] mt-4 py-6 px-[40px]">
      <Mode></Mode>
      <h1 className="text-center font-bold text-2xl mb-8 ">Welcome back!</h1>
      <div>
        <form className="">
          <div className="email mb-4 relative">
            <label htmlFor="name" className="block mb-2 text-base">
              Email
            </label>
            <input
              ref={email}
              type="email"
              placeholder="Enter your email"
              className="w-full h-[45px] border outline-none text-base rounded-md indent-10 dark:bg-transparent dark:text-[#797979]"
            />
            <img
              src={mail}
              alt="user"
              className="absolute text-xl top-11 left-2"
            />
          </div>
          <div className="password mb-4 relative">
            <label htmlFor="name" className="block mb-2 text-base">
              Password
            </label>
            <input
              ref={password}
              type={type}
              placeholder="Enter password"
              className="w-full h-[45px] border outline-none text-base rounded-md indent-10 dark:bg-transparent dark:text-[#797979]"
            />
            <p className="text-end mt-1 cursor-pointer">Frogot Password?</p>
            {
             type == 'password' ? 
              <MdOutlineRemoveRedEye
              onClick={hideShow}
              className="absolute top-11 left-[380px] text-[20px] text-gray-500 cursor-pointer z-10"
            />
            : 
            <FaRegEyeSlash
            onClick={hideShow}
            className="absolute top-11 left-[380px] text-[20px] text-gray-500  cursor-pointer" 
          /> 
            }
            <img
              src={lok}
              alt="user"
              className="absolute text-xl top-11 left-2"
            />
          </div>
          <div
            onClick={handleLogin}
            className="button5 span w-full bg-[#f8448c] rounded-md cursor-pointer border shadow-md h-[50px] py-[12.5px] mt-7 mb-5">
            <p className="text-center text-white ">Log In</p>
          </div>
          <div className="with-google flex w-full border h-[50px] rounded-md items-center justify-center gap-4 cursor-pointer">
            <img src={google} alt="google" width={30} height={30} />
            <span className="text-base text-[#797979] dark:text-[#D8D8D8]">
              Sign Up with Google
            </span>
          </div>
          <p className="text-center my-4 cursor-pointer text-[#000] dark:text-[#D8D8D8]">
            or login with SSO
          </p>
          <span className="flex justify-end gap-2">
            Don't have account{" "}
            <NavLink to="/register" className="text-blue-800 underline">
              Go registr
            </NavLink>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
