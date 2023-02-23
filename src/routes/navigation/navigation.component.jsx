import {Outlet, Link} from 'react-router-dom'
import {Fragment, useContext} from 'react'

import {UserContext} from '../../context/user.context'
import {CartContext} from '../../context/cart.context'

import {ReactComponent as Logo} from '../../assets/Logo.svg'
import { signOutUser } from '../../util/firebase/firebase.util'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";



const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return(
    <Fragment>
        <div className='navigation shadow-sm p-3 mb-5'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/> 
            </Link>
            <div className='nav-links-container '>
                <Link className='nav-link text-dark' to='/shop'>
                    SHOP                    
                </Link>
                { currentUser ? (
                    <span className='nav-link text-dark' onClick={signOutUser}>{''}SIGN OUT{''}</span>

                ) : (<Link className='nav-link text-dark' to='/auth'>
                    SIGN IN                    
                </Link>)
                }
                <CartIcon/>
            </div>
            {isCartOpen && <CartDropdown/>}
        </div>
        <Outlet/>
    </Fragment>
    )
  }
export default Navigation;