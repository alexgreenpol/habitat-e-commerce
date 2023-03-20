import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../pages/ProductPage/ProductPage";
import EmptyCart from "../EmptyCart/EmptyCart";

function CartWithItems() {
    const { cartItems, setCartItems } = useContext(CartContext);

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const newTotalPrice = cartItems.reduce(
            (acc, item) => acc + item.price,
            0
        );
        setTotalPrice(newTotalPrice);
    }, [cartItems]);

    return (
        <>
            <div className="full-cart-div">
                <div className="full-cart">
                    {cartItems.map((item, id) =>
                        cartItems.length !== 0 ? (
                            <CartItem
                                key={id}
                                item={item}
                                setCartItems={setCartItems}
                            />
                        ) : (
                            <EmptyCart key={id} />
                        )
                    )}
                </div>
            </div>
            <div className="subtotal-div">
                <div className="sub-right">
                    <p>Subtotal</p>
                    <p className="total-price">{totalPrice + ".00$"}</p>
                </div>
                <div className="sub-left">
                    <Link>Go to Checkout</Link>
                </div>
            </div>
        </>
    );
}

export default CartWithItems;
