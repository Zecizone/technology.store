import {Link} from "react-router-dom";
import {ProductsContext} from "../Context";
import {useContext} from "react";

export default function Main() {
    const HOST = `http://${import.meta.env.VITE_LOCAL_PATH}:${import.meta.env.VITE_LOCAL_PORT}`;
    const productsContext = useContext(ProductsContext);
    const calcTotalPrice = () => {
        const { products } = productsContext;

        if (!products) {
            return 0;
        }

        return products
            .map((product) => product.price)
            .reduce((accumulator, price) => accumulator + price, 0);
    };

    return (
        <div className="App">
            <h1>Shop.Client</h1>
            <p>В базе данных находится {productsContext.products?.length} товаров общей
                стоимостью {calcTotalPrice()}</p>
            <Link to="/products-list">Перейти к списку товаров</Link>
            <br/>
            <a href={`${HOST}/admin`} target='_blank' rel="noreferrer">Перейти в систему администрирования</a>
        </div>
    )
}