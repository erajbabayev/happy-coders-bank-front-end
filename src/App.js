import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "./Header/Navbar";
import MainPage from "./Pages/MainPage/MainPage";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <MainPage />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
