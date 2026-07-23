
import { Bookmark, Truck } from 'lucide-react'
import './ShopCard.css'
import SiteFooter from '../../Footer/Footer'
import product1 from '../../../assets/img/product1.jpg'
import product2 from '../../../assets/img/product2.jpg'
import product3 from '../../../assets/img/product3.jpg'
import product4 from '../../../assets/img/product4.jpg'
import product5 from '../../../assets/img/product5.jpg'
import product6 from '../../../assets/img/product6.jpg'
import product7 from '../../../assets/img/product7.jpg'
import product8 from '../../../assets/img/product8.jpg'
import product9 from '../../../assets/img/product9.jpg'
import product10 from '../../../assets/img/product10.avif'
import product11 from '../../../assets/img/product11.jpg'
import product12 from '../../../assets/img/product12.jpg'
import product13 from '../../../assets/img/product13.jpg'
import product14 from '../../../assets/img/product14.jpg'
import product15 from '../../../assets/img/product15.jpg'
import product16 from '../../../assets/img/product16.avif'
import product17 from '../../../assets/img/product17.jpg'
import product18 from '../../../assets/img/product18.jpg'
import product19 from '../../../assets/img/product19.jpg'
const PRODUCTS = [
  {
    id: 1,
    name: 'Saconca',
    description: 'Saconca outdoor 3-seater sofa in rope cord and beige galvanised steel 189 cm',
    image: product1, 
    price: 809.10,
    originalPrice: 899,
    discount: 10,
    onSale: true,
    fastDelivery: true,
    swatches: ['#c9b79c', '#7c8a5a'],
  },
  {
    id: 2,
    name: 'Zivia',
    description: 'Zivia outdoor armchair in ecru rope cord and taupe galvanised steel',
    image: product2, 
    
    price: 379,
    originalPrice: null,
    discount: 0,
    onSale: false,
    fastDelivery: true,
    swatches: ['#e5ded1', '#8a7a63'],
  },
  {
    id: 3,
    name: 'Alimia',
    description: 'Alimia stackable outdoor chair in ecru aluminium with beige synthetic rope',
    // image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=600&auto=format&fit=crop',
    image: product3, 

    price: 161.10,
    originalPrice: 179,
    discount: 10,
    onSale: true,
    fastDelivery: true,
    swatchCount: 2,
  },
  {
    id: 4,
    
    name: 'Livadia',
    description: 'Livadia stackable outdoor chair in graphite aluminium',
    // image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=600&auto=format&fit=crop',
    image: product4, 

    price: 115,
    // originalPrice: 179,
    // discount: 10,
    // onSale: true,
    // fastDelivery: true,
    // swatchCount: 2,
  },
  {
    id: 5,
    name: 'Tella',
    description: 'Tella round table in taupe galvanised steel with beige tiles Ø120cm',
    // image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=600&auto=format&fit=crop',
    image: product5, 

    price: 579,
    // originalPrice: 179,
    // discount: 10,
    // onSale: true,
    fastDelivery: true,
    // swatchCount: 2,
  },
  {
    id: 6,
    name: 'Nina',
    description: 'Nina stackable chair in FSC 100% solid acacia wood and ecru rope cord',
    // image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=600&auto=format&fit=crop',
    image: product6, 

    price: 229,
    // originalPrice: 179,
    // discount: 10,
    // onSale: true,
    // fastDelivery: true,
    // swatchCount: 2,
  },
  {
    id: 7,
    name: 'Anafi',
    description: 'Anafi table in sintered stone and ecru aluminium 220 x 100 cm',
    // image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=600&auto=format&fit=crop',
    image: product7, 

    price: 779,
    // originalPrice: 179,
    // discount: 10,
    // onSale: true,
    fastDelivery: true,
    // swatchCount: 2,
  },
  {
    id: 8,
    name: 'Anafi',
    description: 'Anafi table in sintered stone and graphite aluminium 220 x 100 cm',
    // image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=600&auto=format&fit=crop',
    image: product8, 

    price: 779,
    // originalPrice: 179,
    // discount: 10,
    // onSale: true,
    // fastDelivery: true,
    // swatchCount: 2,
  },
  {
    id: 9,
    name: 'Garbet',
    description: 'Garbet cement coffee table, Ø 60 cm',
    // image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=600&auto=format&fit=crop',
    image: product9, 

    price: 251.10,
    originalPrice: 279,
    discount: 10,
    onSale: true,
    fastDelivery: true,
    // swatchCount: 2,
  },
  {
    id: 10,
    name: 'Catalina',
    description: 'Catalina armchair made with beige rope and FSC solid acacia wood',
    // image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=600&auto=format&fit=crop',
    image: product10, 
    price: 521.10,
    originalPrice: 579,
    discount: 10,
    onSale: true,
    fastDelivery: true,
    // swatchCount: 2,
  },
  {
    id: 11,
    name: 'Zuara',
    description: 'Zuara set with 3-seater sofa, 2 armchairs and outdoor table in ecru aluminium and brown synthetic rope cord',
    image: product11, 
    // image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=600&auto=format&fit=crop',
    price: 1709.10 ,
    originalPrice: 1899,
    discount: 10,
    onSale: true,
    fastDelivery: true,
    // swatchCount: 2,
  },
  {
    id: 12,
    name: 'Aiguablava',
    description: 'Aiguablava round coffee table in white cement, Ø 66 cm',
    image: product12, 
    // image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=600&auto=format&fit=crop',
    price: 314.30,
    originalPrice: 449,
    discount: 10,
    onSale: true,
    fastDelivery: true,
    // swatchCount: 2,
  },
  {
    id: 13,
    name: 'Ambra',
    description: 'Ambra 5-seater corner sofa in solid acacia wood with light finish 248cm FSC 100%',
    // image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=600&auto=format&fit=crop',
    image: product13, 

    price: 3399,
    // originalPrice: 179,
    // discount: 10,
    // onSale: true,
    // fastDelivery: true,
    // swatchCount: 2,
  },
  {
    id: 14,
    name: 'Brai',
    description: 'Brai outdoor table in taupe galvanised steel 180 x 90cm',
    image: product14, 

    // image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=600&auto=format&fit=crop',
    price: 479,
    // originalPrice: 179,
    // discount: 10,
    // onSale: true,
    fastDelivery: true,
    // swatchCount: 2,
  },
  {
    id: 15,
    name: 'Brai',
    description: 'Brai stackable outdoor chair with armrests in taupe galvanised steel',
    // image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=600&auto=format&fit=crop',
    image: product15, 

    price: 109,
    // originalPrice: 179,
    // discount: 10,
    // onSale: true,
    fastDelivery: true,
    // swatchCount: 2,
  },
  {
    id: 16,
    name: 'Adredna',
    description: 'Adredna children’s beige outdoor folding hammock made of FSC 100% solid acacia wood',
    image: product16,
    // image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=600&auto=format&fit=crop',
    price: 32.19,
    originalPrice: 45.99,
    discount: 30,
    onSale: true,
    fastDelivery: true,
    // swatchCount: 2,
  },
  {
    id: 17,
    name: 'Adredna',
    description: 'Adredna children’s green outdoor folding hammock made of FSC 100% solid acacia wood',
    // image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=600&auto=format&fit=crop',
    image: product17,
    price: 32.19,
    originalPrice: 45.99,
    discount: 30,
    onSale: true,
    fastDelivery: true,
    // swatchCount: 2,
  },
  {
    id: 18,
    name: 'Serili',
    description: 'Serili set of 2 dark grey cement and fiberglass plant pots Ø 42 cm / Ø 50 cm',
    // image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=600&auto=format&fit=crop',
    image: product18,
    price: 259,
    // originalPrice: 179,
    // discount: 10,
    // onSale: true,
    fastDelivery: true,
    // swatchCount: 2,
  },
  {
    id: 19,
    name: 'Catalina',
    description: 'Catalina double sun lounger in beige rope cord and FSC 100% solid acacia wood',
    // image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=600&auto=format&fit=crop',
    image: product19, 

    price: 1899,
    // originalPrice: 179,
    // discount: 10,
    // onSale: true,
    fastDelivery: true,
    // swatchCount: 2,
  },
]

const formatPrice = (value) =>
  `${value.toLocaleString('en-GB', { minimumFractionDigits: value % 1 === 0 ? 0 : 2, maximumFractionDigits: 2 })} €`

const ProductCard = ({ product }) => (
  <div className="card">

    <div className="card__image-wrap">
      <img src={product.image} alt={product.name} className="card__image" />
      <button aria-label="Save to wishlist" className="card__bookmark">
        <Bookmark size={15} strokeWidth={1.5} />
      </button>

      
    </div>

    <div className="card__body">
      <div className="card__header">
        <h3 className="card__title">{product.name}</h3>
        {product.swatches ? (
          <div className="card__swatches">
            {product.swatches.map((c) => (
              <span key={c} className="card__swatch" style={{ backgroundColor: c }} />
            ))}
          </div>
        ) : (
          <span className="card__swatch-count">+{product.swatchCount}</span>
        )}
      </div>

      <p className="card__description">{product.description}</p>

      <div className="card__price-row">
        {product.onSale && (
          <>
            <span className="card__price--original">{formatPrice(product.originalPrice)}</span>
            <span className="card__discount">-{product.discount}%</span>
          </>
        )}
        <span className="card__price">{formatPrice(product.price)}</span>
      </div>

      <div className="card__tags">
        {product.onSale && <span className="card__tag card__tag--sale">Sale</span>}
        {product.fastDelivery && (
          <span className="card__tag card__tag--delivery">
            <Truck size={12} strokeWidth={1.75} />
            Fast Delivery
          </span>
        )}
      </div>
    </div>
  </div>
)

const SaleBanner = () => (
  <div className="sale-banner">
    <div>
      <h2 className="sale-banner__title">Sale</h2>
      <p className="sale-banner__subtitle">Up to 50% off*</p>
    </div>
    <a href="#" className="sale-banner__link">
      Discover selection
    </a>
  </div>
)

const ShopCard = () => {
  return (
    <section className="shop-section">
      <div className="shop-grid">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <SaleBanner />
      </div>
      <SiteFooter/>
    </section>
  )
}

export default ShopCard