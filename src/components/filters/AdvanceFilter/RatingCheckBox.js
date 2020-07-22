import React from 'react';
import { connect } from 'react-redux';
import createStarRateOptionArray from '../../utils/createStarRateOptionArray';
import { setRatingFilter } from '../../../actions/advanceFilter';
import CustomRadioButtonList from '../../utils/CustomRadioButtonList';

const RatingCheckBox = ({rating,startSetRatingFilter}) => {
    return (
        <CustomRadioButtonList
            options={createStarRateOptionArray(5)}
            activeOptions={rating}
            setOption={startSetRatingFilter}
        />
    );
}
const mapStateToProps = (state) => ({
    rating: state.advanceFilter.rating
})
const mapDispatchToProps = (dispatch) => ({
    startSetRatingFilter: (rating) => dispatch(setRatingFilter(rating))
})
export default connect(mapStateToProps, mapDispatchToProps)(RatingCheckBox);