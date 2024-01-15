import arrow from '../Money/arrow.png'
import './Money.scss'
import CTA from '../Money/CTA.png'
import image from '../Money/image.png'
const Money = () =>{
    return(
        <section className="money-intro">
            <div className='flex1'>
            <div className="money">
                <div>
        <p className="new"><span id="new">New!</span>
 Refer a friend & Get 25%</p>
                </div>
<div>
    <img src={arrow} alt=""/>
</div>
            </div>
            <div className='app'>
            <h1>Spend Your <span>Money Style in </span>with a Customized Card</h1>
            <p>Use your digital card for online purchases, in-store purchases, and more.</p>
            <img src={CTA} alt="" className='apps'/>
            </div>
            </div>
            <div className='flex2'>
                <img src={image} alt=""/>
            </div>
            
        </section>
    )
}
export default Money