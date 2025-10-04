import { Outlet, useLocation } from "react-router-dom"
import Header from "./Header"

const Layout = () => {

    const location = useLocation();
    const isAboutPage = location.pathname === "/about";


    return (
        <div className={`relative h-screen w-screen bg-cover bg-center transition-all duration-500
        ${isAboutPage ? "bg-[url('/aboutImage.jpg')]" : "bg-[url('homepageTattoo.jpg')]"}
        `}>
            <Header />
            <main className="relative z-10">
                <Outlet />
            </main>
        </div>
    );
}


export default Layout