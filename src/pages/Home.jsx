import { useDispatch } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import remove from '../redux/tokenSlice'

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(remove());
    navigate('/login');
  }
  return (
    <>
        <div className="container mx-auto w-1/2">
         

            <button onClick={handleLogout}>Logout</button>
        </div>
    </>
  )
}

export default Home