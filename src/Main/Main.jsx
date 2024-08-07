import { Outlet, useLocation } from "react-router-dom";
import Navber from "../sharepages/Navber";
import Footer from "../sharepages/Footer";


const Main = () => {

    const location = useLocation();
    const hideNavAndFooter = ['/login', '/register'].includes(location.pathname);
    
    return (
        <div>
            {!hideNavAndFooter && <Navber/> }
            <Outlet/>
            {!hideNavAndFooter && <Footer/> }
        </div>
    );
};

export default Main;