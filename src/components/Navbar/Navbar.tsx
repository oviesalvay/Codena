import { useState } from 'react'
import Union from '../Navbar/Union.png'
import './Navbar.scss'

const Navbar = () =>{
    const [shownav, setShowNav]=useState(false)
const handleClick=()=>{
  setShowNav(!shownav)
}
    return(
        <>
        <header>
            <nav>
                    <img src={Union}alt=""/>
                <div className= {shownav ?  "navlinks navlinks_close" : "navlinks"}>
                    <div className='navbar'>
                    <a href="Home">Home</a>
                    <a href="Home">Privacy</a>
                    <a href="Home">Terms</a>
                    </div>
                <div className='register'>
                <div>
                    <a href="login">Login</a>
                </div>
                <div>
                    <button className='Sign'>Sign Up</button>
                </div>
                </div>
                </div>
                <div onClick={handleClick} className='hamburger'>
                    <span onClick={handleClick}className='bar'></span>
                    <span onClick={handleClick} className='short'></span>
                    <span onClick={handleClick}className='bar'></span>
                </div>
            </nav>
        </header>
        </>
    )
}
export default Navbar;