import Newsletter from "./Components/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";
import Approutes from "./Routes";
// swiper css
import "swiper/css/bundle";
import Topbar from "./Components/Topbar/Topbar";

function App() {
  return (
    <div>
      <Topbar />
      <Approutes />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
