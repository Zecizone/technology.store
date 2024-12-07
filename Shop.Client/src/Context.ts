import {IProduct} from "../../Shared/types";
import {createContext} from "react";

export type ProductsContextType = {
    products: IProduct[];
}
const defaultValue: ProductsContextType = {
    products: []
}
export const ProductsContext = createContext<ProductsContextType>(defaultValue);