import styles from './index.module.css'
import {CarouselPage} from "@/pages/carosel";
import ItemsList from "@/pages/Items/items";
import HeaderNav from "@/pages/Header/header";
import ProductsSection from "@/pages/Products/products";

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
