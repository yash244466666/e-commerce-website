import "./shop.styles.scss";
import {Routes, Route} from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Cetegory from '../category/category.component'



const Shop = () => {

    return (
        <Routes>
             <Route index element={<CategoriesPreview/>}/>
             <Route path=":cetegory" element={<Cetegory/>}/>
        </Routes>
    );
};

export default Shop;