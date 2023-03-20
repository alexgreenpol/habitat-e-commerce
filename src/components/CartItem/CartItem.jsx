import { useContext } from "react";
import { CartContext } from "../../pages/ProductPage/ProductPage";

function CartItem({ item }) {
    const { cartItems, removeFromCart } = useContext(CartContext);

    const removeItem = (id) => {
        removeFromCart(id);
        const json = JSON.stringify(cartItems.id);
        localStorage.removeItem("cartItems", json);
    };

    return (
        <div key={item.id} className="cart-item">
            <div className="cart-img">
                <img src={item.img} alt="product" />
            </div>
            <div className="cart-middle">
                <p className="cart-name">{item.description}</p>
            </div>
            <div className="cart-right">
                <p className="cart-price">{item.price}.00$</p>
                <i
                    onClick={() => removeItem(item.id)}
                    className="fa-sharp fa-solid fa-xmark"
                ></i>
            </div>
        </div>
    );
}

export default CartItem;
