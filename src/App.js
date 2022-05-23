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
import MyOrder from "./Dashboard/MyOrder";
import AddAReview from "./Dashboard/AddAReview";
import MyProfile from "./Dashboard/MyProfile";
import ManageAllOrders from "./Dashboard/ManageAllOrders";
import AddAProduct from "./Dashboard/AddAProduct";
import ManageProducts from "./Dashboard/ManageProducts";
import RequireAuth from "./Shared/RequireAuth";
import Purchase from "./Purchase/Purchase";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/purchase/:id" element={<Purchase />}></Route>

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route path="myorder" element={<MyOrder />} />
          <Route path="addareview" element={<AddAReview />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route index element={<MyProfile />} />
          <Route path="manageallorders" element={<ManageAllOrders />} />
          <Route path="addaproduct" element={<AddAProduct />} />
          <Route path="manageproducts" element={<ManageProducts />} />
        </Route>
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
