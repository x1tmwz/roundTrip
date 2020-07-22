import React from 'react';
import { NavLink} from 'react-router-dom';
import language from '../../language/hebrew.json';

const Header = (props) => {
   
    return (
        <header className="header">
            <NavLink to="/" className="header-link" activeClassName="header-link-BlindActive">{language.Header.homepage}</NavLink>
            <NavLink to="/packageTour" className="header-link" activeClassName="header-link-active">{language.Header.packageTour}</NavLink>
            <NavLink to="/flight" className="header-link" activeClassName="header-link-active">{language.Header.flight}</NavLink>
            <NavLink to="/marganimTours" className="header-link" activeClassName="header-link-active">{language.Header.marganimTours}</NavLink>
            <NavLink to="/contact" className="header-link" activeClassName="header-link-active">{language.Header.contact}</NavLink>
            <NavLink to="/"><img className="image-icon" src="./NASA-Logo.png" alt="" /></NavLink>
        </header>
        
    );
}
export default Header;