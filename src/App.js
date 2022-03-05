import "./styles/home.css"; // use ../ to go back to the parent directory
import Footer from "./components/Footer";
import Home from "./components/Home";
import TopNavbar from "./components/TopNavbar";

function App() {
  return (
    <div className="main-container">
      <TopNavbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
