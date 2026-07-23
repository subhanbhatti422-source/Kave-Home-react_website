import './Outdoor.css'
import Shop1 from '../../../assets/img/A26S106_194.jpg'
import Shop2 from '../../../assets/img/product1.jpg'
import Shop3 from '../../../assets/img/product2.jpg'
import Shop4 from '../../../assets/img/product3.jpg'
import Shop5 from '../../../assets/img/product4.jpg'
import Shop6 from '../../../assets/img/product5.jpg'
import Shop7 from '../../../assets/img/product6.jpg'
import Shop8 from '../../../assets/img/product7.jpg'
const Outdoor = () => {
    return (
        <>
            <section className="shop">

                <div className="shop-content">
                    <span>Shop</span>
                    <p>Shop our thoughtfully curated collection designed to elevate every space. Discover furniture and home essentials crafted with premium materials, timeless designs, and exceptional attention to detail. Pieces made to bring comfort, style, furniture and home </p>
                </div>

                <div className="Shop-Img">
                    <div className="box1">
                    <img src={Shop1} alt="" />
                    <p>In time for summer</p>
                        
                    </div>
                    <div className="box1">
                        
                    <img src={Shop2} alt="" />
                    <p>Garden chairs</p>
                    </div>

                    <div className="box1">
                        
                    <img src={Shop3} alt="" />
                    <p>Garden table</p>
                    </div>
                    
                    <div className="box1">
                    <img src={Shop4} alt="" />
                    <p>Garden sofas</p>
                        
                    </div>

                    <div className="box1">
                    <img src={Shop5} alt="" />
                    <p>Garden sets</p>
                        
                    </div>

                    <div className="box1">
                        
                    <img src={Shop6} alt="" />
                    <p>Garden armchairs <br /> and pouffes</p>
                    </div>

                    <div className="box1">
                    <img src={Shop7} alt="" />
                    <p>Outdoor stools and <br /> benches</p>
                        
                    </div>

                    <div className="box1">
                    <img src={Shop8} alt="" />
                    <p>Loungers and deck <br /> chairs</p>
                        
                    </div>
                </div>

            </section>

        </>
    )
}

export default Outdoor
