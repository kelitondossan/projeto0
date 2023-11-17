import React, { useState, useMemo, useEffect } from "react";
import { Product } from "@/types/products";
import {
  SideContainer,
  SideHeader,
  BottomButton,
  CartButton,
  SideProducts,
  CartProducts,
  ProductPrice,
  ProductQuantity,
  TotalContainer,
} from "./styles";
import { FaShoppingCart } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import {
  increase,
  decrease,
  getCartTotal,
  initialState,
  clear,
} from "../../features/cartSlice";

interface ButtonProps {
  cartOpen: boolean;
}

const SideBar: React.FC<ButtonProps> = ({ cartOpen }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: initialState) => state.cart);
  const cart = useSelector((state: initialState) => state.cart);
  const [isOpen, setIsOpen] = useState(false);
  const handleCLick = () => setIsOpen(!isOpen);

  useEffect(() => {
    dispatch(getCartTotal(cart));
  }, [cart]);

  return (
    <>
      <CartButton onClick={handleCLick}>
        <FaShoppingCart />
        <span>{cart.totalQuantity.toString()}</span>
      </CartButton>
      <SideContainer cartOpen={isOpen}>
        <div className="content">
          <SideHeader>
            <div>
              <h2>Carrinho de compras</h2>
            </div>
            <span onClick={handleCLick}>x</span>
          </SideHeader>
          <div className="overflow-container">
            <SideProducts>
              {cartItems.map((product) => (
                <CartProducts key={product.id}>
                  <img src={product.photo} width={75} height={70} />
                  <span>{product.name}</span>
                  <div className="quantity-container">
                    <ProductQuantity>
                      <button
                        className="minor"
                        onClick={() => dispatch(decrease(product))}
                      >
                        -
                      </button>
                      <span>{product.quantity}</span>
                      <button
                        className="plus"
                        onClick={() => dispatch(increase(product))}
                      >
                        +
                      </button>
                    </ProductQuantity>

                    <ProductPrice>
                      R${product.price * product.quantity}
                    </ProductPrice>
                  </div>
                  <button
                    className="remove"
                    onClick={() => dispatch(clear(product.id))}
                  >
                    x
                  </button>
                </CartProducts>
              ))}
            </SideProducts>
          </div>

          <TotalContainer>
            <span>Total:</span>
            <span>R${cart.totalPrice}</span>
          </TotalContainer>
          <BottomButton>Finalizar Compra</BottomButton>
        </div>
      </SideContainer>
    </>
  );
};

export default SideBar;
