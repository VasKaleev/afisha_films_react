import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Sidebar from "../Sidebar/Sidebar";
import Slider from "../Slider/Slider";
import "./App.css";
function App() {
return(
    <div className="container">
        <Header />
        <Main />
        <Sidebar />
        <Slider />
        <Footer />
    </div>
);
}

export default App;