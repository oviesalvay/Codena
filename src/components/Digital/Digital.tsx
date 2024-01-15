import manage from '../Digital/manage.png'
import girl from '../Digital/girl.png'
import spend from '../Digital/spend.png'
import Grayscale from '../Digital/Grayscale.png'
import card from '../Digital/card.png'
import './digital.scss'
const Digital = () =>{
    return(
        <section className='digital'>
        <p>Flex Your Digital Wealth with Cadena</p>
        <div className="cards">
            <div>
            <div className='card1'>
            <div className="card">
                <h5><span>Versatile </span>Use</h5>
                <p>Use your digital card for online purchases, in-store purchases, and more</p>
                <img src={card}alt=""/>
            </div>
            <div className="card">
                <h5>Accepted <span>Eveywhere</span></h5>
                <p>Use your digital card at any merchant that accepts Visa or Mastercard.</p>
                <img src={Grayscale}alt=""/>
            </div>
           </div>
           <div className='card1'>
            <div className="card">
                <h5> <span>Easy </span>Management</h5>
                <p>Manage your digital card and transactions easily through our user-friendly app.</p>
                <img src={manage}alt=""/>
            </div>
           
            <div className="card">
                <h5><span>Customer</span> Support</h5>
                <p>Our team is ready to help you with any questions or issues you may have.</p>
                <img src={girl}alt=""/>
            </div>
            </div></div>
            <div className='card2'>
            <div className="card">
                <h5><span>Effortlessly Spend</span></h5>
                <p>Our digital card allows you to spend your digital assets with ease."</p>
                <img src={spend}alt=""/>
            </div></div>
        </div>
        </section>
    )
}
export default Digital;