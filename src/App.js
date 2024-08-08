import Navbar from "./components/navbar";
import Homepage from "./pages/homepage";
import Footer from "./components/footer";
import NotExist from "./pages/notExist";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "./pages/singleProduct";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="*" element={<NotExist />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
