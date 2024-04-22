
import Form from "../components/Form"
import Mode from "../components/Mode";

const Register = () => {
  return (
    <div className='w-[500px] bg-white dark:bg-[#181818] dark:text-white rounded-lg mx-auto h-[580px] mt-4 py-6 px-[40px]'>
      <Mode></Mode>
      <h1 className="text-center font-bold text-2xl mb-8">Let's go</h1> 
      <Form></Form>
    </div>
  )
}

export default Register
