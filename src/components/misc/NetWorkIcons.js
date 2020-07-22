import React from 'react';
import language from '../../language/hebrew.json';


const NetWorkIcons = () => {
    const onClick = () => {
        window.scrollTo(0, 0);
    }
    return (
        <div className="netWorkIconContainer">
            <p>{language.copyRight}</p>
            <div>
                <a href="https://myaccount.google.com/profile"><img className="image-icon-small imageMargin" src="./icons/google-plus.png" alt="" /></a>
                <a href="https://twitter.com/explore"><img className="image-icon-small imageMargin" src="./icons/twitter.png" alt="" /></a>
                <a href="https://www.instagram.com/"><img className="image-icon-small imageMargin" src="./icons/instagram-sketched.png" alt="" /></a>
                <a href="https://www.facebook.com/"><img className="image-icon-small imageMargin" src="./icons/facebook.png" alt="" /></a>
                <img className="image-icon-small imageMargin" onClick={onClick} src="./icons/white-arrow.png" alt="" />
            </div>
        </div>
    );
}
export default NetWorkIcons;

