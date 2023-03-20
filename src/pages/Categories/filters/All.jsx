import CategoriesItem from "../../../components/CategoriesItem/CategoriesItem";
import Footer from "../../../components/Footer/Footer";
import Newsletter from "../../../components/Newsletter/Newsletter";
import { items } from "../../../mocks/AllData";

function All() {
    return (
        <>
            <CategoriesItem items={items} />
            <Newsletter />
            <Footer />
        </>
    );
}

export default All;
