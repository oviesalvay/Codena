import stripe from '../Partners/stripe.png'
import orfium from '../Partners/orfium.png'
import kinsta from '../Partners/kinsta.png'
import bankable from '../Partners/bankable.png'
import nowports from '../Partners/nowports.png'
import './partners.scss'
const Partners = () =>{
    return(
        <section className='partners'>
            <p>Trusted by 3000+ partners & customers</p>
        <img src={stripe}alt=""/>
        <img src={kinsta}alt=""/>
        <img src={orfium}alt=""/>
        <img src={bankable}alt=""/>
        <img src={nowports}alt=""/>
        
        

        </section>
    )
}
export default Partners;