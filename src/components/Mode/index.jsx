import { useEffect, useState } from "react";
import { IoMdMoon } from "react-icons/io";
import { LuSun } from "react-icons/lu";
const Mode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
  const element = document.documentElement;
  useEffect(() => {
    if (theme == "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }else{
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme])
  return (
    <div className="mode relative ml-[400px] ">
    <IoMdMoon onClick={() => setTheme(theme == "light" ?  "dark" : "light" )} className= {`absolute cursor-pointer text-xl ${theme == "dark" ? "opacity-0" : "opacity-100"}`}/>
    <LuSun onClick={() => setTheme(theme == "light" ?  "dark" : "light" )} className={`absolute cursor-pointer text-black dark:text-white text-xl ${theme == "light" ? "opacity-0" : "opacity-100"}`}/>
    </div>
  )
}

export default Mode
