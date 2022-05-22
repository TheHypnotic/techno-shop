import Navbar from "./components/navbar";
import Homepage from "./pages/homepage";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "./pages/singleProduct";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
