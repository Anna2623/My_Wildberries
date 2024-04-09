import { shopping_cart } from '../../utils/images';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/helpers';
import { getAllCarts, removeFromCart, toggleCartQty, clearCart } from '../../store/cartSlice';
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { IProduct } from "../../types";

import "./CartPage.scss";

interface CartProps {
  carts: IProduct[];
  dispatch: any;
}

const CartPage = () => {
  const dispatch = useAppDispatch();
  const carts: IProduct[] = useAppSelector(getAllCarts);
  const { itemsCount, totalAmount } = useAppSelector((state) => state.cart);

  if (carts.length === 0) {
    return (
      <div className='container my-5'>
        <div className='empty-cart flex justify-center align-center flex-column font-manrope'>
          <img src={shopping_cart} alt="" />
          <span className='fw-6 fs-15 text-gray'>Ваша корзина для покупок пуста.</span>
          <Link to="/" className='shopping-btn bg-pink text-white fw-5'>Отправляйся за покупками прямо сейчас</Link>
        </div>
      </div>
    )
  }

    return (
      <div className='cart bg-whitesmoke'>
        <div className='container'>
          <div className='cart-ctable'>
            <div className='cart-chead bg-white'>
              <div className='cart-ctr fw-6 font-manrope fs-15'>
                <div className='cart-cth'>
                  <span className='cart-ctxt'>№</span>
                </div>
                <div className='cart-cth'>
                  <span className='cart-ctxt'>Изображение</span>
                </div>
                <div className='cart-cth'>
                  <span className='cart-ctxt'>Товар</span>
                </div>
                <div className='cart-cth'>
                  <span className='cart-ctxt'>Цена за единицу</span>
                </div>
                <div className='cart-cth'>
                  <span className='cart-ctxt'>Количество</span>
                </div>
                <div className='cart-cth'>
                  <span className='cart-ctxt'>Итого</span>
                </div>
                <div className='cart-cth'>
                  <span className='cart-ctxt'>Действия</span>
                </div>
              </div>
            </div>

            <div className='cart-cbody bg-white'>
              <DisplayAllItems carts={carts} dispatch={dispatch} />
            </div>
            <div className='cart-cfoot flex align-start justify-between py-3 bg-white'>
                <div className='cart-cfoot-l'>
                  <button
                    type='button'
                    className='clear-cart-btn fs-15 text-uppercase fw-4'
                    onClick={() => dispatch(clearCart())}
                  >
                    <i className='fas fa-trash'></i>
                    <span className='mx-1'>Очистить корзину</span>
                  </button>
                </div>
                <div className='cart-cfoot-r flex flex-column justify-end'>
                  <div className='total-txt flex align-center justify-end'>
                    <div className='font-manrope fw-5'>Итого ({itemsCount}) шт.: </div>
                    <span className='text-pink fs-22 mx-2 fw-6'>{formatPrice(totalAmount)}</span>
                  </div>
                    <button type="button" className='checkout-btn text-white bg-pink fs-16'>Заказать</button>
                  </div>
            </div>
          </div>
        </div>
      </div>
    )
}

const DisplayAllItems = ({ carts, dispatch }: CartProps) => {
  return carts.map((cart, idx) => {
    return (
      <div className='cart-ctr py-4' key={cart.id}>
        <div className='cart-ctd'>
          <span className='cart-ctxt'>{idx + 1}</span>
        </div>
        <div className='cart-ctd'>
          <span className='cart-ctxt'>
            <img src={cart.images[0]} alt="image" />
          </span>
        </div>
        <div className='cart-ctd'>
          <span className='cart-ctxt'>{cart.title}</span>
        </div>
        <div className='cart-ctd'>
          <span className='cart-ctxt'>{formatPrice(Number(cart.discountedPrice))}</span>
        </div>
        <div className='cart-ctd'>
            <div className='qty-change flex align-center'>
              <button
                type="button"
                className='qty-decrease flex align-center justify-center'
                onClick={() => dispatch(toggleCartQty({ id: cart.id, type: "DEC" }))}
              >
                <i className='fas fa-minus'></i>
              </button>
              <div className='qty-value flex align-center justify-center'>
                {cart.quantity}
              </div>
              <button
                type="button"
                className='qty-increase flex align-center justify-center'
                onClick={() => dispatch(toggleCartQty({ id: cart.id, type: "INC" }))}
              >
                <i className='fas fa-plus'></i>
              </button>
            </div>
        </div>
        <div className='cart-ctd'>
          <span className='cart-ctxt text-pink fw-5'>{formatPrice(Number(cart.totalPrice))}</span>
        </div>
        <div className='cart-ctd'>
          <button
            type="button"
            className='delete-btn text-white py-2 px-3'
            onClick={() => dispatch(removeFromCart(cart.id))}
          >
            Удалить
          </button>
        </div>
      </div>
    )
  })
}

export default CartPage