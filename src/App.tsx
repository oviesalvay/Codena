import Digital from "./components/Digital/Digital";
import Footer from "./components/Footer/Footer";
import Money from "./components/Money/Money";
import Navbar from "./components/Navbar/Navbar";
import Partners from "./components/Partners/Partners";
import Unique from "./components/Unique/Unique";
const Home = () =>{
  return(
    <>
    <Navbar/>
    <Money/>
    <Partners/>
    <Digital/>
    <Unique/>
    <Footer/>
    </>
  )
}
export default Home;