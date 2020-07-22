import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../../../actions/advanceFilter';
import language from '../../../language/hebrew.json'

const TextFilter = ({ text, startSetTextFilter }) => {
    const textHandler = (e) => {
        const value = e.target.value;
        startSetTextFilter(value);
    }
    return (
       <input type="text" onChange={textHandler} className="textFilter" placeholder={language.textFiler}/>
    );
}
const mapStateToProps = (state) => ({
    text: state.advanceFilter.text
})
const mapDispatchToProps = (dispatch) => ({
    startSetTextFilter: (text) => dispatch(setTextFilter(text))
})
export default connect(mapStateToProps, mapDispatchToProps)(TextFilter);