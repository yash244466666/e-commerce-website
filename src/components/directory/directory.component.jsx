/* eslint-disable */
import DirectoryItem from '../directory-item/directory-item.component'
import {Link} from "react-router-dom"

let Directory = ({categories}) =>{
    return(
        <div className="categories-container">
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category}/>
        ))}
        </div>
    )

}

export default Directory;