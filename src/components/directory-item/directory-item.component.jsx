import './directory-item.style.scss'
import {Link} from "react-router-dom"


let DirectoryItem = ({category}) => {
    let {imageUrl, title} = category
    return(
        <div className="directory-item-container">
                <div className="background-image" 
                style = {{
                backgroundImage :  `url(${imageUrl})`
                }}/>
                <div className="body">
                <h1>{title.toUpperCase()}</h1>
                <Link className="home-page-product-link" to={`/shop/${title}`}>Shop Now</Link>
                </div>
      </div>
    )

}
export default DirectoryItem;