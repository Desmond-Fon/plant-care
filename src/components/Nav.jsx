import logo from '../assets/Logo.svg'
import { NavLink } from 'react-router-dom';
const Nav = () => {


    const navLinkStyle = ({ isActive }) => {
        return {
            color: isActive ? "black" : "#767676",
        };
    };
    return (<>
        <div className="py-[50px] px-[120px] flex justify-between items-center">
            <div>
                <img src={logo} alt="" />
            </div>

            <div>
                <div className='flex justify-end items-center gap-[90px] text-[24px]'>
                    <NavLink to={'/'} style={navLinkStyle}
                    >Home</NavLink>
                    <NavLink to={'/detect'} style={navLinkStyle}
                    >Detect</NavLink>
                    <NavLink to={'/about'} style={navLinkStyle}
                    >About Us</NavLink>
                </div>
            </div>
        </div>
    </>);
}

export default Nav;