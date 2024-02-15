import styles from './index.module.css'
import CarouselPage from "@/components/carosel";
import ItemsList from "@/components/Items/items";
import HeaderNav from "@/components/Header/header";
import ProductsSection from "@/components/Products/products";

export default function Home() {
    return (
        <div className={styles.container}>
            <HeaderNav/>
            <CarouselPage/>
            <ItemsList/>
            <ProductsSection/>
        </div>
    );
}
