import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import Header from "../Components/Layout/Header/Header";
import Footer from "../Components/Layout/Footer/Footer";
import HomePage from '../Pages/HomePage/HomePage';
import WomenPage from "../Pages/WomenPage/WomenPage";
import MenPage from "../Pages/MenPage/MenPage";
import ChildrenPage from "../Pages/ChildrenPage/ChildrenPage";
import BabyPage from "../Pages/BabyPage/BabyPage";
import LcwHomePage from "../Pages/LcwHomePage/LcwHomePage";
import SalePage from "../Pages/SalePage/SalePage";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import WhishListPage from "../Pages/WhishListPage/WhishListPage";
import CartPage from "../Pages/CartPage/CartPage";
function App() {
  return (
    <Fragment>
      <Header />
      <main style={{ paddingBlock: '20px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/children" element={<ChildrenPage />} />
          <Route path="/baby" element={<BabyPage />} />
          <Route path="/lcwHome" element={<LcwHomePage />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/whishList" element={<WhishListPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
      <Footer />
    </Fragment>
  )
}

export default App
