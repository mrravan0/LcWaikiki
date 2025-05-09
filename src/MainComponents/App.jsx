import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import Header from "../Components/Layout/Header/Header";
import HomePage from '../Pages/HomePage/HomePage';
import Footer from "../Components/Layout/Footer/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Fragment>
  )
}

export default App
