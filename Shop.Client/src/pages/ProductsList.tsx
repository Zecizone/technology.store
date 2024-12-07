import {useContext} from "react";
import {ProductsContext} from "../Context";
import ProductsListItem from "../components/ProductsListItem";

export default function ProductsList() {
    const productsContext = useContext(ProductsContext);
    return (
        <>
            <h1>Список товаров ({productsContext.products?.length})</h1>
            {
                productsContext.products?.map((product) => {
                    return (
                        <li key={product.id}>
                            <ProductsListItem product={product}/>
                        </li>)
                })
            }
        </>
    )
}