import {useContext, useState, useEffect} from "react";
import { useParams } from 'react-router';

import ProductCard from "../../components/product-card/product-card.component";

import {CategoriesContext} from "../../context/cetegories.context";



import './category.style.scss'

const Cetegory = () => {
    const { cetegory } = useParams();

    const { cetegoriesMap } = useContext(CategoriesContext);

    const [product, setProduct] = useState(cetegoriesMap[cetegory]);

    useEffect(() => {
        setProduct(cetegoriesMap[cetegory])

    }, [cetegory, cetegoriesMap])

    return(
        <>
        <h2 className='categoy-title'>{cetegory.toUpperCase()}</h2>
        <div className='category-container'>
            {product && 
                product.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
        </div>
        </>
    );

}

export default Cetegory;