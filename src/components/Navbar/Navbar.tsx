import Union from '../Navbar/Union.png'
import './Navbar.scss'
const Navbar = () =>{
    return(
        <>
        <header>
            <nav>
                <div className='register'>
                    <div>
                    <img src={Union}alt=""/>
                    </div>
                    <div>
                    <a href="Home">Home</a>
                    <a href="Home">Privacy</a>
                    <a href="Home">Terms</a>
                    </div>
                </div>
                <div className='register'>
                <div>
                    <a href="login">Login</a>
                </div>
                <div>
                    <button className='Sign'>Sign Up</button>
                </div>
                </div>
            </nav>
        </header>
        </>
    )
}
export default Navbar;