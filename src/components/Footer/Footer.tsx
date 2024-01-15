import linedin from './linedin.png'
import facebook from './facebook.png'
import twitter from './twitter.png'
import Union from '../Navbar/Union.png'
import './Footer.scss'
const Footer =()=>{
    return(
        <footer>
<div className='social-icon'>
    <img src={twitter}alt=""/>
    <img src={facebook}alt=""/>
    <img src={linedin}alt=""/>
</div>
<div>
    <img src={Union}alt=""/>
</div>
<div>
    <p>Copyright © 2023 cadena. All rights reserved.</p>
</div>
        </footer>
    )
}
export default Footer;