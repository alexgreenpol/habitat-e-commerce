import "../../components/ProudProducts/ProudProducts.css";
import CategoriesHeader from "../../components/CategoriesHeader/CategoriesHeader";
import { Outlet } from "react-router";

function Categories() {
    return (
        <main className="wrapper">
            <CategoriesHeader />
            <Outlet />
        </main>
    );
}

export default Categories;
