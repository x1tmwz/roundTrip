import React from 'react';
import language from '../../language/hebrew.json';

const JoinToClub = () => {
    const signToClubHandler = (e) => {
        e.preventDefault();
        
    }
    return (
        <form onSubmit={signToClubHandler} className="joinToClubContainer">
            <h3>{language.JoinToClub.joinToOurClub}</h3>
            <div className="joinToClubContainer-insideContainer">
                <input type="text" name="fullname" placeholder={language.JoinToClub.fullName} />
                <input type="text" name="email" placeholder={language.JoinToClub.email} className="joinToClub-marginItems" />
                <button className="redButton joinToClub-marginItems">{language.JoinToClub.sign}</button>
            </div>
        </form>
    );
}
export default JoinToClub;