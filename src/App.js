import Newsletter from "./Components/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";
import Approutes from "./Routes";
// swiper css
import "swiper/css/bundle";

function App() {
  return (
    <div>
      <Approutes />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
