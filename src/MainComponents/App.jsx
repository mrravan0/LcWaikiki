import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import Header from "../Components/Layout/Header/Header";
import Footer from "../Components/Layout/Footer/Footer";
import HomePage from '../Pages/HomePage/HomePage';
import WomenPage from "../Pages/WomenPage/WomenPage";
function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/women" element={<WomenPage />} />
      </Routes>
      <Footer />
    </Fragment>
  )
}

export default App
