import {useEffect, useState} from "react";
import {getSimilarProducts} from "../api"
import {IProduct} from "../../../Shared/types";
import {Link} from "react-router-dom";

interface ISimilarProductsProps {
    similarTo: string
}

const SimilarProducts = ({similarTo}: ISimilarProductsProps) => {
    const [similarProducts, setSimilarProducts] = useState<IProduct[] | null>();
    useEffect(() => {
        getSimilarProducts(similarTo).then(r => setSimilarProducts(r));
    }, [])
    return (
        <>
            <h1>Похожие товары</h1>
            {similarProducts?.map(product =>
                <div key={product.id}>
                    <Link to={`/${product.id}`}> {product.title}</Link>
                    <div>{product.price}</div>
                </div>
            )}
        </>
    );
}
export default SimilarProducts;