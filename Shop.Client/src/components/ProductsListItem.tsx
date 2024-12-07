import {FunctionComponent} from "react";
import {IProduct} from "../../../Shared/types";
import {Link} from "react-router-dom";

interface IProductProps {
    product: IProduct
}

const ProductsListItem: FunctionComponent<IProductProps> = ({product}) => {
    const imgUrl = product.thumbnail?.url ?? "../product-placeholder.png";
    return (
        <div>
            <Link to={`/products/${product.id}`}>
                <div>
                    <img src={imgUrl} alt={product.title}/>
                </div>
            </Link>
            <div>
                <Link to={`/products/${product.id}`}>
                    <div>
                        {product.title}
                    </div>
                </Link>
                <div>
                    <span>Comments:</span> {product.comments?.length || 0}
                </div>
                <div>
                    <span>Price:</span> {product.price}
                </div>
            </div>
        </div>
    );
}
export default ProductsListItem;