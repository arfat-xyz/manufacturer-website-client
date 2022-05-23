import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Blog from "./Blog/Blog";
import Dashboard from "./Dashboard/Dashboard";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Signup from "./Login/Signup";
import MyPortfolio from "./MyPortfolio/MyPortfolio";
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";
import NotFound from "./Shared/NotFound";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/myportfolio" element={<MyPortfolio />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
