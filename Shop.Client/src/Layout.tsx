import {NavLink, Route, Routes} from "react-router-dom"
import Main from "./pages/Main"
import ProductsList from "./pages/ProductsList"
import ProductPage from "./pages/ProductPage"

export default function Layout() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products-list">products</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path='/' element={<Main/>}></Route>
                <Route path='/products-list' element={<ProductsList/>}></Route>
                <Route path='/:productId' element={<ProductPage/>}></Route>
            </Routes>
        </>
    )
}