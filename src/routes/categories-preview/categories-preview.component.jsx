/* eslint-disable */
import {useContext} from "react";

import {CategoriesContext} from "../../context/cetegories.context";

import CategoryPreview from '../../components/category-preview/category-preview.component';




const CategoriesPreview = () => {

    const {cetegoriesMap} = useContext(CategoriesContext);

    return (
        <div className="category-preview-container">
            {Object.keys(cetegoriesMap).map((title) =>{
                const products = cetegoriesMap[title]; 
                return <CategoryPreview key={title} title={title} products={products}/>

           })} 
        </div>
    );
};

export default CategoriesPreview;