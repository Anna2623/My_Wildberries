import { Link } from 'react-router-dom';
import { formatPrice } from "../../utils/helpers";
import "./Product.scss";
import { IProduct } from '../../types';

interface ProductProps {
  product: IProduct;
}

const Product: React.FC<ProductProps> = ({ product }) => {
    
  return (
    <Link to={`/product/${product?.id}`} key={product.id}>
      <div className='product-item bg-white'>
        <div className='category'>{product.category}</div>
        <div className='product-item-img'>
          <img className='img-cover' src={product.images[0]} alt={product.title} />
        </div>
        <div className='product-item-info fs-14'>
          <div className='brand'>
            <span>Бренд: </span>
            <span className='fw-7'>{product?.brand}</span>
          </div>
          <div className='title py-2'>
            {product.title}
          </div>
          <div className='price flex align-center justify-center'>
            <span className='old-price'>
              {formatPrice(product.price)}
            </span>
            <span className='new-price'>
              {formatPrice(Number(product.discountedPrice))}
            </span>
            <span className='discount fw-6'>
              ({product?.discountPercentage}% скидка)
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Product