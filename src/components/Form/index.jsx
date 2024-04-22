import { useDispatch } from "react-redux";
import user from "../../assets/user.svg";
import mail from "../../assets/sms.svg";
import lok from "../../assets/lock.svg";
import google from "../../assets/google.svg";
import "./App.css";
import {register} from "../../redux/userSlice"
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
const Form = () => {
  const [type, setType] =useState('password');
  const [show, setShow] =useState("Hide");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  function validate() {
    if (name.current.value.trim() < 3) {
      alert("Name is not valid!")
      return false
    }
    if (email.current.value.trim() < 3) {
      alert("Email is not valid!")
      return false
    }
    if (validateEmail(email.current.value)) {
      alert("Email is not valid!")
      return false
    }
    if (password.current.value.trim() < 3) {
      alert("Password is not valid!")
      return false
    }
    return true
  }
  function handleLogin(e) {
    e.preventDefault()
    const isValid = validate()
    if (isValid) {
      const user = {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value
      };
      dispatch (register(user))
      navigate("/login");
      name.current.value = "",
      email.current.value = "",
      password.current.value = ""

    }
  }

  function handelShow() {
    if (type === 'password') {
      setShow('Show')
      setType('text')
    }else{
      setShow('Hide');
      setType('password');
    }
  }
  return (
    <div>
      <form className="">
        <div className="name mb-4 relative">
          <label htmlFor="name" className="block mb-2 text-base dark:text-[#D8D8D8]">
            Full Name
          </label>
          <input
            ref={name}
            type="text"
            placeholder="John Doe"
            className="w-full h-[45px] border outline-none text-base rounded-md indent-10 dark:bg-transparent dark:text-[#797979]"
          />
          <img
            src={user}
            alt="user"
            className="absolute text-xl top-11 left-2"
          />
        </div>
        <div className="email mb-4 relative">
          <label htmlFor="name" className="block mb-2 text-base dark:text-[#D8D8D8]">
            Email
          </label>
          <input
            ref={email}
            type="email"
            placeholder="example@site.com"
            className="w-full h-[45px] border outline-none text-base rounded-md indent-10 dark:bg-transparent dark:text-[#797979]"
          />
          <img
            src={mail}
            alt="user"
            className="absolute text-xl top-11 left-2"
          />
        </div>
        <div className="password mb-4 relative">
          <label htmlFor="name" className="block mb-2 text-base dark:text-[#D8D8D8]">
            Choose Password
          </label>
          <input
            ref={password}
            type={type}
            placeholder="Minimum 8 characters"
            className="w-full h-[45px] border outline-none text-base rounded-md indent-10 dark:bg-transparent dark:text-[#797979]"
          />
          <span onClick={handelShow} className="absolute top-11 left-[360px] dark:text-[#D8D8D8] cursor-pointer">{
          type == 'password' ? "Show" : "Hide"}</span>
          <img
            src={lok}
            alt="user"
            className="absolute text-xl top-11 left-2"
          />
        </div>
        <div
          onClick={handleLogin}
          className="button5 span w-full bg-[#f8448c] rounded-md cursor-pointer border shadow-md h-[50px] py-[12.5px] mt-7 mb-5">
          <p className="text-center text-white ">Sign Up</p>
        </div>
        <div className="with-google flex w-full border h-[50px] rounded-md items-center justify-center gap-4 cursor-pointer">
          <img src={google} alt="google" width={30} height={30} />
          <span className="text-base text-[#797979] dark:text-[#D8D8D8]">Sign Up with Google</span>
        </div>
        <p className="text-center my-4 cursor-pointer text-[#000] dark:text-[#D8D8D8]">or login with SSO</p>
      </form>
      <hr />
      <p className="text-[11px] text-black dark:text-[#7E7E7E]">
        By lobby the button above, you agree to our{" "}
        <span className="text-[13px] cursor-pointer">Terms of Service</span> and{" "}
        <span className="text-[13px] cursor-pointer">Privacy Policy</span>.
      </p>
    </div>
  );
};

export default Form;
