import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setPriceRange } from '../../../actions/advanceFilter';
import Slider from '@material-ui/core/Slider'
import { makeStyles } from '@material-ui/core/styles';
import language from '../../../language/hebrew.json'


const useStyles = makeStyles({
    root: {
        width: "100%",
    },
});

const PriceRange = ({priceRange,startSetPriceRange}) => {
    const classes = useStyles();
    const [value, setValue] = useState([priceRange.priceFrom,priceRange.priceTo]);
    const handleChange = (event, newValue) => {
        startSetPriceRange(newValue);
        setValue(newValue);
    };
    return (
        <div className={classes.root}>
            <p>{language.priceRange}</p>
            <div className="flexRow">
                <span className="ml-xxxl">{value[1]}$</span>
                <span>{value[0]}$</span>
            </div>
            <Slider
                defaultValue={[priceRange.min,priceRange.max]}
                value={value}
                min={priceRange.min}
                max={priceRange.max}
                onChange={handleChange}
                valueLabelDisplay="auto"
            />
        </div>
    );

}
const mapStateToProps = (state) => ({
    priceRange: state.advanceFilter.priceRange
})
const mapDispatchToProps = (dispatch) => ({
    startSetPriceRange: (arr) => dispatch(setPriceRange(arr))
})
export default connect(mapStateToProps,mapDispatchToProps)(PriceRange);