import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const token = useSelector((state) => state.token.value);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!token && location.pathname != "/register") {
      navigate("/login");
    }
  }, [navigate, token]);

  function ProtectedRoute({ children, isAuth, redirecTo = "/login" }) {
    if (!isAuth) {
      navigate(redirecTo);
    }
    return children;
  }
  return (
    <div className="dark:bg-black">
      <Routes>
        {/* public */}
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
        {/* protected */}
        <Route
          path="/"
          element={
            <ProtectedRoute isAuth={token ? true : false}>
              <Home></Home>
            </ProtectedRoute>
          }></Route>
      </Routes>
    </div>
  );
}

export default App;
