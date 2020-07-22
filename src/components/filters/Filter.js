import React from 'react';
import { connect } from 'react-redux';
import { sortByDate, sortByMostWorthwhile, sortByPriceHighToLow, sortByPriceLowToHigh, sortByRating,sortByCheapest,clearFilter } from '../../actions/filter';
import {FaHandHoldingUsd} from 'react-icons/fa'
import {RiMedalLine} from 'react-icons/ri';
import {GiWallet} from 'react-icons/gi';
import language from '../../language/hebrew.json'

const Filter = ({
    sortByDate,
    sortByPriceHighToLow,
    sortByPriceLowToHigh,
    sortByMostWorthwhile,
    sortByRating,
    sortByCheapest,
    clearFilter,
    filter
}) => {
    const sortByHandler = (e) => {
        if (e.target.value === 'lowToHigh') {
            sortByPriceLowToHigh();
        } else if (e.target.value === 'highToLow') {
            sortByPriceHighToLow();
        } else if (e.target.value === "date") {
            sortByDate();
        }
    }
    const worthwhileFilterHandler = (e) => {
        sortByMostWorthwhile();
    }
    const ratingFilterHandler = (e) => {
        sortByRating();
    }
    const cheapestFilterHandler = (e) => {
        sortByCheapest();
    }
    return (

        <div className="filter-Container">
              <button
                className={filter.cheapest ? "blueRoyalButton" : "noneColorButton"}
                onClick={cheapestFilterHandler}
            >
                 <FaHandHoldingUsd className="image-icon-extra-small ml-s" />
                {language.filter.cheapest}
               
            </button>
            <button
                className={filter.mostPouplar ? "blueRoyalButton" : "noneColorButton"}
                onClick={ratingFilterHandler}
            >
                <RiMedalLine className="image-icon-extra-small ml-s" />
                {language.filter.mostPopular}
                
            </button>
            <button
                className={filter.mostWorthwhile ? "blueRoyalButton" : "btn noneColorButton"}
                onClick={worthwhileFilterHandler}
            >
                <GiWallet className="image-icon-extra-small ml-s" />
                {language.filter.mostWorthwhile}
            </button>
            <span>  |  </span>  
            <span className="greyText boldText mr-s">{language.filter.sortBy}</span>
            
            <select onChange={sortByHandler}>
                <option value="date">{language.filter.date}</option>
                <option value="lowToHigh">{language.filter.lowToHigh}</option>
                <option value="highToLow">{language.filter.hightToLow}</option>
            </select>
        </div>


    );
}
const mapStateToProps = (state) => ({
    filter: state.filter
})
const mapDispatchToProps = (dispatch) => ({
    sortByDate: () => dispatch(sortByDate()),
    sortByPriceHighToLow: () => dispatch(sortByPriceHighToLow()),
    sortByPriceLowToHigh: () => dispatch(sortByPriceLowToHigh()),
    sortByMostWorthwhile: () => dispatch(sortByMostWorthwhile()),
    sortByRating: () => dispatch(sortByRating()),
    sortByCheapest:()=>dispatch(sortByCheapest()),
    clearFilter:()=>dispatch(clearFilter())

})
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
