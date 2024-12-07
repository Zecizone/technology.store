import axios from "axios";
import {IProduct} from "../../Shared/types";

const API_HOST = `http://${import.meta.env.VITE_LOCAL_PATH}:${import.meta.env.VITE_LOCAL_PORT}/${import.meta.env.VITE_API_PATH}`;

export async function getProducts(): Promise<IProduct[] | null> {
    try {
        const {data} = await axios.get<IProduct[]>(`${API_HOST}/products`);
        return data;
    } catch (e) {
        console.log(e);
        return null;
    }
}

export async function getProduct(
    id: string
): Promise<IProduct | null> {
    try {
        const {data} = await axios.get<IProduct>(
            `${API_HOST}/products/${id}`
        );
        return data;
    } catch (e) {
        return null;
    }
}

export async function getSimilarProducts(
    originProductId: string
): Promise<IProduct[] | null> {
    try {
        const {data} = await axios.get<IProduct[]>(
            `${API_HOST}/products/similar/${originProductId}`
        );
        return data;
    } catch (e) {
        return null;
    }
}