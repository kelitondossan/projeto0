import { Product } from "@/types/products";
import { bindActionCreators, createSlice } from "@reduxjs/toolkit";
import { store } from "./store";
import { ShowToast } from "../components/ToastMessage";

type ProductState = {
    cartItems: Array<Product>,
    totalQuantity: Number,
    totalPrice: number
};

const initialState = {
    cartItems: [],
    totalPrice: 0,
    totalQuantity: 0
} as ProductState;

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const addItem = state.cartItems.find(
                (Cartitem) => Cartitem.id === action.payload.id
            );
            addItem ? (addItem.quantity = addItem.quantity + 1 ) : state.cartItems.push({...action.payload, quantity: 1});
            
            ShowToast({type: 'success', message: `${action.payload.name} No carrinho`})
        },
        increase: (state, action) => {
            
            const itemIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.payload.id
            );
            //if (itemIndex === -1) return;
            state.cartItems[itemIndex].quantity++;
        },
        decrease: (state, action) =>{
            const itemIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.payload.id
            );
            state.cartItems[itemIndex].quantity--;
            if (state.cartItems[itemIndex].quantity === 0) {
                state.cartItems.splice(itemIndex, 1)
            } else {
                state.cartItems[itemIndex].quantity < 1;
            };
        },
        removeToCart: (state, action) =>{
            state.cartItems =  state.cartItems.filter((cartItem) => cartItem.id !== action.payload);
        },

        getCartTotal: (state, action) => {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) =>{
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += quantity;

                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0
                }
            );
            state.totalQuantity = quantity;
            state.totalPrice = total;
        },
        
        clear: (state, action) => {
            state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload);
        }
    }
})
export type initialState = ReturnType<typeof store.getState>
export const { addToCart, increase, decrease, removeToCart, clear, getCartTotal } = CartSlice.actions;
export default CartSlice.reducer