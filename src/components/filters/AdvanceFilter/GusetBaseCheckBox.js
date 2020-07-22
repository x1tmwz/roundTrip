import React from 'react';
import { connect } from 'react-redux';
import { setGuestBase } from '../../../actions/advanceFilter';
import CustomRadioButtonList from '../../utils/CustomRadioButtonList';

const GusetBaseCheckBox = ({ guestBase, startSetGuestBase }) => {
    return (
        <CustomRadioButtonList
            options={[{ ui: "לינה", value: "sleeping" }, { ui: "ארוחת בוקר", value: "breakfast" }]}
            activeOptions={guestBase}
            setOption={startSetGuestBase}
        />
    );
}
const mapStateToProps = (state) => ({
    guestBase: state.advanceFilter.guestBase
})
const mapDispatchToProps = (dispatch) => ({
    startSetGuestBase: (option) => dispatch(setGuestBase(option))
})
export default connect(mapStateToProps, mapDispatchToProps)(GusetBaseCheckBox);