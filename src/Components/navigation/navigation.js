import { NavLink } from 'react-router-dom';

function Nav(props){
    return(
        <div className = 'row mt-2 mb-4'>
            <li className='nav-item'>
            <NavLink 
                className='nav-link'
                to='/profile'
                activeClassName='active profile'
                >profile</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink
                className='nav-link'
                to='/dashboard'
                activeClassName='active dashboard'
                >dashboard</NavLink>
            </li>
        </div>
    )
}
export default Nav;