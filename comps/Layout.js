import Footer from "./Footer"
import Navigation from "./Navbar"

const Layout = ({children}) => {
    return (
        <div className="content">
            <Navigation />
            {children}
            <Footer />
        </div>
    );
}
 
export default Layout;