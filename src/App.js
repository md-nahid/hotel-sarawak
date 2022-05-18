import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Topbar from "./Components/Topbar/Topbar";
import Mobilemenu from "./Components/Mobilemenu/Mobilemenu";
import Approutes from "./Routes";
import Newsletter from "./Components/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";
import cn from "classnames";
import { Toaster } from "react-hot-toast";
import toastOptions from "./Components/Toastoptions/Toastoptions";
import useWindowsize from "./Hooks/useWindowsize";
import { useSelector } from "react-redux";
import Search from "./Components/Search/Search";

// swiper css
import "swiper/css/bundle";

function App() {
  let width = useWindowsize();
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

  const s = useSelector((state) => state.isSearch);
  useEffect(() => {
    if (s) {
      document.body.className = "overflow-y-hidden";
    } else {
      document.body.className = "";
    }
  }, [s]);

  return (
    <div className={cn(state && "bg-slate-50")}>
      <Toaster position="top-center" toastOptions={toastOptions} />
      {width < 768 ? <Mobilemenu /> : <Topbar />}
      {s && <Search />}
      <Approutes />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
