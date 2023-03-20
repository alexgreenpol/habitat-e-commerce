import { items } from "../../../mocks/AllData";
import CategoriesItem from "../../../components/CategoriesItem/CategoriesItem";
import Footer from "../../../components/Footer/Footer";
import Newsletter from "../../../components/Newsletter/Newsletter";

function SkinCare() {
    const filteredItems = items.filter(
        (item) => item.category === "electronic"
    );

    return (
        <>
            <CategoriesItem items={filteredItems} />
            <Newsletter />
            <Footer />
        </>
    );
}

export default SkinCare;
