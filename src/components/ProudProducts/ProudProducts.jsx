import ProductItem from "../ProductItem/ProductItem";
import "./ProudProducts.css";

function ProudProducts() {
    return (
        <div className="products">
            <div className="container">
                <h2 className="proud-h2">Products we are proud of</h2>
                <div className="products-grid">
                    <ProductItem />
                </div>
            </div>
        </div>
    );
}

export default ProudProducts;
