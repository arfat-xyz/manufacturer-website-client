import { Route, Routes } from "react-router-dom";
import Blog from "./Blog/Blog";
import Dashboard from "./Dashboard/Dashboard";
import Home from "./Home/Home";
import Login from "./Login/Login";
import MyPortfolio from "./MyPortfolio/MyPortfolio";
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";
import NotFound from "./Shared/NotFound";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/myportfolio" element={<MyPortfolio />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
