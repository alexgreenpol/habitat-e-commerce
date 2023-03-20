import Banner from "../../components/Banner/Banner";
import BannerReverse from "../../components/BannerReverse/BannerReverse";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";
import ProudProducts from "../../components/ProudProducts/ProudProducts";
import TrendingSlider from "../../components/TrendingSlider/TrendingSlider";
import Banner1 from "../../images/banner/banner1.webp";
import Banner2 from "../../images/banner/banner2.webp";
import "./Home.css";

function Home() {
    return (
        <main className="wrapper">
            <Banner
                title="The material of the moment"
                text="Nod to nature with this year’s must-have material, mango wood. This naturally warm toned hardwood is known for its beautifully patterned grain."
                img={Banner1}
            />
            <ProudProducts />
            <TrendingSlider />
            <BannerReverse
                title="Comfortable & Elegante Living"
                text="RAOUF Products are all made to standard sizes so that you can mix and match them freely."
                img={Banner2}
            />
            <Newsletter />
            <Footer />
        </main>
    );
}

export default Home;
