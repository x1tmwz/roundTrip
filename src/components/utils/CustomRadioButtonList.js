import React from 'react';
import { v4 as uuid } from 'uuid';
import CustomRadioButton from './CustomRadioButton';




const CustomRadioButtonsList = (props) => {

    const setOption = (val) => {
        let value = val;
        if (!isNaN(value)) {
            value = parseInt(value);
        }
        if (props.setOption) {
            props.setOption(value)
        }
    }
    const isCheckd = (val) => {
        let value = val
        if (!isNaN(value)) {
            value = parseInt(val);
        }
        if (props.activeOptions.includes(value)) {
            return true;
        }
        return false;

    }
    return (
        <div className="CustomRadioButtonList"> 
            {props.options.map(({ ui, value }) => {
                const id = uuid();
                return (
                    <CustomRadioButton key={id} id={id} value={value} checked={isCheckd(value)} name={value} label={ui} setOption={setOption} />
                );
            })}
        </div>
    );
}
export default CustomRadioButtonsList;

