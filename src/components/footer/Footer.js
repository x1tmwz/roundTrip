import React from 'react';
import CustomList from '../utils/CustomList';
import language from '../../language/hebrew.json';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-imageContainer">
                <img className="image-icon-big" src="./NASA-Logo.png" alt="" />
            </div>
            <div className="footer-insideContainer">
                <CustomList
                    title={language.Footer.FlightsAbroad.title}
                    classNameContainer="columnList"
                    classNameTitle=""
                    classNameOption="list-item"
                    options={language.Footer.FlightsAbroad.options}
                />
                <CustomList
                    title={language.Footer.vacationFamilies.title}
                    classNameContainer="columnList"
                    classNameTitle=""
                    classNameOption="list-item"
                    options={language.Footer.vacationFamilies.options}
                />
                <CustomList
                    title={language.Footer.vacationCouples.title}
                    classNameContainer="columnList"
                    classNameTitle=""
                    classNameOption="list-item"
                    options={language.Footer.vacationCouples.options}
                />
                <CustomList
                    title={language.Footer.general.title}
                    classNameContainer="columnList"
                    classNameTitle=""
                    classNameOption="list-item"
                    options={language.Footer.general.options}
                />
            </div>
        </footer>
    );
}
export default Footer;