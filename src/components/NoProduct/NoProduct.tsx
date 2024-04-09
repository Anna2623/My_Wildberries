import { no_product_found } from '../../utils/images';

import './NoProduct.scss';

const NoProduct = () => {
  return (
    <div className='container no-product-found'>
      <div className='fw-5 text-danger py-5'>
        <img src={no_product_found} alt="no-product-found" />
        <h3>Товары не найдены.</h3>
        <p>По вашему запросу не было найдено ни одного подходящего товара. <br /> Пожалуйста, попробуйте снова.</p>
      </div>
    </div>
  )
}

export default NoProduct;
