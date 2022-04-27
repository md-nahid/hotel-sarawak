import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Topbar from "./Components/Topbar/Topbar";
import Approutes from "./Routes";
import Newsletter from "./Components/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";
import cn from "classnames";
// swiper css
import "swiper/css/bundle";

function App() {
  const [state, setState] = useState(false);
  // every page always start from top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (pathname === "/") {
      setState(false);
    } else if (pathname === "/allproducts") {
      setState(false);
    } else {
      setState(true);
    }
  }, [pathname]);

  return (
    <div className={cn(state && "bg-slate-50")}>
      <Topbar />
      <Approutes />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
