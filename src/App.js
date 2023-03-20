import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ProductPage, { CartContext } from "./pages/ProductPage/ProductPage";
import Categories from "./pages/Categories/Categories";
import All from "./pages/Categories/filters/All";
import Furnitures from "./pages/Categories/filters/Furnitures";
import Electronics from "./pages/Categories/filters/Electronics";
import Lamps from "./pages/Categories/filters/Lamps";
import Kitchen from "./pages/Categories/filters/Kitchen";
import Chairs from "./pages/Categories/filters/Chairs";
import SkinCare from "./pages/Categories/filters/SkinCare";

function App() {
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (items) => {
		setCartItems([...cartItems, ...items]);
	};

	const removeFromCart = (id) => {
		let itemIndex = cartItems.findIndex((item) => item.id === id);
		setCartItems(cartItems.filter((item, index) => index !== itemIndex))
	}

	// local storage
	useEffect(() => {
		const json = localStorage.getItem("cartItems");
		const savedCart = JSON.parse(json);
		if (savedCart) {
			setCartItems(savedCart);
		}
	}, []);

	useEffect(() => {
		const json = JSON.stringify(cartItems);
		localStorage.setItem("cartItems", json);
	}, [cartItems]);

	return (
		<CartContext.Provider value={{ cartItems, addToCart, setCartItems, removeFromCart }}>
			<Navbar />
			<Routes>
				<Route index path="/" element={<Home />} />

				<Route path="categories" element={<Categories />}>
					<Route path="all" element={<All />} />
					<Route path="furnitures" element={<Furnitures />} />
					<Route path="electronics" element={<Electronics />} />
					<Route path="lamps" element={<Lamps />} />
					<Route path="kitchen" element={<Kitchen />} />
					<Route path="chairs" element={<Chairs />} />
					<Route path="skin-care" element={<SkinCare />} />
				</Route>
				<Route path="categories/product/:id" element={<ProductPage />} />
			</Routes>
		</CartContext.Provider>
	);
}

export default App;
